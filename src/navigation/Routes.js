import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
import { asyncComponent } from 'react-async-loading';
import Spinner from 'react-spinner-material';
//<div style={{textAlign: 'center'}}>Loading...</div>
const LoadingComponent = () => (
  <Spinner
    size={120}
    spinnerColor={"#333"}
    spinnerWidth={2}
    visible={true}
  />
);

const HomeRoute = asyncComponent(() => System.import('../components/Home'), { placeholder: <LoadingComponent /> });
const ProjectsRoute = asyncComponent(() => System.import('../components/Projects'), { placeholder: <LoadingComponent />  });
const AboutRoute = asyncComponent(() => System.import('../components/About'), { placeholder: <LoadingComponent />  });
const ContactRoute = asyncComponent(() => System.import('../components/Contact'), { placeholder: <LoadingComponent />  });
const PageNotFoundRoute = asyncComponent(() => System.import('../components/PageNotFound'), { placeholder: <LoadingComponent />  });


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
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/projects" component={ProjectsRoute} />
        <Route exact path="/about" component={AboutRoute} />
        <Route exact path="/contact" component={ContactRoute} />
        <Route component={PageNotFoundRoute} />
      </Switch>
      </RouteTransition>
    );

  }} />

);

export default Routes;
