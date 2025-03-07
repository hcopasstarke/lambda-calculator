import React from "react"

export const NumberButton = (props) => {
	let classes = "number-button"
	if (props.wide) {
		classes += " wide"
	}

	function handleClick() {
		props.onClickHandler(props.value)
	}

	return (
		<div className={classes} onClick={handleClick}>
			<div className='value'>{props.value}</div>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
		</div>
	)
}
