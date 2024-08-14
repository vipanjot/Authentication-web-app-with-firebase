import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Newquote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import { useSelector, useDispatch } from "react-redux";
import { authCheckState } from "./store/auth-action";

function App() {
  const dispatch = useDispatch();

  dispatch(authCheckState());

  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/new-quote" exact>
          <Newquote />
        </Route>
        <Route path="/quotes" exact>
          {isLoggedIn && <AllQuotes />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
