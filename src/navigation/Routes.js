import React from "react";
import {Switch, Route} from "react-router-dom";
import {RouteTransition} from "react-router-transition";
import {asyncComponent} from "react-async-loading";
import LoadingComponent from "../components/Loading";
import PropTypes from "prop-types";

const HomeRoute = asyncComponent(() => System.import("../components/Home"), {
	placeholder: <LoadingComponent />
});
const ProjectsRoute = asyncComponent(() => System.import("../components/Projects"), {
	placeholder: <LoadingComponent />
});
const AboutRoute = asyncComponent(() => System.import("../components/About"), {
	placeholder: <LoadingComponent />
});
const ContactRoute = asyncComponent(() => System.import("../components/Contact"), {
	placeholder: <LoadingComponent />
});
const PageNotFoundRoute = asyncComponent(() => System.import("../components/PageNotFound"), {
	placeholder: <LoadingComponent />
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
