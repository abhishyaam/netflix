import React from 'react';
import { Route, Redirect, Routes } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) return children;
        return <Redirect to={{ pathname: loggedInPath }} />;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) return children;
        return <Redirect to={{ pathname: ROUTES.SIGNIN }} />;
      }}
    />
  );
}
