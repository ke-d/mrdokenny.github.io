import { gql } from 'apollo-boost';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { SocialIcon } from 'react-social-icons';
import * as cartoon_cropPng from '../img/cartoon_crop.png';
import ColorfulPieChart from './ColorfulPieChart';
import Feedback from './Feedback';
import Loading from './Loading';
import LoadingCard from './LoadingCard';

const styles = {
  center: {
    textAlign: 'center',
  } as React.CSSProperties,
  icons: {
    marginRight: '5px',
  } as React.CSSProperties,
  socialIcons: {
    marginTop: '5px',
  } as React.CSSProperties,
  spaceTop: {
    marginTop: '15px',
  } as React.CSSProperties,
  white: {
    background: 'white',
    border: '1px solid #ddd',
    marginBottom: '20px',
    padding: '1em',
  } as React.CSSProperties,
};

const bsColors = ['success', 'info', 'warning', 'danger'];
const maxLevel = 4500;

interface LanguageScore {
  language: string;
  score: number;
}
class HomeProps {
  public queryUser: {
    recentCommit: {
      name: string;
      pushedAt: Date;
      url: string;
    };
    currentLanguageScores: LanguageScore[];
    topContributedRepos: any[];
  };
}

const getProfile = gql`
  query getProfile {
    queryUser(username: "mrdokenny") {
      recentCommit {
        name
        pushedAt
        url
      }
      topContributedRepos
      currentLanguageScores {
        language
        score
      }
    }
  }
`;

class ProfileQuery extends Query<HomeProps> {}

const HomeWithData = () => (
  <Container>
    <Row>
      <Col xs={12} sm={4}>
        <div style={styles.white}>
          <Image
            src={cartoon_cropPng}
            fluid={true}
            alt={'Cartoon Picture of Kenny Do'}
          />
          <h3 style={styles.center}>{'Kenny Do'}</h3>
          <p>
            Why hello there and welcome to my website. All this data was pulled
            from my express server using the GitHub API. The express server
            crunches the raw data to get these stats for me.
            <i>
              {
                ' As I am using free servers at this moment, the cards might take a while to load if the server has slept. Please be patient.'
              }
            </i>
          </p>
        </div>
        <div style={styles.white}>
          <dl>
            <dt>Impressed? Get in touch</dt>
            <dd>
              <a
                href="mailto:contact@kennydo.com"
                title="Click to send me an email"
              >
                contact@kennydo.com
              </a>
              <br />
            </dd>
          </dl>
          <Feedback />
          <div style={styles.socialIcons}>
            <SocialIcon
              style={styles.icons}
              url="mailto:contact@kennydo.com"
              network="email"
              title="Click to send me an email"
            />
            <SocialIcon
              style={styles.icons}
              url="https://github.com/mrdokenny"
              title="Come see my projects"
            />
          </div>
        </div>
      </Col>
      <Col xs={12} sm={8}>
        <ProfileQuery query={getProfile}>
          {({ loading, error, data }) => {
            if (loading || !data) {
              return <Loading />;
            }
            const {
              queryUser: {
                recentCommit,
                topContributedRepos,
                currentLanguageScores,
              },
            } = data;
            return (
              <Row>
                <Col xs={12} sm={12}>
                  <LoadingCard
                    loading={loading}
                    error={error}
                    title={'Skills Progress'}
                  >
                    {currentLanguageScores.map(({ language, score }, index) => {
                      return (
                        <div key={index + language}>
                          <ProgressBar
                            striped
                            // @ts-ignore
                            variant={bsColors[index % bsColors.length]}
                            now={(score / maxLevel) * 100}
                          />
                          <p>{language}</p>
                        </div>
                      );
                    })}
                    <i>
                      {
                        "Please don't take this as an accurate representation of my skills but rather take away my 'skill' to data analyse my GitHub Profile :)"
                      }
                    </i>
                    <i>
                      {
                        " Also note that it doesn't take advantage of private repositories."
                      }
                    </i>
                  </LoadingCard>
                </Col>
                <Col style={styles.spaceTop} xs={12} sm={6}>
                  <LoadingCard
                    loading={loading}
                    style={{ height: '100%' }}
                    error={error}
                    title={'Skills Distribution Chart'}
                  >
                    <ColorfulPieChart
                      data={currentLanguageScores.map(({ language, score }) => {
                        return {
                          name: language,
                          value: score,
                        };
                      })}
                    />
                  </LoadingCard>
                </Col>

                <Col style={styles.spaceTop} xs={12} sm={6}>
                  <LoadingCard
                    loading={loading}
                    error={error}
                    title={'My Top 5 Repositories By Commits'}
                  >
                    {topContributedRepos.map(({ node }: any, index: number) => {
                      if (index < 5) {
                        return (
                          <p key={`${node.name}${index}`}>
                            <a href={node.url}>{node.name}</a>
                            {` has ${
                              node.defaultBranchRef.target.history.totalCount
                            } commits by me.`}
                          </p>
                        );
                      }
                      return; // eslint-disable-line array-callback-return, consistent-return
                    })}
                    <LinkContainer to="/projects">
                      <a>
                        <i>See all my Projects</i>
                      </a>
                    </LinkContainer>
                  </LoadingCard>
                </Col>

                <Col style={styles.spaceTop} xs={12} sm={6}>
                  <LoadingCard
                    loading={loading}
                    error={error}
                    title={'Latest Commit'}
                  >
                    <p>
                      {'I made a recent commit on Repository '}
                      <a href={recentCommit.url}>{recentCommit.name}</a>
                      {` on ${new Date(recentCommit.pushedAt).toDateString()}`}
                    </p>
                  </LoadingCard>
                </Col>
              </Row>
            );
          }}
        </ProfileQuery>
      </Col>
    </Row>
  </Container>
);

export default HomeWithData;
