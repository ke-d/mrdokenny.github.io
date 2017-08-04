import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

const linkType = {
  GITHUB: "default",
  PRODUCT: "success",
  MEDIA: "primary"
}

const ProjectContainer = (props) => {
  const { src, title, alt, description, projectLinks } = props;
  return (
    <Col xs={12} sm={6} md={4}>
      <Thumbnail src={src} alt={`${alt}`}>
        <h3>{`${title}`}</h3>
        <p>{`${description}`}</p>
        <p>
          {
              projectLinks.map((element, index) => {
                return (
                  <Button key={index} href={element.linkURL} bsStyle={linkType[element.linkType]} style={{margin: "0 10px 10px 0"}}>{element.linkName}</Button>
                );
              })
          }
        </p>
      </Thumbnail>
    </Col>
  );
}
export default ProjectContainer;
