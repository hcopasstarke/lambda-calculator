import React from "react"

export const Display = props => {
	return (
		<div className='display'>
			<div className='display-content'>{props.value}</div>
		</div>
	)
}
