import * as React from 'react';
const PageNotFound = ({ location }: any) => (
  <p>
    Page not found - the path, <b>{location.pathname}</b>, did not match any
    React Router routes.
  </p>
);

export default PageNotFound;
