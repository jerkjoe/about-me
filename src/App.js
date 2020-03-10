import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './user/pages/Users'
import UserPlaces from './places/pages/UserPlaces'
import NewPlace from './places/pages/NewPlace'

function App() {
    return (
        <Router>
            <MainNavigation></MainNavigation>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Users></Users>
                    </Route>
                    <Route path="/places/new" exact>
                        <NewPlace></NewPlace>
                    </Route>
                    <Route path="/:userId/places">
                        <UserPlaces></UserPlaces>
                    </Route>
                    <Redirect to="/"></Redirect>
                </Switch>
            </main>
        </Router>
    )
}

export default App
