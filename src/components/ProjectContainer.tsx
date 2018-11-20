import * as React from 'react';
import { Col, Image, Panel, PanelGroup } from 'react-bootstrap';
import ColorfulPieChart from './ColorfulPieChart';

interface ProjectContainerProps {
  node: any;
  data: object[];
  projectJSON?: any;
  repositoriesLength: number;
}

class ProjectContainer extends React.Component<ProjectContainerProps> {
  public state = {
    loadImage: false,
  };

  public render() {
    const { node, data, projectJSON, repositoriesLength } = this.props;
    const languages = `Languages: ${node.languages.edges
      // tslint:disable-next-line:no-shadowed-variable
      .map(({ node }: any) => node.name)
      .join(', ')}`;
    const allNotZeros = data.reduce(
      (allValuesGreaterThanZero, element: any) => {
        if (element.value > 0) {
          return true;
        }
        return allValuesGreaterThanZero;
      },
      false);
    return (
      <Col key={node.id} xs={12} md={4}>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">{`${node.name}${
              node.description !== null ? `: ${node.description}` : ''
              }`}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {node.licenseInfo && <p>{node.licenseInfo.name}</p>}
            <p>{languages}</p>

            <ColorfulPieChart data={allNotZeros ? data : [{ name: 'None', value: 1 }]} animate={repositoriesLength < 10}/>

            <PanelGroup id={node.id} accordion>
              {projectJSON !== undefined && (
                <Panel eventKey="1">
                  <Panel.Heading>
                    <Panel.Title toggle>Description</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <p>{projectJSON.description}</p>
                  </Panel.Body>
                </Panel>
              )}
              {projectJSON !== undefined && (
                <Panel eventKey="2">
                  <Panel.Heading
                    onClick={() => this.setState({ loadImage: true })}
                  >
                    <Panel.Title toggle>Images</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    {// Lazy load images
                      this.state.loadImage && (
                        <Image
                          src={require(`../img/projects/${projectJSON.src}`)}
                          responsive
                        />
                      )}
                  </Panel.Body>
                </Panel>
              )}
              <Panel eventKey="3">
                <Panel.Heading>
                  <Panel.Title toggle>External Links</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <ul>
                    <li>
                      <a href={node.url}>GitHub Link</a>
                    </li>
                    {projectJSON !== undefined &&
                      projectJSON.projectLinks.map(
                        ({ linkName, linkURL }: any, index: number) => (
                          <li key={index}>
                            <a href={linkURL}>{linkName}</a>
                          </li>
                        ),
                      )}
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
