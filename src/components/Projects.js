import React from "react";
import ProjectContainer from "./ProjectContainer";
import ProjectFiles from "../projects.json";
import {
	Grid,
	Row,
	Carousel,
	Modal,
	Button
} from "react-bootstrap";

const pathToImg = require.context("../img/projects", true);

const styles = {
	image: {
		margin: "auto",
		width: "auto",
		maxHeight: `${window.innerHeight-80}px`
	},
	center: {
		textAlign: "center"
	}
};

class Projects extends React.PureComponent {
		state = {
			openIndex: 0,
			showModal: false,
			greater768: window.innerWidth > 768 ? true : false
		}

		close() {
			this.setState({
				showModal: false
			});
		}

		open(openIndex) {
			this.setState({
				showModal: true, openIndex
			});
		}

		updateDimensions() {
			this.setState({
				greater768: window.innerWidth > 768 ? true : false
			});
		}

		componentDidMount() {
			this.updateDimensions();
			window.addEventListener("resize", this.updateDimensions.bind(this));
		}

		componentWillUnmount() {
			window.removeEventListener("resize", this.updateDimensions.bind(this));
		}

		render() {
			return (
				<Grid>
					<Row><div className="thumbnail"><h2 style={styles.center}>Click on an Image/Gif to Enlarge</h2></div></Row>
					<Row>

						{
							ProjectFiles.projects.map((element, index) => (
								<ProjectContainer
									key={index}
									projectIndex={index}
									openModal={(index) => this.open(index)}
									title={element.title}
									description={element.description}
									src={pathToImg(`./${element.src}`, true)}
									projectLinks={element.projectLinks}
									alt={element.alt}
								/>
							))
						}

						<Modal bsSize={"large"} show={this.state.showModal} onHide={() => this.close()}>
							<Modal.Header closeButton>
								<Modal.Title>Project Images/Gifs</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Carousel interval={null} defaultActiveIndex={this.state.openIndex}>
									{
										ProjectFiles.projects.map((element, index) => (
											<Carousel.Item key={index}>
												<img style={styles.image} src={pathToImg(`./${element.src}`, true)} />
											</Carousel.Item>
										))
									}
								</Carousel>
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={() => this.close()}>Close</Button>
							</Modal.Footer>
						</Modal>

					</Row>
				</Grid>
			);
		}
}

export default Projects;
