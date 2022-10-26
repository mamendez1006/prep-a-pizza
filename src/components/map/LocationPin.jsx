import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './map.css'
import Draggable from 'react-draggable';

const LocationPin = () => (
    <Draggable>
        <div className="pin">
            <Icon icon={locationIcon} className="pin-icon" />
            <p className="pin-text">Place Pin on Delivery Location</p>
        </div>
    </Draggable>
)

export default LocationPin;