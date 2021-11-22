import React from "react";

export default class QuestionCard2 extends React.Component {
	render() {
		const rounded = this.props.rounded;
		const hasGradient = this.props.hasGradient;
		const gradientNumber = hasGradient ? this.props.gradient : null;

		const handleClick= () => {
			this.props.deleteme(this.props.id)
		}

		return (
			<div
				className={`
                    card
                    ${rounded ? 'rounded' : ''}
                    ${hasGradient ? `gradient gradient-${gradientNumber}` : ''}`}
			>
				{this.props.children}
				<span className="delete-btn" onClick={() => handleClick()}>&times;</span>
			</div>
		);
	}
}

