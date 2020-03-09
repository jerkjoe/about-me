import React from 'react'
import PropTypes from 'prop-types'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const DUMMY = [

    {
        id: 'p1',
        title: 'Great Wall Mongolian B.B.Q',
        description: 'lorem ipsum .....',
        imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/ZWJVPaU3wnBsPp2hulvnqQ/o.jpg',
        address: '1234 Test Street',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: 'Great German B.B.Q',
        description: 'lorem ipsum .....',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipO8LpFNUgwv65iB4IoQIXRKG1QOEdBISAxqYpBT=w408-h306-k-no',
        address: '1234 Test Street',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'

    }
]
const UserPlaces = () => {
    const { userId } = useParams()
    const loadedPlaces = DUMMY.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}></PlaceList>
}

UserPlaces.propTypes = {}

export default UserPlaces
