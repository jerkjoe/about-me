import { useCallback, useReducer } from 'react'
const formReducer = (state, { type, isValid, inputId, value, inputs }) => {
	switch (type) {
	case 'INPUT_CHANGE':
		let formIsValid = true
		for (let key in state.inputs) {
			if (!state.inputs[key]) {
				continue
			}
			if (key === inputId) {
				formIsValid = formIsValid && isValid
			} else {
				formIsValid = formIsValid && state.inputs[key].isValid
			}
		}
		return {
			...state,
			inputs: {
				...state.inputs,
				[inputId]: {
					value,
					isValid
				}
			},
			isValid: formIsValid
		}
	case 'SET_DATA':
		return {
			inputs: inputs,
			isValid: isValid
		}
	default:
		return state
	}
}

export const useForm = (initialInputs, initialFormValidity) => {
	const [formState, dispatch] = useReducer(formReducer, {
		inputs: initialInputs,
		isValid: initialFormValidity
	})
	const inputHandler = useCallback((id, value, isValid) => {
		console.log(id)
		console.log('value: ', value)
		console.log('isValid: ', isValid)
		dispatch({
			type: 'INPUT_CHANGE',
			value,
			inputId: id,
			isValid
		})
	}, [])

	const setFormData = useCallback((inputData, formValidity) => {
		dispatch({
			type: 'SET_DATA',
			inputs: inputData,
			formIsValid: formValidity
		})
	}, [])
	return [formState, inputHandler, setFormData]
}