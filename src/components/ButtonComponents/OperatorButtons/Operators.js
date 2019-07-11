import React, { useState } from "react"
import { operators as operatorsArray } from "../../../data"
import { OperatorButton } from "./OperatorButton"

export const Operators = props => {
	// STEP 2 - add the imported data to state
	let [operators] = useState(operatorsArray)

	return (
		<div className='operators'>
			{operators.map((operator, i) => {
				return <OperatorButton key={i} value={operator} onClickHandler={props.onClickHandler} />
			})}
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
		</div>
	)
}
