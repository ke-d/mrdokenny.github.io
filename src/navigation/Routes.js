import React from "react";
import {Switch, Route} from "react-router-dom";
import {RouteTransition} from "react-router-transition";
import Loadable from "react-loadable";
import LoadingComponent from "../components/Loading";
import PropTypes from "prop-types";

const HomeRoute = Loadable({
	loader: () => import("../components/Home"),
	loading: LoadingComponent
});

const ProjectsRoute = Loadable({
	loader: () => import("../components/Projects"),
	loading: LoadingComponent
});

const AboutRoute = Loadable({
	loader: () => import("../components/About"),
	loading: LoadingComponent
});

const ContactRoute = Loadable({
	loader: () => import("../components/Contact"),
	loading: LoadingComponent
});

const PageNotFoundRoute = Loadable({
	loader: () => import("../components/PageNotFound"),
	loading: LoadingComponent
});

const RoutePath = ({
	location
}) => (
	<Switch key={location.key} location={location}>
		<Route exact path="/" component={HomeRoute} />
		<Route exact path="/projects" component={ProjectsRoute} />
		<Route exact path="/about" component={AboutRoute} />
		<Route exact path="/contact" component={ContactRoute} />
		<Route component={PageNotFoundRoute} />
	</Switch>
);

RoutePath.propTypes = {
	location: PropTypes.object.isRequired
};

const Routes = () => {
	// Enable the route transition if not on mobile
	if (window.innerWidth >= 768) {
		return (
			<Route render={({
				location, history, match
			}) => (
				<RouteTransition
					pathname={location.pathname}
					atEnter={{
						opacity: 0
					}}
					atLeave={{

					}}
					atActive={{
						opacity: 1
					}}
					runOnMount={true}
				>
					<RoutePath location={location}/>
				</RouteTransition>
			)} />
		);
	}
	return (
		<Route render={({
			location, history, match
		}) => (
			<RoutePath location={location}/>
		)} />
	);
};

export default Routes;
