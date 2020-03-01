import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'
const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    All Users
                </NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">My Places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">Add Place</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
        </ul>
    )
}

NavLinks.propTypes = {}

export default NavLinks
