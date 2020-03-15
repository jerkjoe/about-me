import React, { useState, useCallback, Fragment } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './user/pages/Users'
import UserPlaces from './places/pages/UserPlaces'
import NewPlace from './places/pages/NewPlace'
import UpdatePlace from './places/pages/UpdatePlace'
import Auth from './user/pages/Auth'
import { AuthContext } from './shared/components/context/auth-context'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const login = useCallback(
		() => {
			setIsLoggedIn(true)
		},
		[],
	)
	const logout = useCallback(
		() => {
			setIsLoggedIn(false)
		},
		[],
	)
	let routes
	if (isLoggedIn) {
		routes = (
			<Switch>
				<Route path="/" exact>
					<Users></Users>
				</Route>

				<Route path="/:userId/places">
					<UserPlaces></UserPlaces>
				</Route>
				<Route path="/places/new" exact>
					<NewPlace></NewPlace>
				</Route>
				<Route path="/places/:placeId" exact>
					<UpdatePlace></UpdatePlace>
				</Route>


				<Redirect to="/"></Redirect>
			</Switch>
		)
	} else {
		routes = (
			<Switch>
				<Route path="/" exact>
					<Users></Users>
				</Route>
				<Route path="/:userId/places">
					<UserPlaces></UserPlaces>
				</Route>
				<Route path="/auth">
					<Auth></Auth>
				</Route>
				<Redirect to="/auth"></Redirect>
			</Switch>
		)
	}
	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			<Router>
				<MainNavigation></MainNavigation>
				<main>
					{routes}
				</main>
			</Router>
		</AuthContext.Provider>
	)
}

export default App
