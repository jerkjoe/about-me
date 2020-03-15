import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import './MainNavigation.css'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import { Link } from 'react-router-dom'
import './MainNavigation.css'
import Backdrop from '../UIElements/Backdrop'
const MainNavigation = props => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false)

	const openDrawerHandler = () => {
		setDrawerIsOpen(true)
	}
	const closeDrawerHandler = () => {
		setDrawerIsOpen(false)
	}
	return (
		<Fragment>
			{drawerIsOpen && <Backdrop onClick={closeDrawerHandler}></Backdrop>}
			<SideDrawer onClick={closeDrawerHandler} show={drawerIsOpen}>
				<nav className="main-navigation__drawer-nav">
					<NavLinks></NavLinks>
				</nav>
			</SideDrawer>
			<MainHeader>
				<button
					className="main-navigation__menu-btn"
					onClick={openDrawerHandler}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<h1 className="main-navigation__title">
					<Link to="/"> Your Places</Link>
				</h1>
				<nav className="main-navigation__header-nav">
					<NavLinks></NavLinks>
				</nav>
			</MainHeader>
		</Fragment>
	)
}

MainNavigation.propTypes = {}

export default MainNavigation
