import React from 'react';
import Layout from '../components/MyLayout';
import Issue from '../components/Issue';
import issueList from '../issueList';
const centered = {
	left: 50
};
class Archive extends React.Component {
	render() {
		return (
			<Layout title="haywire archive">
				<div className="container archive">
					<h1>The <a href="/"><span className="orange">Haywire</span></a> Archives</h1>
					<div className="wide">
						{
							Object
							.keys(issueList)
							.map(key => <Issue key={key} details={issueList[key]}/>)
						}
					</div>
					<a href="https://www.yumpu.com/user/haywire" className="button largeButton" style={centered}>View On Yumpu</a>
				</div>
				<br/><br/><br/><br/>
				<link rel="stylesheet" href="/static/css/archive.css"/>
			</Layout>
		);
	}
}
export default Archive;
