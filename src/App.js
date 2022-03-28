import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { useAuthListener } from './hooks';
export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <IsUserRedirect user={user} exact loggedInPath={ROUTES.BROWSE}>
          <Home />
        </IsUserRedirect>
      </Route>

      <Route exact path={ROUTES.SIGNUP}>
        <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE}>
          <Signup />
        </IsUserRedirect>
      </Route>

      <Route exact path={ROUTES.SIGNIN}>
        <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE}>
          <Signin />
        </IsUserRedirect>
      </Route>

      <Route exact path={ROUTES.BROWSE}>
        <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
      </Route>
    </Router>
  );
}
