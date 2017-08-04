import React from 'react';

import NavBar from './navigation/NavBar';
import Routes from './navigation/Routes';

export default () => {
  return (
    <div>

      <NavBar/>

      <div id="routeContainer">
      <Routes/>
      </div>
    </div>
  );
}
