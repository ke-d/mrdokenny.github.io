import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

const ProjectContainer = (props) => {
  const { src, title, alt, description, githubLink, projectLink } = props;
  return (
    <Col xs={12} sm={6} md={4}>
      <Thumbnail src={src} alt={`${alt}`}>
        <h3>{`${title}`}</h3>
        <p>{`${description}`}</p>
        <p>
          <Button href={`${githubLink}`} bsStyle="primary">GitHub Link</Button>&nbsp;
          <Button href={`${projectLink}`} bsStyle="default">Project Link</Button>
        </p>
      </Thumbnail>
    </Col>
  );
}
export default ProjectContainer;
