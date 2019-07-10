import React from "react"

export const SpecialButton = props => {
	return (
		<div className='number-button special' onClick={() => props.special}>
			{<div className='value'>{props.value}</div>}
			{/* Display a button element rendering the data being passed down from the parent container on props */}
		</div>
	)
}
