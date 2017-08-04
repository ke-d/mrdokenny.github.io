import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

import PageNotFound from '../components/PageNotFound';

const Routes = () => (
  <Route render={({location, history, match}) => {

    return (
      <RouteTransition
        pathname={location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{  }}
        atActive={{ opacity: 1 }}
        runOnMount={true}
      >
      <Switch key={location.key} location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
      </RouteTransition>
    );

  }} />

);

export default Routes;
