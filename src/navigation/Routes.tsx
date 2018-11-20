import * as React from 'react';
import { Alert, Button } from 'react-bootstrap';
import * as Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import Loading from '../components/Loading';
const HomeRoute = Loadable({
  loader: () => import('../components/Home'),
  loading: () => <Loading/>,
});

const ProjectsRoute = Loadable({
  loader: () => import('../components/Projects'),
  loading: () => <Loading />,
});

const AboutRoute = Loadable({
  loader: () => import('../components/About'),
  loading: () => <Loading />,
});

const ContactRoute = Loadable({
  loader: () => import('../components/Contact'),
  loading: () => <Loading />,
});

const PageNotFoundRoute = Loadable({
  loader: () => import('../components/PageNotFound'),
  loading: () => <Loading />,
});

const RedirectRoute = Loadable({
  loader: () => import('../components/Redirect'),
  loading: () => <Loading />,
});

const RoutePath = ({ location }: any) => (
  <Switch key={location.key} location={location}>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/projects" component={ProjectsRoute} />
    <Route exact path="/about" component={AboutRoute} />
    <Route exact path="/contact" component={ContactRoute} />
    <Route exact path="/redirect" component={RedirectRoute} />
    <Route component={PageNotFoundRoute} />
  </Switch>
);

class Routes extends React.Component {
  public state = {
    error: new Error(),
    hadError: false,
  };
  public componentDidCatch(error: Error) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      hadError: true,
    });
    // You can also log error messages to an error reporting service here
  }
  // Reset the error variables
  public handleDismiss() {
    this.setState({
      error: new Error(),
      hadError: false,
    });
  }
  public render() {
    const { error, hadError } = this.state;
    if (!hadError) {
      return (
        <Route
          render={({ location, history, match }) => (
            <RoutePath location={location} />
          )}
        />
      );
    }
    return (
      <Alert bsStyle="danger" onDismiss={() => this.handleDismiss()}>
        <h4>Oh snap! You got an error!</h4>
        <p>{`The error was '${
          error.message
          }'. But no worries, with React 16, the whole App doesn't crash and you can just restart this container.`}</p>
        <p>
          <Button onClick={() => this.handleDismiss()}>Reset Page</Button>
        </p>
      </Alert>
    );
  }
}

export default Routes;
