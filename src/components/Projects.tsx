import { gql } from 'apollo-boost';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { Col, Container, Row } from 'react-bootstrap';
import * as projectsJson from '../projects.json';
import Loading from './Loading';
import ProjectContainer from './ProjectContainer';

interface ProjectsProps {
  loading: boolean;
  loadMoreEntries: () => Promise<any>;
  repositories: any[];
}
class Projects extends React.Component<ProjectsProps> {
  public state = {
    isFinished: false,
    loadMore: false,
  };
  constructor(props: ProjectsProps) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  public handleScroll() {
    const documentOffsetHeight = document.documentElement
      ? document.documentElement.offsetHeight
      : 0;
    const windowHeight =
      'innerHeight' in window ? window.innerHeight : documentOffsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const htmlHeight = html
      ? Math.max(html.clientHeight, html.scrollHeight, html.offsetHeight)
      : 0;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      htmlHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset + 20;

    const { loading, loadMoreEntries } = this.props;
    const { isFinished } = this.state;
    if (windowBottom >= docHeight && !loading && !isFinished) {
      this.setState({
        loadMore: true,
      });
      loadMoreEntries().then(({ data }) =>
        this.setState({
          isFinished: data.user.repositories.length < 9,
          loadMore: false,
        }),
      );
    }
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  public render() {
    const { loading, repositories } = this.props;
    const { loadMore } = this.state;
    const projectJSX = repositories.map(({ node }: any, index: number) => {
      const data = [
        { name: 'Watchers', value: node.watchers.totalCount },
        { name: 'Favorites', value: node.stargazers.totalCount },
        { name: 'Forks', value: node.forkCount },
      ];
      return [
        <ProjectContainer
          key={node.id}
          projectJSON={projectsJson[node.name]}
          node={node}
          data={data}
          repositoriesLength={repositories.length}
        />,
        <Row
          key={`${node.id}1`}
          style={{
            display: (index + 1) % 3 === 0 ? 'block' : 'none',
            margin: 0,
          }}
        />,
      ];
    });
    return (
      <Container>
        <Row>{projectJSX}</Row>
        <Row>
          <Col>{(loading || loadMore) && <Loading />}</Col>
        </Row>
      </Container>
    );
  }
}

const initialQuery = gql`
  query Projects($cursor: String) {
    user: queryUser(username: "mrdokenny") {
      repositories(cursor: $cursor)
    }
  }
`;

const ProjectsWithData = graphql(initialQuery, {
  options: {
    notifyOnNetworkStatusChange: false,
  },
  props(props: any) {
    const {
      data: { loading, user, fetchMore },
    } = props;
    return {
      loadMoreEntries: () =>
        fetchMore({
          updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
            const oldRepos = previousResult.user.repositories;
            const newRepos = fetchMoreResult.user.repositories;
            const combined = [...oldRepos, ...newRepos];
            // Note to self: This has to be the same JSON structure as the query
            return {
              user: {
                ...previousResult.user,
                repositories: combined,
              },
            };
          },
          variables: {
            cursor: user.repositories[user.repositories.length - 1].cursor,
          },
        }),
      loading,
      repositories: !loading ? user.repositories : [],
    };
  },
})(Projects);

export default ProjectsWithData;
