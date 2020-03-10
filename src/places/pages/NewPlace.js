import React from 'react'
import PropTypes from 'prop-types'
import './PlaceForm.css';
import Input from '../../shared/components/FormElements/Input'

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'

import Button from '../../shared/components/FormElements/Button'

import { useForm } from '../../shared/hooks/form-hook'

const NewPlace = props => {
    const [formState, inputHandler] = useForm({
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
    }, false)


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
