import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logOutt } from "../../store/auth-action";

const MainNavigation = () => {
  // const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);

  // const token = useSelector((state) => state.auth.token);
  let userr;
  if (user !== null && isLoggedIn) {
    userr = user.split("@")[0].toUpperCase();
  }

  // const isLoggedIn = authCtx.isLoggedIn;

  const logout = () => {
    dispatch(logOutt());
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>{isLoggedIn ? userr : "React Auth"}</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/new-quote">Add Quote</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
