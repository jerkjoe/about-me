import React, { useState, Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import Card from '../../shared/components/UIElements/Card'
import './PlaceItem.css'
import Modal from '../../shared/components/UIElements/Modal'

import Button from '../../shared/components/FormElements/Button'

import Map from '../../shared/components/UIElements/Map'
import { AuthContext } from '../../shared/components/context/auth-context'
const PlaceItem = ({ id, description, image, title, address, creator, coordinates }) => {
	const [showMap, setShowMap] = useState(false)
	const openMapHandler = () => setShowMap(true)
	const closeMapHandler = () => setShowMap(false)
	const [showConfirmModal, setShowConfirmModal] = useState(false)
	const showDeleteWarningHandler = () => {
		setShowConfirmModal(true)
	}
	const cancelDeleteHandler = () => {
		setShowConfirmModal(false)
	}
	const confirmDeleteHandler = () => {
		console.log('Deleting')
	}
	const auth = useContext(AuthContext)
	return (
		<Fragment>
			<Modal
				show={showMap}
				onCancel={closeMapHandler}
				header={address}
				contentClass="place-item__modal-content"
				footerClass="place-item__modal-actions"
				footer={<Button onClick={closeMapHandler}>Close</Button>}
			>
				<div className="map-container">
					<h2>The map</h2>
					<Map center={coordinates} zoom={5}></Map>
				</div>
			</Modal>
			<Modal
				show={showConfirmModal}
				header="Are you sure?" footerClass="place-item__modal-actions" footer={
					<Fragment>
						<Button onClick={cancelDeleteHandler} inverse>Cancel</Button>
						<Button onClick={confirmDeleteHandler}>Delete</Button>
					</Fragment>
				}>
				<p>Do you want to proceed and delete this place? Please not that is cannot be undone thereafter</p>
			</Modal>
			<li className="place-item">
				<Card className="place-item__content">
					<div className="place-item__image">
						<img src={image} alt={title}></img>
					</div>
					<div className="place-item__info">
						<h2>{title}</h2>
						<h3>{address}</h3>
						<p>{description}</p>
					</div>
					<div className="place-item__actions">
						<Button inverse onClick={openMapHandler}>View on map</Button>
						{auth.isLoggedIn &&
                            <Fragment>
                            	<Button to={`/places/${id}`}>Edit</Button>
                            	<Button onClick={showDeleteWarningHandler} danger>Delete</Button>
                            </Fragment>
						}
					</div>
				</Card>
			</li>
		</Fragment>
	)
}

PlaceItem.propTypes = {}

export default PlaceItem
