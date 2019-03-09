import * as React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
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
      false,
    );
    return (
      <Col key={node.id} xs={12} md={4}>
        <Card>
          <Card.Header>
            {`${node.name}${
              node.description !== null ? `: ${node.description}` : ''
            }`}
          </Card.Header>
          <Card.Body>
            {node.licenseInfo && <p>{node.licenseInfo.name}</p>}
            <p>{languages}</p>

            <ColorfulPieChart
              data={allNotZeros ? data : [{ name: 'None', value: 1 }]}
              animate={repositoriesLength < 10}
            />

            {/* <PanelGroup id={node.id} accordion>
              {projectJSON !== undefined && (
                <Card eventKey="1">
                  <Card.Header>
                    <Card.Title toggle>Description</Card.Title>
                  </Card.Header>
                  <Card.Body collapsible>
                    <p>{projectJSON.description}</p>
                  </Card.Body>
                </Card>
              )}
              {projectJSON !== undefined && (
                <Card eventKey="2">
                  <Card.Header
                    onClick={() => this.setState({ loadImage: true })}
                  >
                    <Card.Title toggle>Images</Card.Title>
                  </Card.Header>
                  <Card.Body collapsible>
                    {// Lazy load images
                      this.state.loadImage && (
                        <Image
                          src={require(`../img/projects/${projectJSON.src}`)}
                        />
                      )}
                  </Card.Body>
                </Card>
              )}
              <Card eventKey="3">
                <Card.Header>
                  <Card.Title toggle>External Links</Card.Title>
                </Card.Header>
                <Card.Body collapsible>
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
                </Card.Body>
              </Card>
            </PanelGroup> */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default ProjectContainer;
