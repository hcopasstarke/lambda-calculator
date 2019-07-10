import React from "react"

export const Display = (props) => {
	let display = props.display
	return (
		<div className='display'>
			<div className='display-content'>{display}</div>
		</div>
	)
}
