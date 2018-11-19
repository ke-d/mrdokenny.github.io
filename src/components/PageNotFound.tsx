import * as React from "react";
import * as PropTypes from "prop-types";
const PageNotFound = ({
	location
}) => (
	<p>
      Page not found - the path, <b>{location.pathname}</b>,
      did not match any React Router routes.
	</p>
);

PageNotFound.propTypes = {
	location: PropTypes.string
};

export default PageNotFound;
