import React from "react";

const Section = (props) => {
	const { title, children } = props;

	return (
		<div>
			<h2>{title}</h2>
			{children}
		</div>
	);
};

export default Section;
