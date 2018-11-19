import * as React from 'react';
import {
	Col,
  Image,
	Panel,
	PanelGroup,
} from 'react-bootstrap';
import ColorfulPieChart from './ColorfulPieChart';

class ProjectContainer extends React.Component {
  public state = {
    loadImage: false,
  };
  public render() {
    const {
			node, data, projectJSON,
		} = this.props;
    return (
			<Col key={node.id} xs={12} md={4}>
				<Panel>
					<Panel.Heading>
						<Panel.Title componentClass="h3">{`${node.name}${node.description !== null ? `: ${node.description}` : ''}`}</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						{node.licenseInfo && <p>{node.licenseInfo.name}</p>}
						<p>{`Languages: ${node.languages.edges.map(({ node }) => node.name).join(', ')}`}</p>

						<ColorfulPieChart data={data}/>

						<PanelGroup accordion={true}>
							{
								projectJSON !== undefined &&
								<Panel eventKey="1">
									<Panel.Heading>
										<Panel.Title toggle={true}>Description</Panel.Title>
									</Panel.Heading>
									<Panel.Body collapsible={true}>
										<p>{projectJSON.description}</p>
									</Panel.Body>
								</Panel>
							}
							{
								projectJSON !== undefined &&
								<Panel eventKey="2">
									<Panel.Heading onClick={() => this.setState({ loadImage: true })}>
										<Panel.Title toggle={true}>Images</Panel.Title>
									</Panel.Heading>
									<Panel.Body collapsible={true}>
										{
											// Lazy load images
											this.state.loadImage &&
											<Image src={require(`../img/projects/${projectJSON.src}`)} responsive={true} />
										}
									</Panel.Body>
								</Panel>
							}
							<Panel eventKey="3">
								<Panel.Heading>
									<Panel.Title toggle={true}>External Links</Panel.Title>
								</Panel.Heading>
								<Panel.Body collapsible={true}>
									<ul>
										<li><a href={node.url}>GitHub Link</a></li>
										{
											projectJSON !== undefined &&
											projectJSON.projectLinks.map(({ linkName, linkURL }, index) => <li key={index}><a href={linkURL}>{linkName}</a></li>)
										}
									</ul>
								</Panel.Body>
							</Panel>

						</PanelGroup>
					</Panel.Body>
				</Panel>
			</Col>
    );
  }
}

export default ProjectContainer;
