import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import './PlaceForm.css';
import { useParams } from 'react-router-dom'
import { useForm } from '../../shared/hooks/form-hook'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Emp. State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];
const UpdatePlace = props => {

    const placeId = useParams().placeId
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, true)
    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
      };
    if (!identifiedPlace) {
        return <div className="center">
            <h2>Could not find place!</h2>
        </div>
    }
    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                label="title"
                type="text"
                validators={[
                    VALIDATOR_REQUIRE()
                ]}
                errorText="PLease enter a valid title"
                onInput={() => { }}
                value={formState.inputs.title.value}
                valid={formState.inputs.title.isValid}
            ></Input>
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[
                    VALIDATOR_MINLENGTH(5)
                ]}
                errorText="PLease enter a valid description (min. 5 characters)"
                onInput={() => { }}
                value={formState.inputs.description.value}
                valid={formState.inputs.description.isValid}
            ></Input>

            <Button type="submit" disabled={formState.valid}>Update Place</Button>
        </form>
    )
}

UpdatePlace.propTypes = {

}

export default UpdatePlace
