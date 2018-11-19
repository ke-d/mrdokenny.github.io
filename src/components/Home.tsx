import * as React from "react";
import {
	Grid,
	Col,
	Thumbnail,
	ProgressBar
} from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
import { SocialIcon } from "react-social-icons";
import BioPic from "../img/cartoon_crop.png";
import Card from "./Card";
import ColorfulPieChart from "./ColorfulPieChart";
import Feedback from "./Feedback";
const styles = {
	center: {
		textAlign: "center"
	},
	white: {
		background: "white",
		border: "1px solid #ddd",
		padding: "1em",
		marginBottom: "20px"
	},
	icons: {
		marginRight: "5px"
	},
	socialIcons: {
		marginTop: "5px"
	}
};

const bsColors = ["success", "info", "warning", "danger"];
const maxLevel = 5000;
class Home extends React.Component {
	state = {
		fetchedObject: { languagesScore: {}, languagesScoreDiff: {}, recentCommit: {}, topContributedRepos: [] },
		error: 0,
		loading: true
	}
	componentWillMount() {
		fetch("https://api.kennydo.com/githubstats?user=mrdokenny")
			.then((response) => response.json())
			.then((fetchedObject) => {
				if (fetchedObject.error !== undefined) {
					this.setState({ error: fetchedObject.error });
				} else {
					this.setState({ fetchedObject, loading: false });
				}
			})
			.catch((error) => this.setState({ error }));
	}

	render() {
		const { loading, error, fetchedObject: { languagesScore, languagesScoreDiff, recentCommit, topContributedRepos } } = this.state;
		return (
			<Grid>
				<Col xs={12} sm={4}>
					<Thumbnail src={BioPic} alt={"Cartoon Picture of Kenny Do"}>
						<h3 style={styles.center}>{"Kenny Do"}</h3>
						<p>Why hello there and welcome to my website. All this data was pulled from my express server using the GitHub API. The <a href="https://api.kennydo.com/">express server</a> crunches the raw data to get these stats for me.<i>{" As I am using free servers at this moment, the cards might take a while to load if the server has slept. Please be patient."}</i></p>
					</Thumbnail>
					<div style={styles.white}>
						<dl>
							<dt>Impressed? Get in touch</dt>
							<dd><a href="mailto:contact@kennydo.com" title="Click to send me an email">contact@kennydo.com</a><br/></dd>
						</dl>
						<Feedback />
						<div style={styles.socialIcons}>
							<SocialIcon style={styles.icons} url="mailto:contact@kennydo.com" network="email" title="Click to send me an email" />
							<SocialIcon style={styles.icons} url="https://github.com/mrdokenny" title="Come see my projects" />
							<SocialIcon style={styles.icons} url="https://www.linkedin.com/in/dokenny" title="Come to my Linkedin" />
						</div>
					</div>

				</Col>
				<Col xs={12} sm={8}>
					<Col xs={12} sm={12}>
						<Card
							loading={loading}
							error={error}
							title={"Skills Progress"}
						>
							{
								Object.keys(languagesScore).map((key, index) => {
									const diff = (languagesScoreDiff[key] / maxLevel) * 100;
									const value = ((languagesScore[key] - languagesScoreDiff[key]) / maxLevel) * 100;
									return (
										<div key={index + key}>
											<p>{key}<b>{` +${languagesScoreDiff[key]}`}</b></p>
											<ProgressBar>
												<ProgressBar striped bsStyle={bsColors[index % bsColors.length]} now={value} />
												<ProgressBar striped bsStyle={bsColors[index - 1 % bsColors.length]} now={diff} />
											</ProgressBar>
										</div>
									);
								})
							}
							<i>{"Please don't take this as an accurate representation of my skills but rather take away my 'skill' to data analyse my GitHub Profile :)"}</i>
							<i>{" Also note that it doesn't take advantage of private repositories."}</i>
						</Card>

					</Col>
					<Col xs={12} sm={6}>
						<Card
							loading={loading}
							error={error}
							title={"Skills Distribution Chart"}
						>
							<ColorfulPieChart data={
								Object.keys(languagesScore).map((key) => {
									let newObj = {};
									newObj.name = key;
									newObj.value = languagesScore[key];
									return newObj;
								})
							}/>

						</Card>

					</Col>

					<Col xs={12} sm={6}>
						<Card
							loading={loading}
							error={error}
							title={"Latest Commit"}
						>
							<p>{"I made a recent commit on Repository "}<a href={recentCommit.url}>{recentCommit.name}</a>{` on ${new Date(recentCommit.pushedAt).toDateString()}`}</p>

						</Card>

					</Col>

					<Col xs={12} sm={6}>
						<Card
							loading={loading}
							error={error}
							title={"My Top 5 Repositories By Commits"}
						>
							{
								topContributedRepos.map(({ node }, index) => {
									if (index < 5) {
										return (
											<p><a href={node.url}>{node.name}</a>{` has ${node.defaultBranchRef.target.history.totalCount} commits by me.`}</p>
										);
									}
									return; // eslint-disable-line array-callback-return, consistent-return
								})
							}
							<LinkContainer to="/projects">
								<a><i>See all my Projects</i></a>
							</LinkContainer>
						</Card>

					</Col>
				</Col>
			</Grid>
		);
	}
}

export default Home;
