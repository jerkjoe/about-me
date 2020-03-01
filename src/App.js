import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './user/pages/Users'

function App() {
    return (
        <Router>
            <MainNavigation></MainNavigation>
            <main>
                <Switch>
                    <Route path="/">
                        <Users></Users>
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App
