import React from 'react'
import GoogleMapReact from 'google-map-react' 
import { useState } from 'react'
import { FaHome } from 'react-icons/fa';

const AnyReactComponent = ({ text }) => <div className='outer-layer'><div className="map-icon">{text}</div> </div>

export function GoogleMap({ stay }) {    
    const lng = parseFloat(stay.loc.lng)
    const lat = parseFloat(stay.loc.lat)
    const [coordinates, setCoordinates] = useState({ lat: lng, lng: lat })
    const zoom = 16
    const mapIcon = <FaHome/>
    const onClick = ({ x, y, lat, lng, event }) => {
        setCoordinates({lat, lng})
    }

    return (
        // Important! Always set the container height explicitly
        <div className="google-map" style={{ height: '66.50vh', width: '100%' , padding: '20px 20px 20px 20px'}}>
            <GoogleMapReact
                onClick={onClick}
                bootstrapURLKeys={{ key: "AIzaSyBvTjJLgXv_JG78L_VC13fO7vJjnzeBzH8" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={zoom}
                
            >
                <AnyReactComponent
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    text={mapIcon}
                />
            </GoogleMapReact>
        </div>
    ) 
}