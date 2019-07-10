import React, { useContext } from "react"
import { CalcActionEventComm } from "../../State"

export const Display = () => {
	const contextBundle = useContext(CalcActionEventComm)

	return (
		<div className='display'>
			<div className='display-content'>{contextBundle.value}</div>
		</div>
	)
}
