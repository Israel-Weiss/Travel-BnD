// import { gStays } from '../storage/stay'

import pool from '../assets/imgs/house/place-offer/pool.svg'
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
import { socketService, SOCKET_EVENT_STAY_ADDED } from './socket.service.js'

import { storageService } from "./async-storage.service"
import { httpService } from './http.service'

export const stayService = {
  getById,
  query,
  calcRate,
  mapIcon,
  getRandomIntInclusive,
  getLocalZones,
  createStay,
  edit
}
const BASE_URL = "stays/"





const host =
{
  fullname: "Richard",
  location: "New York, New York, United States",
  about: "I am pretty much your average early/mid career working professional in NYC.",
  pictureUrl: "https://res.cloudinary.com/dv2tdbhtp/image/upload/v1663674459/hostmale1_l30u7i.jpg",
  isSuperhost: true,
  id: "34607505"
}


async function getById(stayId) {
  const stay = await httpService.get(BASE_URL + stayId)
  return stay
}

async function edit(stay) {
  const currStay = await httpService.put(BASE_URL + stay._id, stay)
  return currStay
}

async function query(filterBy) {
  const stays = await httpService.get(BASE_URL, { params: filterBy })
  console.log("im got a called twice");


  return Promise.resolve(stays)
}

async function createStay(stayForm) {
  const user = storageService.getLogedInUser()
  const stay = {
    name: stayForm.capcity.name,
    type: "OMG!",
    imgUrls: stayForm.imgUrls,
    price: stayForm.capcity.price,
    summery: "bla bla bla",
    capacity: {
      guests: stayForm.capcity.guests,
      bedrooms: stayForm.capcity.bedrooms,
      bathrooms: stayForm.capcity.bathrooms,
    },
    loc: stayForm.loc,
    amenities: stayForm.amenities,
    reviews: [],
    likedByUsers: [],
    host: user
  }
  console.log(stay);
  const stays = await httpService.post(BASE_URL, stay)
  window.location.href = "index.html/#/";

}

async function getLocalZones(text) {

const localZones= await httpService.get(BASE_URL + "placelist",{ params: text })



  // const lowerText = text.toLowerCase()
  // let stays = await query()
  // let localZones = []

  // stays.map(stay => {
  //   const { country, city } = stay.loc

  //   if (country.toLowerCase().includes(lowerText) &&
  //     (country.charAt(0).toLowerCase() === lowerText.charAt(0))
  //     && !localZones.includes(country) && !localZones.includes(city)) localZones.push(country)

  //   if (city.toLowerCase().includes(lowerText) &&
  //     (city.charAt(0).toLowerCase() === lowerText.charAt(0))
  //     && !localZones.includes(country) && !localZones.includes(city)) localZones.push(city)

  // })
  // console.log(localZones, "localzone");
  // return Promise.resolve(localZones)
}

function calcRate(reviews) {
  var rate = 0
  if (reviews.length < 1) return "3.0"
  else {
    reviews.map((review) => {
      rate += review.rate
    })
    rate = rate / reviews.length
    if (rate < 3.5) rate += 1.5
    return rate.toFixed(2)
  }
}

function mapIcon(amenities) {
  var picright = []
  var picleft2 = []

  let icon = {}
  amenities.map((amentitie) => {
    switch (amentitie) {
      case ('Shared pool' || 'Pool' || 'Pool view' || 'Private pool'):
        icon = { img: pool, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('TV' || 'HDTV'):
        icon = { img: tv, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Wifi'):
        icon = { img: wifi, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Kitchen' || 'Cooking basics'):
        icon = { img: kitchen, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Washer'):
        icon = { img: washer, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Hot tub'):
        icon = { img: hottub, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Dryer'):
        icon = { img: dryer, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Free parking on premises' || 'Free street parking'):
        icon = { img: parking, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Mountain view' || 'River view'):
        icon = { img: mountain, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Patio or balcony' || 'Private patio or balcony'):
        icon = { img: patio, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Air conditioning'):
        icon = { img: aircondition, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Crib'):
        icon = { img: crib, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Beach access – Beachfront' || 'Beach view' || 'Beach access Beachfront' || 'Sea view'):
        icon = { img: beach, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Pets allowed'):
        icon = { img: pets, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Indoor fireplace'):
        icon = { img: fireplace, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Dedicated workspace'):
        icon = { img: workspace, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
      case ('Smoking allowed'):
        icon = { img: smokeallowed, text: amentitie }
        return (picleft2.length < 5) ? picleft2.push(icon) : picright.push(icon)
    }
  }
  )
  icon = [picleft2, picright]
  return icon
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function save(stay) {
  if (stay._id) {
    return httpService.put(`stays/${stay._id}`, stay)
  } else {
    return httpService.post(`stays/${stay._id}`, stay)
  }
}






  // let stayToDisplay = []

  // if (tag) {
  //   stayToDisplay = stays.filter(stay => stay.type.includes(tag))
  //   return Promise.resolve(stayToDisplay)
  // }
  // else if (text) {
  //   const lowerText = text.toLowerCase()
  //   stayToDisplay = stays.filter(stay =>
  //     (stay.name.toLowerCase().includes(lowerText))
  //     || (stay.loc.country.toLowerCase().includes(lowerText))
  //     || (stay.loc.city.toLowerCase().includes(lowerText)))
  //   console.log(stayToDisplay);
  //   return Promise.resolve(stayToDisplay)
  // }
  // else if (range) {
  //   console.log("im got range");
  //   stayToDisplay = stays.filter(stay => (parseInt(stay.price) > range.start) && (parseInt(stay.price) < range.end))
  //   stayToDisplay.sort((a, b) =>
  //     parseInt(a.price) - parseInt(b.price)
  //   )
  //   return Promise.resolve(stayToDisplay)
  // }
  // else stayToDisplay = stays

















// function query(tag = null, text = null) {
//   let stays
//   let stayToDisplay = []
//   if (!stays) {
//     stays = gStays
//     storageService._save('stays', stays)
//   }
//   else stays = storageService.getStays()

//   stays.map(stay => {
//     if (!stay.host) console.log(stay._id);
//   })


//   if (tag) {
//     stayToDisplay = stays.filter(stay => stay.type.includes(tag))
//     return Promise.resolve(stayToDisplay)
//   }
//   else if (text) {
//     const lowerText = text.toLowerCase()
//     stayToDisplay = stays.filter(stay =>
//       (stay.name.toLowerCase().includes(lowerText))
//       || (stay.loc.country.toLowerCase().includes(lowerText))
//       || (stay.loc.city.toLowerCase().includes(lowerText)))
//     console.log(stayToDisplay);
//     return Promise.resolve(stayToDisplay)
//   }
//   else {
//     storageService._save('stays', stays)
//     if (gStays.length > 100) stayToDisplay = gStays.splice(0, 100)
//     return Promise.resolve(stayToDisplay)
//   }
// }