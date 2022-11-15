import React, { Component } from "react";

class FeedbackOptions extends Component {
	render() {
		const { options, onLeaveFeedback } = this.props;
		const optionsKeys = Object.keys(options);

		return (
			<ul>
				{optionsKeys.map((option, index) => {
					return (
						<li key={index}>
							<button type="button" name={option} onClick={onLeaveFeedback}>
								{option}
							</button>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default FeedbackOptions;
