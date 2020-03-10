import { useCallback, useReducer } from 'react'
const formReducer = (state, { type, isValid, inputId, value }) => {
    switch (type) {
        case 'INPUT_CHANGE':
            let formIsValid = true
            for (let key in state.inputs) {
                if (key === inputId) {
                    formIsValid = formIsValid && isValid
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid
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
            break;

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
        dispatch({
            type: 'INPUT_CHANGE',
            value,
            inputId: id,
            isValid
        })
    }, [])
    
    return [formState, inputHandler]
}