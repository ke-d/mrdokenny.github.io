import React from "react";
import ProjectContainer from "./ProjectContainer";
import ProjectFiles from "../projects.json";
import {
	Grid,
	Row,
	Col,
	Panel
} from "react-bootstrap";
import {
	PieChart,
	Pie,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Cell
} from "recharts";
import {
	graphql
} from "react-apollo";
import gql from "graphql-tag";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// here we create a query opearation
const MY_QUERY = gql`
query { 
  user(login: "mrdokenny") {
    repositories (first: 10, isFork: false, orderBy: {field:STARGAZERS, direction: DESC}) {
      edges {
        node {
          name
          id
          description
          url
          licenseInfo {
            name
          }
          languages (first: 3) {
            edges {
              node {
                id
                name
              }
            }
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
          forkCount
        }
      }
    }
  }
}`;
const pathToImg = require.context("../img/projects", true);

const styles = {
	image: {
		margin: "auto",
		width: "auto",
		maxHeight: `${window.innerHeight - 80}px`
	},
	center: {
		textAlign: "center"
	},
	languageMargin: {
		marginRight: "5px"
	}
};

class Projects extends React.Component {
	state = {
		height: 0
	};
	calcHeight(node) {
		if (node !== null && this.state.height < node._reactInternalFiber.child.stateNode.clientHeight) {
			//console.log(node._reactInternalFiber.child.stateNode.clientHeight);
			this.setState({
				height: node._reactInternalFiber.child.stateNode.clientHeight + 10
			});
		}
	}
	render() {
		if (this.props.data.loading) {
			return <div>Loading</div>;
		}
		const projects = this.props.data.user.repositories.edges;
		console.log(this.state.height);
		return (
			<Grid>
				<Row>					
					{

						projects.map(({
							node
						}) => {
							const data = [{name: "Watchers", value: node.watchers.totalCount }, { name: "Favorites", value: node.stargazers.totalCount }, { name: "Forks", value: node.forkCount }];
							return (
								<Col onClick={(e) => console.log(e)} style={{minHeight: this.state.height}} ref={(node) => this.calcHeight(node)} key={ node.id } xs={12} sm={4}>
									<Panel>
										<Panel.Heading>
											<Panel.Title componentClass="h3">{`${node.name}${node.description !== null ? `: ${node.description}` : ""}`}</Panel.Title>
										</Panel.Heading>
										<Panel.Body>
											{node.licenseInfo && <p>{node.licenseInfo.name}</p>}
											<p>{`Languages: ${node.languages.edges.map(({node}) => node.name).join(", ")}`}</p>
											
											<ResponsiveContainer width={"100%"} height={300}>
												<PieChart>
													<Tooltip />
													<Legend />
													<Pie
														data={data}
														dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
														{
															data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
														}
													</Pie>
												</PieChart>
											</ResponsiveContainer>
											<Panel>
												<Panel.Heading>
													<Panel.Title toggle>
														Title that functions as a collapse toggle
            										</Panel.Title>
												</Panel.Heading>
												<Panel.Collapse>
													<Panel.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life
														accusamus terry richardson ad squid. Nihil anim keffiyeh
														helvetica, craft beer labore wes anderson cred nesciunt sapiente
														ea proident.
            										</Panel.Body>
												</Panel.Collapse>
											</Panel>
										</Panel.Body>
									</Panel>
								</Col>
							)
						})
					}
				</Row>
			</Grid>
		);
	}
}

export default graphql(MY_QUERY)(Projects);
