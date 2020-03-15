import React from 'react'
import PropTypes from 'prop-types'
import './MainHeader.css'
const MainHeader = ({ children }) => {
	return (
		<div>
			<header className="main-header">{children}</header>
		</div>
	)
}

MainHeader.propTypes = {}

export default MainHeader
