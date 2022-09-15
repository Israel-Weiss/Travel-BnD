import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//child cmp
import { PlaceOffer } from '../cmps/stays/stay-details-reserve'
import { RoomInfo } from '../cmps/stays/stay-details-title'
import { RoomImages } from '../cmps/stays/stay-details-img'
import { RoomDatails } from '../cmps/stays/stay-details-secondary'


export const RoomPreview = () => {
    return (
    <div className='room'>
        <RoomInfo />
        <RoomImages />
        <RoomDatails />
        <PlaceOffer />
    </div>
    )
}