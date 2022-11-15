import React, { Component } from "react";

class Statisctics extends Component {
	render() {
		const { good, neutral, bad, total, positivePercentage } = this.props;

		return (
			<ul>
				<li>Good: {good}</li>
				<li>Nautral: {neutral}</li>
				<li>Bad: {bad}</li>
				<li>Total:{total}</li>
				<li>Positive feedback:{positivePercentage}%</li>
			</ul>
		);
	}
}

export default Statisctics;
