import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Input.css'
import { validate } from '../../util/validators'

const inputReducer = (state, action) => {
	switch (action.type) {
	case 'CHANGE':
		return {
			...state,
			value: action.val,
			isValid: validate(action.val, action.validators)
		}
	case 'TOUCH':
		return {
			...state,
			isTouched: true
		}
	default:
		return state
	}
}


const Input = ({
	id,
	label,
	element,
	rows,
	placeholder,
	type,
	errorText,
	validators,
	onInput,
	valid,
	value: val
}) => {
	const initialState = {
		value: val || '',
		isValid: valid || false,
		isTouched: false
	}
	const [inputState, dispatch] = useReducer(inputReducer, initialState)
	const {value, isValid} = inputState
	useEffect(() => {
		onInput(id, value, isValid)
	}, [id, value, isValid, onInput])
    
    
	const changeHandler = event => {
		dispatch({
			type: 'CHANGE',
			val: event.target.value,
			validators: validators
		})
	}
	const touchHandler = () => {
		dispatch({
			type: 'TOUCH'
		})
	}
	const el = element === 'input' ? <input
		onChange={changeHandler}
		id={id}
		type={type}
		placeholder={placeholder}
		value={inputState.value}
		onBlur={touchHandler}
	/> : <textarea
		onChange={changeHandler}
		id={id}
		rows={rows || 3}
		value={inputState.value}
		onBlur={touchHandler}
	/>

	return (
		<div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
			<label htmlFor={id}>{label}</label>
			{
				el
			}
			{!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
		</div>
	)
}

Input.propTypes = {

}

export default Input
