import React, { useState } from "react"
import "./App.css"
import { Numbers } from "./components/ButtonComponents/NumberButtons/Numbers"
import Logo from "./components/DisplayComponents/Logo"
import { Display } from "./components/DisplayComponents/Display"
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators"
import { Specials } from "./components/ButtonComponents/SpecialButtons/Specials"

function App() {
	// STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
	// Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
	// Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
	// the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
	// Don't forget to pass the functions (and any additional data needed) to the components as props
	const operatorUpdate = evt => {
		setState({ ...state, operator: evt.target.value });
	};

	const firstNumUpdate = evt => {
		setState({ ...state, firstnumber: Number(evt.target.value) });
	};

	const secondNumUpdate = evt => {
		setState({ ...state, secondnumber: Number(evt.target.value) });
	};

	const executeComputation = () => {
		let z = null;
		let operator = state.operator;
		let firstnumber = state.firstnumber;
		let secondnumber = state.secondnumber;

		switch (operator) {
			default:
				z = firstnumber + secondnumber;
				break;
			case "-":
				z = firstnumber - secondnumber;
				break;
			case "/":
				z = firstnumber / secondnumber;
				break;
			case "*":
				z = firstnumber * secondnumber;
				break;
		}

		setState({ ...state, result: z });
	};

	return (
		<div className='container'>
			<Logo />
			<div className='App'>
				{<Display display={display} />}
				<div className='keys'>
					<div className='keypad'>
						{<Specials doSpecial={doSpecial} />}
						{<Numbers getValue={getValue} />}
					</div>
					<div className='operators-container'>{<Operators getOperator={getOperator} />}</div>
				</div>
				{/* STEP 4 - Render your components here and be sure to properly import/export all files */}
			</div>
		</div>
	)
}

export default App
