import pool from '../assets/imgs/house/place-offer/pool.svg'
import { gStays } from './stay'
import tv from '../assets/imgs/house/place-offer/tv.svg'
import beach from '../assets/imgs/house/place-offer/beach.svg'
import dryer from '../assets/imgs/house/place-offer/dryer.svg'
import fireplace from '../assets/imgs/house/place-offer/fireplace.svg'
import hottub from '../assets/imgs/house/place-offer/hottub.svg'
import kitchen from '../assets/imgs/house/place-offer/kitchen.svg'
import mountain from '../assets/imgs/house/place-offer/mountain.svg'
import parking from '../assets/imgs/house/place-offer/parking.svg'
import patio from '../assets/imgs/house/place-offer/patio.svg'
import pets from '../assets/imgs/house/place-offer/pets.svg'
import smokeallowed from '../assets/imgs/house/place-offer/smokeallowed.svg'
import washer from '../assets/imgs/house/place-offer/washer.svg'
import wifi from '../assets/imgs/house/place-offer/wifi.svg'
import workspace from '../assets/imgs/house/place-offer/workspace.svg'
import aircondition from '../assets/imgs/house/place-offer/aircondition.svg'
import crib from '../assets/imgs/house/place-offer/crib.svg'

import { storageService } from "./async-storage.service"

export const stayService = {
  getById,
  query,
  calcRate,
  mapIcon,
  getRandomIntInclusive
}

function getById(stayId) {
  let stay = null
  gStays.map(currStay => {
    if (currStay._id === stayId) stay = currStay
  })
  return Promise.resolve(stay)
}

function query(tag = null,text=null) {
  let stayToDisplay = []
  if (tag) {
    stayToDisplay = gStays.filter(stay => stay.type.includes(tag))
    return Promise.resolve(stayToDisplay)
  }
  else if(text){
const lowerText = text.toLowerCase()
    stayToDisplay = gStays.filter(stay => 
      (stay.name.toLowerCase().includes(lowerText))
    ||(stay.loc.country.toLowerCase().includes(lowerText)) 
    ||(stay.loc.city.toLowerCase().includes(lowerText)))
    console.log(stayToDisplay);
    return Promise.resolve(stayToDisplay)
  }
  else {
    storageService._save('stays', gStays)
    return Promise.resolve(gStays)
  }
}

function calcRate(reviews) {
  var rate = 0
  reviews.map((review) =>{
      rate += getRandomIntInclusive(1, 5)
  })
  rate = rate / reviews.length
  return rate.toFixed(2)
}

function mapIcon(amenities) {
  var picright = [] 
  var picleft2 = []
    
  let icon = {}
  amenities.map((amentitie) => {
      switch(amentitie) {
          case('Shared pool' || 'Pool' || 'Pool view' || 'Private pool'):
              icon ={img:pool, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('TV' || 'HDTV'):
              icon ={img: tv, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Wifi'):
              icon ={img: wifi, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Kitchen' || 'Cooking basics'):
              icon ={img: kitchen, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Washer' ): 
              icon ={img: washer, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Hot tub'):
              icon ={img: hottub, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Dryer'):
              icon ={img: dryer, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Free parking on premises' || 'Free street parking'):
              icon ={img: parking, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Mountain view' || 'River view'):
              icon ={img: mountain, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Patio or balcony' || 'Private patio or balcony'):
              icon ={img: patio, text: amentitie} 
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Air conditioning'):
              icon ={img: aircondition, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Crib'):
              icon ={img: crib, text: amentitie}
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Beach access – Beachfront' || 'Beach view' || 'Beach access Beachfront' || 'Sea view'):
              icon ={img: beach, text: amentitie} 
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Pets allowed'):
              icon ={img: pets, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Indoor fireplace'):
               icon ={img: fireplace, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Dedicated workspace'):
              icon ={img: workspace, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
          case('Smoking allowed'):
              icon ={img: smokeallowed, text: amentitie}  
              return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
      } 
  }
)
icon=[picleft2,picright]
  return icon
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}