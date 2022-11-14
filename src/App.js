import React, { Component } from "react";

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handleFeedback = (e) => {
		const { name } = e.target;
		console.log(name);
		this.setState((state) => ({ [name]: state[name] + 1 }));
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
					<button type="button" name="good" onClick={this.handleFeedback}>
						Good
					</button>
					<button type="button" name="neutral" onClick={this.handleFeedback}>
						Neutral
					</button>
					<button type="button" name="bad" onClick={this.handleFeedback}>
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
