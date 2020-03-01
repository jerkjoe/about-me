import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'
import Card from '../../shared/components/UIElements/Card'

import './UsersList.css'
const UsersList = ({ items }) => {
    if (items.length > 0) {
        return (
            <ul className="users-list">
                {items.map(({ id, image, name, places }) => {
                    return (
                        <UserItem
                            key={id}
                            name={name}
                            image={image}
                            id={id}
                            placeCount={places}
                        />
                    )
                })}
            </ul>
        )
    } else {
        return (
            <div className="center">
                <Card>
                    <h2>No sers found.</h2>
                </Card>
            </div>
        )
    }
}

UsersList.propTypes = {}

export default UsersList
