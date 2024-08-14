import { authActions } from "./auth-slice";
import axios from "axios";

export const logOutt = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return (dispatch) => {
    dispatch(
      authActions.logout({ token: null, userId: null, loggedIn: false })
    );
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      // dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isLogin) => {
  return (dispatch) => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    dispatch(authActions.logIn({ loading: true }));
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAUzjT7FMXo0mtJ1ckAsE-auLn-0NJfe30";
    if (isLogin) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAUzjT7FMXo0mtJ1ckAsE-auLn-0NJfe30";
    }
    axios
      .post(
        // "https://www.googleapis.com/identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyB9AuRXYYyknl7VyWIaLr4UCtD29Qnkrhg",
        // "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB9AuRXYYyknl7VyWIaLr4UCtD29Qnkrhg",
        url,
        authData
      )
      .then((res) => {
        // console.log(res);
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", res.data.localId);
        localStorage.setItem("email", res.data.email);

        dispatch(
          authActions.logIn({
            token: res.data.idToken,
            userId: res.data.localId,
            loading: false,
            user: res.data.email,
            path: "/",
            loggedIn: true,
          })
        );
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authActions.error({ error: err.message, loading: false }));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      // dispatch(logout());
      return;
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        // dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        const email = localStorage.getItem("email");

        dispatch(
          authActions.logIn({
            token: token,
            userId: userId,
            loggedIn: true,
            user: email,
          })
        );
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
