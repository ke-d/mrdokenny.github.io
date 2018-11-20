import graphqlTag from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Col, Grid, ProgressBar, Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { SocialIcon } from 'react-social-icons';
import cartoon_cropPng from '../img/cartoon_crop.png';
import Card from './Card';
import ColorfulPieChart from './ColorfulPieChart';
import Feedback from './Feedback';

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
  white: {
    background: 'white',
    border: '1px solid #ddd',
    marginBottom: '20px',
    padding: '1em',
  } as React.CSSProperties,
};

const bsColors = ['success', 'info', 'warning', 'danger'];
const maxLevel = 5000;
class HomeProps {
  public user: {
    recentCommit: {
      name: string,
      pushedAt: Date,
      url: string,
    },
    currentLanguageScores: {
      languageScore: { [language: string]: number },
      languageScoreDiff: { [language: string]: number },
    },
    topContributedRepos: any[];
  } = {
    currentLanguageScores: {
      languageScore: {},
      languageScoreDiff: {},
    },
    recentCommit: {
      name: '',
      pushedAt: new Date(),
      url: '',
    },
    topContributedRepos: [],
  };
}

const getProfile = graphqlTag`
query getProfile {
  user(username: "mrdokenny") {
    recentCommit {
      name
      pushedAt
      url
    }
    topContributedRepos
    currentLanguageScores
  }
}
`;

class ProfileQuery extends Query<HomeProps> {}

const HomeWithData = () => (
  <ProfileQuery query={getProfile}>
    {
      ({ loading, error, data }) => {
        // Hack to get around an undefined data object by preloading data with init data
        let newData: HomeProps = new HomeProps();
        if (!loading) {
          newData = data as HomeProps;
        }
        const {
          user: {
            recentCommit,
            topContributedRepos,
            currentLanguageScores,
          },
        } = newData;
        return (
          <Grid>
            <Col xs={12} sm={4}>
              <Thumbnail src={cartoon_cropPng} alt={'Cartoon Picture of Kenny Do'}>
                <h3 style={styles.center}>{'Kenny Do'}</h3>
                <p>
                  Why hello there and welcome to my website. All this data was
              pulled from my express server using the GitHub API. The{' '}
                  <a href="https://api.kennydo.com/">express server</a> crunches the
                  raw data to get these stats for me.
              <i>
                    {
                      ' As I am using free servers at this moment, the cards might take a while to load if the server has slept. Please be patient.'
                    }
                  </i>
                </p>
              </Thumbnail>
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
                  <SocialIcon
                    style={styles.icons}
                    url="https://www.linkedin.com/in/dokenny"
                    title="Come to my Linkedin"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={8}>
              <Col xs={12} sm={12}>
                <Card loading={loading} error={error} title={'Skills Progress'}>
                  {

                    Object.keys(currentLanguageScores.languageScore).map((key, index) => {
                      const { languageScore, languageScoreDiff } = currentLanguageScores;
                      const diff = (languageScoreDiff[key] / maxLevel) * 100;
                      const value =
                        ((languageScore[key] - languageScoreDiff[key]) / maxLevel) *
                        100;
                      return (
                        <div key={index + key}>
                          <p>
                            {key}
                            <b>{` +${languageScoreDiff[key]}`}</b>
                          </p>
                          <ProgressBar>
                            <ProgressBar
                              striped
                              bsStyle={bsColors[index % bsColors.length]}
                              now={value}
                            />
                            <ProgressBar
                              striped
                              bsStyle={bsColors[index - (1 % bsColors.length)]}
                              now={diff}
                            />
                          </ProgressBar>
                        </div>
                      );
                    })
                  }
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
                </Card>
              </Col>
              <Col xs={12} sm={6}>
                <Card
                  loading={loading}
                  error={error}
                  title={'Skills Distribution Chart'}
                >
                  <ColorfulPieChart
                    data={Object.keys(currentLanguageScores.languageScore).map((key: string) => {
                      const { languageScore } = currentLanguageScores;
                      const value: number = languageScore[key];
                      return {
                        name: key,
                        value,
                      };
                    })}
                  />
                </Card>
              </Col>

              <Col xs={12} sm={6}>
                <Card loading={loading} error={error} title={'Latest Commit'}>
                  <p>
                    {'I made a recent commit on Repository '}
                    <a href={recentCommit.url}>{recentCommit.name}</a>
                    {` on ${new Date(recentCommit.pushedAt).toDateString()}`}
                  </p>
                </Card>
              </Col>

              <Col xs={12} sm={6}>
                <Card
                  loading={loading}
                  error={error}
                  title={'My Top 5 Repositories By Commits'}
                >
                  {topContributedRepos.map(({ node }: any, index: number) => {
                    if (index < 5) {
                      return (
                        <p>
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
                </Card>
              </Col>
            </Col>
          </Grid>
        );
      }
    }
  </ProfileQuery>
);

export default HomeWithData;
