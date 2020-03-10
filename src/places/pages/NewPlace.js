import React, { useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'
import './PlaceForm.css';
import Input from '../../shared/components/FormElements/Input'

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'

import Button from '../../shared/components/FormElements/Button'
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
            console.log(inputId)
            console.log(value)
            console.log(isValid)
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
const initialState = {
    isValid: false,
    inputs: {
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }
    },
}
const NewPlace = props => {
    const [formState, dispatch] = useReducer(formReducer, initialState)
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value,
            inputId: id,
            isValid
        })
    }, [])

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend!
    };
    return <form onSubmit={placeSubmitHandler} className="place-form">
        <Input
            id="title"
            type="text"
            element="input"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={inputHandler}
        />
        <Input
            id="description"
            type="text"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)"
            onInput={inputHandler}
        />
        <Input
            id="address"
            type="text"
            element="input"
            label="Address"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address"
            onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
            Add place
        </Button>
    </form>
}

NewPlace.propTypes = {}

export default NewPlace
