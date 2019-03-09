import * as React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Loading from '../components/Loading';

const HomeRoute = React.lazy(() => import('../components/Home'));
const ProjectsRoute = React.lazy(() => import('../components/Projects'));
const PageNotFoundRoute = React.lazy(() =>
  import('../components/PageNotFound'),
);

const RoutePath = ({ location }: any) => (
  <React.Suspense fallback={<Loading />}>
    <Switch key={location.key} location={location}>
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/projects" component={ProjectsRoute} />
      <Route component={PageNotFoundRoute} />
    </Switch>
  </React.Suspense>
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
      <Alert variant="danger" dismissible={true}>
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
