import React from "react";
import {
	Col,
	Button
} from "react-bootstrap";
import PropTypes from "prop-types";
const linkType = {
	GITHUB: "default",
	PRODUCT: "success",
	MEDIA: "primary"
};

const styles = {
	image: {
		cursor: "zoom-in"
	}
};

const ProjectContainer = (props) => {
	const {
		src, title, alt, description, projectLinks, openModal, projectIndex
	} = props;
	return (
		<Col xs={12} sm={6} md={4}>

			<div className="thumbnail">

				<img style={styles.image} onClick={() => openModal(projectIndex)} src={src} alt={`${alt}`} />

				<div className="caption">
					<h3>{`${title}`}</h3>
					<p>{`${description}`}</p>
					<p>
						{
							projectLinks.map((element, index) => (
								<Button key={index} href={element.linkURL} bsStyle={linkType[element.linkType]} style={{
									margin: "0 10px 10px 0"
								}}>{element.linkName}</Button>
							))
						}
					</p>
				</div>

			</div>
		</Col>
	);
};

ProjectContainer.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	projectLinks: PropTypes.string.isRequired,
	openModal: PropTypes.func.isRequired,
	projectIndex: PropTypes.number.isRequired
};

export default ProjectContainer;
