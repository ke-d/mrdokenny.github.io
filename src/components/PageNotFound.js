import React from 'react';

const PageNotFound = ({ location }) => {
  return (
    <p>
      Page not found - the path, <Code>{location.pathname}</Code>,
      did not match any React Router routes.
    </p>
  );
};

export default PageNotFound;
