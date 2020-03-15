import React from 'react'
import PropTypes from 'prop-types'
import UsersList from '../components/UsersList'
const User = () => {
	const users = [
		{
			id: '123',
			name: 'Joseph',
			image: 'https://image.flaticon.com/icons/svg/194/194938.svg',
			places: 3
		}
	]
	return <UsersList items={users} />
}

User.propTypes = {}

export default User
