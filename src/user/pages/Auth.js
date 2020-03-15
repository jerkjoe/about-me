import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import './Auth.css'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import { AuthContext } from '../../shared/components/context/auth-context'

const Auth = props => {
    const auth = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false,
        }
    }, false)

    const authSubmitHandler = event => {
        event.preventDefault()
        auth.login()
        console.log(formState.inputs)
    }
    const switchModeHandler = () => {
        if (!isLogin) {
            console.log(formState.inputs.email.isValid && formState.inputs.password.isValid)
            setFormData({
                ...formState.inputs,
                name: undefined
            },
                formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            },
                false)
        }
        setIsLogin(preMode => !preMode)
    }
    return (
        <Card className="authentication">
            <h2>Login required</h2>
            <hr></hr>
            <form onSubmit={authSubmitHandler}>
                {!isLogin && <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Your name"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    errorText="Please enter a name"
                ></Input>}
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email address"
                    onInput={inputHandler}
                ></Input>
                <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password"
                    onInput={inputHandler}
                ></Input>
                <Button type="submit" disabled={!formState.isValid}>
                    {isLogin ? 'Login' : 'Register'}
                </Button>
            </form>
            <Button onClick={switchModeHandler} inverse>Switch to {isLogin ? 'Register' : 'Login'}</Button>
        </Card>
    )
}

Auth.propTypes = {

}

export default Auth
