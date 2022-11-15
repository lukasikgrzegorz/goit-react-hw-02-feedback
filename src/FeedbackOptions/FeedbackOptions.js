import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = (props) => {
	const { options, onLeaveFeedback } = props;
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
};

FeedbackOptions.propTypes = {
	options: PropTypes.object.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
