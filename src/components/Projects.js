import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import ProjectContainer from './ProjectContainer';
import ProjectFiles from '../projects.json';

const pathToImg = require.context('../img/work/thumbs', true);

const Projects = () => {
  return (
    <Grid>
      <Row>
        {
          ProjectFiles.projects.map((element, index) => (

            <ProjectContainer
              key={index}
              title={element.title}
              description={element.description}
              src={pathToImg(`./${element.src}`, true)}
              projectLinks={element.projectLinks}
              alt={element.alt}
            />
          ))
        }
      </Row>
    </Grid>
  );
}

const styles = {
  fullHeight: {
    minHeight: '100%',
    width: '100%'
  }
};

export default Projects;
