import React from 'react';
class Issue extends React.Component {
	render() {
		return (
			<div className=" coverimg">
				<a href={this.props.details.url} download>
					<img src={this.props.details.image} alt={'Issue ' + this.props.details.name}/>
					<span className="issuenr"> <h1>{this.props.details.name}</h1></span>
				</a>
			</div>
		);
	}
}
export default Issue;
