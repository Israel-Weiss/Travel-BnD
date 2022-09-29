import React from 'react'
import GoogleMapReact from 'google-map-react' 
import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

const AnyReactComponent = ({ text }) => <div className='outer-layer'><div className="map-icon">{text}</div> </div>

export function GoogleMap({ stays }) {  

    // Default init - stay details page

    const url = window.location.href
    var styleTag={width:"100%",height:"60vh", padding: '20px 0px 20px 0px'}  
    let lng = parseFloat(stays[0].loc.lat)
    let lat = parseFloat(stays[0].loc.lng)
    let coordinates = [{ lat: lat, lng: lng }]
    let coordinate
    var zoom = 18
    let mapIcon = <FaHome/>
    
    if(url.includes('wishlist')){
        styleTag={width:"100%",height:"90vh", padding: '0px'}  
        coordinates = []
        zoom = 1
        mapIcon = <FaHeart/>
        stays.map((stay) => {
            lng = parseFloat(stay.loc.lat)
            lat = parseFloat(stay.loc.lng)
            coordinate = { lat: lat, lng: lng }
            coordinates.push(coordinate)
    })}

        // Filter view mode 

    else if(!url.includes('stays')){
        styleTag= {width:"50%", padding: '20px 20px 0px 0px',position: 'fixed',
        top: '80px',height: 'calc(100vh - 80px)',minHeight: '100vh',right: '0',zIndex: '0'}
        coordinates = []
        zoom = 1
        stays.map((stay) => {
            lng = parseFloat(stay.loc.lat)
            lat = parseFloat(stay.loc.lng)
            coordinate = { lat: lat, lng: lng }
            coordinates.push(coordinate)
        })
    } 

    return (
        <div className={"google-map"} style={styleTag} >
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBvTjJLgXv_JG78L_VC13fO7vJjnzeBzH8" }}
                defaultCenter={coordinates[0]}
                // center={coordinates[0]}
                defaultZoom={zoom}                
            >
                {coordinates.map((coordinate) => {
                    return(
                    <AnyReactComponent
                    lat={coordinate.lat}
                    lng={coordinate.lng}
                    text={mapIcon}
                />)
})}
                
            </GoogleMapReact>
        </div>
    ) 
}