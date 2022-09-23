import React from 'react'
import GoogleMapReact from 'google-map-react' 
import { useState } from 'react'
import { FaHome } from 'react-icons/fa';

const AnyReactComponent = ({ text }) => <div className='outer-layer'><div className="map-icon">{text}</div> </div>

export function GoogleMap({ stay }) {    
    const lng = parseFloat(stay.loc.lat)
    const lat = parseFloat(stay.loc.lng)
    const [coordinates, setCoordinates] = useState({ lat: lat, lng: lng })
    const zoom = 16
    const mapIcon = <FaHome/>
    const onClick = ({ x, y, lat, lng, event }) => {
        setCoordinates({lat, lng})
    }

    return (
        <div className="google-map" style={{ height: '75vh', width: '100%' , padding: '20px 0px 20px 0px'}}>
            <GoogleMapReact
                // onClick={onClick}
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