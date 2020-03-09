import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './user/pages/Users'
import UserPlaces from './places/pages/UserPlaces'

function App() {
    return (
        <Router>
            <MainNavigation></MainNavigation>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Users></Users>
                    </Route>
                    <Route path="/:userId/places">
                        <UserPlaces></UserPlaces>
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App
