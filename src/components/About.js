import React from 'react';

import {
  Grid,
  Row,
  Col,
  Thumbnail,
  Accordion,
  Panel
} from 'react-bootstrap';
import BioPic from '../img/cartoon_crop.png';

const About = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12} sm={6}>
          <Thumbnail src={BioPic} alt={`Cartoon Picture of Kenny Do`}>
            <h3 style={styles.center}>{`Kenny Do`}</h3>
            <p>{`I have been interested in technology ever since I used my first computer at around 6. Through my interest, I learned how to tinker with stuff whether that be hardware or software. My interests are varied, going from Video Games to Web Development. I tinker with whatever I find interesting, so if I see a project or if I have an idea that I like, then I would see how would I implement it. In the process, I learned a lot from my projects, and also I enjoy seeing other people use something that I made.`}</p>
          </Thumbnail>

        </Col>

        <Col xs={12} sm={6}>
          <Accordion>

            <Panel header={`Languages`} eventKey={1}>
              Experienced
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java</li>
              </ul>
              Some Experience
              <ul>
                <li>SQL</li>
                <li>Facebook GraphQL</li>
                <li>Bash</li>
                <li>C++</li>
              </ul>
            </Panel>

            <Panel header={`Frameworks`} eventKey={2}>
              <ul>
                <li><a href="https://facebook.github.io/react/">React</a></li>
                <li><a href="https://facebook.github.io/react/docs/react-dom.html">React DOM</a></li>
                <li><a href="https://facebook.github.io/react-native/">React Native</a></li>
                <li><a href="http://redux.js.org/">Redux</a></li>
                <li><a href="http://dev.apollodata.com/">Apollo</a></li>
                <li><a href="http://graphql.org/">GraphQL</a> via <a href="https://www.graph.cool/">Graph.Cool</a></li>
                <li><a href="https://getbootstrap.com/">BootStrap</a> and <a href="https://react-bootstrap.github.io/">React-BootStrap</a></li>
              </ul>
            </Panel>

            <Panel header={`Software and Operating Systems`} eventKey={3}>
              Software
              <ul>
                <li>GitHub</li>
                <li>Eclipse</li>
                <li>Atom</li>
                <li>Trello</li>
                <li>Microsoft Office (Word, Powerpoint, Excel)</li>
                <li><a href="https://www.graph.cool/">Graph.Cool</a> (Serverless backend as a service)</li>
              </ul>
              Operating Systems
              <ul>
                <li>Windows</li>
                <li>Linux</li>
              </ul>
            </Panel>

          </Accordion>
        </Col>
      </Row>
    </Grid>
  );
}

const styles = {
  center: {
    textAlign: 'center',
  },
};

export default About;
