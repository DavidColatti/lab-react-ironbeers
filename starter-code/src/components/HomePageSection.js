import React, { Component } from 'react';

class HomePageSection extends Component {
	displayDescription = () => {
		return (
			<div>
				<h1>{this.props.section}</h1>
				<p>{this.props.description}</p>
			</div>
		);
	};

	render() {
		return (
			<div>
				{this.displayDescription()}
			</div>
		);
	}
}

export default HomePageSection;
