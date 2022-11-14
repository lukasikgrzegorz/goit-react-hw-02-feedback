import React, { Component } from "react";

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	addGood = () => {
		this.setState((state) => ({ good: state.good + 1 }));
	};

	addNeutral = () => {
		this.setState((state) => ({ neutral: state.neutral + 1 }));
	};

	addBad = () => {
		this.setState((state) => ({ bad: state.bad + 1 }));
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	countPositiveFeedbackPercentage = () => {
		const { good, neutral, bad } = this.state;
		return Math.round((good / (good + neutral + bad)) * 100);
	};

	render() {
		const { good, neutral, bad } = this.state;

		return (
			<>
				<div>
					<h2>Please leave feedback</h2>
					<button type="button" onClick={this.addGood}>
						Good
					</button>
					<button type="button" onClick={this.addNeutral}>
						Neutral
					</button>
					<button type="button" onClick={this.addBad}>
						Bad
					</button>
				</div>
				<div>
					<h2>Statistic</h2>
					<ul>
						<li>Good: {good}</li>
						<li>Nautral: {neutral}</li>
						<li>Bad: {bad}</li>
						<li>Total:{this.countTotalFeedback()}</li>
						<li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
					</ul>
				</div>
			</>
		);
	}
}

export default App;
