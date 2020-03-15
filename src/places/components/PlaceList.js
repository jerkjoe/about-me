import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'
import Button from '../../shared/components/FormElements/Button'
import './PlaceList.css'

const PlaceList = ({ items }) => {
	if (items.length === 0) {
		return (
			<div className="place-list center">
				<Card>
					<h2>No places found. Maybe create one?</h2>
					<Button to="/places/new">Share Place</Button>
				</Card>
			</div>
		)
	}
	return (
		<ul className="place-list">
			{items.map(({ id, description, imageUrl, title, address, creator, location }) => {
				return <PlaceItem
					key={id}
					id={id}
					image={imageUrl}
					title={title}
					description={description}
					address={address}
					creator={creator}
					coordinates={location}
				></PlaceItem>
			})}
		</ul>
	)
}

PlaceList.propTypes = {}

export default PlaceList
