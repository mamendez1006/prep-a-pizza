import React from "react";
import GoogleMapReact from 'google-map-react'
import './map.css'


const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Select Delivery Location</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCafiRu_wI0hkn94SQ3V1E8N_78ffmyD0k' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
                yesIWantToUseGoogleMapApiInternals={true}
            >
            </GoogleMapReact>    
             
        </div>
    </div>
)

export default Map;