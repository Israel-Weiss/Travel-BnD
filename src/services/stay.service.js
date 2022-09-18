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

import { storageService } from "./async-storage.service"
const gStays = [
  {
    _id: "10006546",
    name: "Villa Vista",
    distance: "377",
    date: "Oct 10 – 15",
    type: "House",
    price: "715",
    tags: ["Beach"],
    imgUrls: [
      "https://a0.muscache.com/im/pictures/aa597965-46fe-4458-a9be-0c753417fca3.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/87b7a29b-69da-4acd-b3fd-5dc2ee259528.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/44a785d0-2d19-4167-b463-4f6bbea9219c.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/85077e7f-d1df-49bf-9bae-9001f824fec4.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/d720ed09-eb09-495c-9f62-de5cdc6b2cd1.jpg?im_w=720"
    ],
    summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    capacity: {
      guests: "12",
      bedrooms: "6",
      beds: "8",
      baths: "5"
    },
    amenities: [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics",
      "Pool",
      "Washer",
      "Hot tub",
      "Dryer",
      "Free parking on premises",
    ],
    host: {
      _id: "u101",
      fullname: "Davit Pok",
      imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    loc: {
      country: "Cyprus",
      countryCode: "CY",
      city: "Kissonerga",
      address: "Premier Shukuroglou Cyprus Ltd, Latsia 2234,",
      lat: 34.7935,
      lng: 32.39613
    },
    reviews: [
      {
        id: "r101",
        txt: "This is a great place to stay, the villa is great, it’s right on the coast with sunset views",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "Andrew",
          imgUrl: "https://a0.muscache.com/im/pictures/user/741eccac-5fb9-4c55-8f2a-333e0f951657.jpg?im_w=240"
        }
      },
      {
        id: "r102",
        txt: "the most amazing holiday in the most amazing place- everything was more than great",
        rate: 5,
        by: {
          _id: "u103",
          fullname: "Dror",
          imgUrl: "https://a0.muscache.com/im/pictures/user/a862403c-610f-4ffe-a67d-02b0cefdf395.jpg?im_w=240"
        }
      },
      {
        id: "r103",
        txt: "Worth every penny. Best place in Paphos. Incredible house, perfect location - swim in the pool or the sea close to all the sights. Best sunsets on the island. Magic!",
        rate: 4,
        by: {
          _id: "u104",
          fullname: "Noam",
          imgUrl: "https://a0.muscache.com/im/users/2287469/profile_pic/1411392245/original.jpg?im_w=240"
        }
      },
    ],
    likedByUsers: ['mini-user']
  },
  {
    _id: "10006547",
    name: "Full moon camping",
    distance: "718",
    date: "sep 21 – 26",
    type: "House",
    price: "100",
    tags: ["OMG!"],
    imgUrls: [
      "https://a0.muscache.com/im/pictures/2374cfe3-70a3-409e-868a-56eabd11b1b7.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e792c242-818c-4387-8bd5-c703ab22c40d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/65d046f4-ca76-40dc-b8a0-daee9c3ff35a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/f0549081-3444-4728-b09c-71bbcf76818a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/29ff3802-aaea-4787-b185-efb798820b35.jpg?im_w=720"
    ],
    summary: "Wooden bungolow houses, air-conditioned rooms with sea view shower and toilet, Half board has breakfast and dinner service",
    capacity: {
      guests: "2",
      bedrooms: "1",
      beds: "1",
      baths: "1"
    },
    amenities: [
      "HDTV",
      "Wifi",
      "Kitchen",
      "Free parking on premises",
      "Beach view",
      "Dedicated workspace",
      "Shared pool",
    ],
    host: {
      _id: "u101",
      fullname: "Davit Pok",
      imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    loc: {
      country: "Turkey",
      countryCode: "TR",
      city: "Fethiye/Muğla",
      address: "kabak mahallesi, 48300",
      lat: 36.467301,
      lng: 29.127189
    },
    reviews: [
      {
        id: "r104",
        txt: "One of the greatest location on the valley. Great view with always smiling staff.",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "Andrew",
          imgUrl: "https://a0.muscache.com/im/pictures/user/741eccac-5fb9-4c55-8f2a-333e0f951657.jpg?im_w=240"
        }
      },
      {
        id: "r105",
        txt: "The location is incredible but to get there is really complicated by car.",
        rate: 3,
        by: {
          _id: "u103",
          fullname: "Dror",
          imgUrl: "https://a0.muscache.com/im/pictures/user/a862403c-610f-4ffe-a67d-02b0cefdf395.jpg?im_w=240"
        }
      },
      {
        id: "r106",
        txt: "The fullmooncamp is a magical place, set on the cliff with a magnificent view of the beach of Kabak. It is very pleasant to have a drink and breakfast or dinner on the nice shaded terrace.",
        rate: 5,
        by: {
          _id: "u104",
          fullname: "Noam",
          imgUrl: "https://a0.muscache.com/im/users/2287469/profile_pic/1411392245/original.jpg?im_w=240"
        }
      },
    ],
    likedByUsers: ['mini-user']
  },
  {
    _id: "10006548",
    name: "Mountains Queen",
    distance: "357",
    date: "Sep 20 – 25",
    type: "House",
    price: "185",
    tags: ["Camping"],
    imgUrls: [
      "https://a0.muscache.com/im/pictures/9ccfb248-370e-49c8-833b-72a649908d5a.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/65ad24f5-3c4f-4340-8e75-1c84278361f1.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/c8e4ccb3-b13a-42a0-a1e3-8d48199b81a8.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/039384b0-75de-4c34-aae2-6fd5c76a2b50.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/efb8673c-b5e6-4502-9e60-b46a2ae0ce44.jpg?im_w=720"
    ],
    summary: "A beautiful log house imported directly from Finland to be the perfect retreat from busy city life.",
    capacity: {
      guests: "4",
      bedrooms: "2",
      beds: "2",
      baths: "2"
    },
    amenities: [
      "TV",
      "Wifi",
      "Kitchen",
      "Free parking on premises",
      "Patio or balcony",
      "Dedicated workspace",
      "Air conditioning",
    ],
    host: {
      _id: "u102",
      fullname: "Stavros",
      imgUrl: "https://a0.muscache.com/im/pictures/user/19700169-6b6f-4700-9aa5-42f754932e0e.jpg?im_w=240",
    },
    loc: {
      country: "Cyprus",
      countryCode: "CY",
      city: "Gourri",
      address: "Elaionon 3",
      lat: 34.95771,
      lng: 33.15795
    },
    reviews: [
      {
        id: "r107",
        txt: "The house is very organized, clean and comfortable! We really enjoyed!",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "Andrew",
          imgUrl: "https://a0.muscache.com/im/pictures/user/741eccac-5fb9-4c55-8f2a-333e0f951657.jpg?im_w=240"
        }
      },
      {
        id: "r108",
        txt: "Lovely place, everything you need to have a great time. Shame we didnt have more time to enjoy more",
        rate: 5,
        by: {
          _id: "u103",
          fullname: "Dror",
          imgUrl: "https://a0.muscache.com/im/pictures/user/a862403c-610f-4ffe-a67d-02b0cefdf395.jpg?im_w=240"
        }
      },
      {
        id: "r109",
        txt: "Everything was incredible! House was FULLY equipped, had everything we asked for and very clean.",
        rate: 4,
        by: {
          _id: "u104",
          fullname: "Noam",
          imgUrl: "https://a0.muscache.com/im/users/2287469/profile_pic/1411392245/original.jpg?im_w=240"
        }
      },
    ],
    likedByUsers: ['mini-user']
  },
  {
    _id: "10006549",
    name: "Phaedrus Living",
    distance: "373",
    date: "Nov 12 – 19",
    type: "House",
    price: "77",
    tags: ["Beach"],
    imgUrls: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-44923647/original/104c0c04-30f0-4c99-aaf1-315cd14edf4a.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/20e32b61-8302-41b5-809e-f72ab1c5c54b.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/bc1169a2-4080-413c-b64a-3685942d8b83.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/c96147c8-7c34-4213-98df-cc8d61c1974a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-44923647/original/eb2c837f-1da0-4b8c-a52e-169570e4f84e.jpeg?im_w=720"
    ],
    summary: "Phaedrus Living: Seaside Luxury Flat Limnaria 153 offers air-conditioned accommodation with a balcony and free WiFi. Guests staying at this apartment have access to a fully equipped kitchen.",
    capacity: {
      guests: "4",
      bedrooms: "1",
      beds: "2",
      baths: "1"
    },
    amenities: [
      "TV",
      "Wifi",
      "Kitchen",
      "Free parking on premises",
      "Private patio or balcony",
      "Washer",
      "Air conditioning",
      "Crib",
      "Beach access – Beachfront",
    ],
    host: {
      _id: "u102",
      fullname: "Stavros",
      imgUrl: "https://a0.muscache.com/im/pictures/user/19700169-6b6f-4700-9aa5-42f754932e0e.jpg?im_w=240",
    },
    loc: {
      country: "Cyprus",
      countryCode: "CY",
      city: "Paphos",
      address: "Athena Court, Artemidos 7-Flat 109",
      lat: 34.75663,
      lng: 32.41549
    },
    reviews: [
      {
        id: "r110",
        txt: "place was clean and as described. Phaedrus Living communication was fantastic throughout. Would happily stay again!",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "Andrew",
          imgUrl: "https://a0.muscache.com/im/pictures/user/741eccac-5fb9-4c55-8f2a-333e0f951657.jpg?im_w=240"
        }
      },
      {
        id: "r111",
        txt: "Definitely one of the best apartments, great location, amazing terrace, great touch! All over we enjoyed our stay and environment! 💙",
        rate: 5,
        by: {
          _id: "u103",
          fullname: "Dror",
          imgUrl: "https://a0.muscache.com/im/pictures/user/a862403c-610f-4ffe-a67d-02b0cefdf395.jpg?im_w=240"
        }
      },
      {
        id: "r112",
        txt: "Nice and clean",
        rate: 4,
        by: {
          _id: "u104",
          fullname: "Noam",
          imgUrl: "https://a0.muscache.com/im/users/2287469/profile_pic/1411392245/original.jpg?im_w=240"
        }
      },
    ],
    likedByUsers: ['mini-user']
  },
  {
    name: "Protaras Holiday ",
    _id: "10006550",
    distance: "3,485",
    date: "Oct 3 – 8",
    type: "House",
    price: "245",
    tags: ["Lakefront"],
    imgUrls: [
      "https://a0.muscache.com/im/pictures/151b74ab-182c-4351-b3af-50974679dd94.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-4659854/original/c9b4c6bf-b7e3-49e0-98e1-b5167f210fa8.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-4659854/original/0285a78c-65a2-4ce4-bc54-36f668cfc683.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/5a657371-483c-4444-8d59-2670955fbb34.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/8baec043-db8a-4fcd-8bb7-79d290c5a4e1.jpg?im_w=720"
    ],
    summary: "Stay at Coastguards Beach House and discover a landscape full of myths and legends, surrounded by the haunting loneliness of Romney Mash",
    capacity: {
      guests: "5",
      bedrooms: "2",
      beds: "4",
      baths: "1.5"
    },
    amenities: [
      "TV",
      "Wifi",
      "Kitchen",
      "Free parking on premises",
      "Sea view",
      "Washer",
      "Pets allowed",
      "Indoor fireplace",
      "Beach access Beachfront",
    ],
    host: {
      _id: "u103",
      fullname: "Maria",
      imgUrl: "https://a0.muscache.com/im/pictures/user/f504cbac-365c-415d-abaf-a59c8da8a745.jpg?im_w=240",
    },
    loc: {
      country: "United Kingdom",
      countryCode: "UK",
      city: "Camber",
      address: "Coastguard Cottages Jurys Gap, 7",
      lat: 0.83349,
      lng: 50.92737
    },
    reviews: [
      {
        id: "r113",
        txt: "Lovely cottage just by the sea, it was the ideal getaway for us during the extreme heatwave July 2022. Beautiful interiors, super cosy and everything was well managed.!",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "Andrew",
          imgUrl: "https://a0.muscache.com/im/pictures/user/741eccac-5fb9-4c55-8f2a-333e0f951657.jpg?im_w=240"
        }
      },
      {
        id: "r114",
        txt: "Wonderful stay, lovely homely and stylish accommodation, great, remote location away from the crowds.",
        rate: 5,
        by: {
          _id: "u103",
          fullname: "Dror",
          imgUrl: "https://a0.muscache.com/im/pictures/user/a862403c-610f-4ffe-a67d-02b0cefdf395.jpg?im_w=240"
        }
      },
      {
        id: "r115",
        txt: "very spacious cosy holiday home, 2 min from a great quiet beach,thicks all the boxes even for the most fussiest.",
        rate: 4,
        by: {
          _id: "u104",
          fullname: "Noam",
          imgUrl: "https://a0.muscache.com/im/users/2287469/profile_pic/1411392245/original.jpg?im_w=240"
        }
      },
    ],
    likedByUsers: ['mini-user']
  },
  {
    name: "Blue Windmill",
    _id: "10006551",
    distance: "1,739",
    date: "Dec 3 – 9",
    type: "House",
    price: "303",
    tags: ["Design"],
    imgUrls: [
      "https://a0.muscache.com/im/pictures/3fb32733-3f57-46d4-a058-8da195405c4e.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-21963225/original/777b23d9-d427-4584-a667-adee28ae458b.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/f335af5c-e14b-47e9-95c6-cbe6fe5e48a4.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/3539faf0-d058-491b-ba00-a98ce47b288b.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/ed817710-e5ba-4aa3-92b5-51b058f8f772.jpg?im_w=720"
    ],
    summary: "Very warm and cozy 5 bedroom cabin on a mountain river in the middle of wild nature. The cabin it's situated in a natural reservation at the foot of the Fagaras mountains...",
    capacity: {
      guests: "10",
      bedrooms: "5",
      beds: "8",
      baths: "2"
    },
    amenities: [
      "TV",
      "Wifi",
      "Kitchen",
      "Free street parking",
      "Mountain view",
      "Backyard",
      "River view",
      "Patio or balcony",
    ],
    host: {
      _id: "u103",
      fullname: "Maria",
      imgUrl: "https://a0.muscache.com/im/pictures/user/f504cbac-365c-415d-abaf-a59c8da8a745.jpg?im_w=240",
    },
    loc: {
      country: "Romania",
      countryCode: "RO",
      city: "Breaza",
      address: "Principala 234B",
      lat: 45.69043,
      lng: 24.88217
    },
    reviews: [
      {
        id: "r116",
        txt: "Incredible experience, wonderful place, great host! Will be back soon:)",
        rate: 5,
        by: {
          _id: "u102",
          fullname: "Andrew",
          imgUrl: "https://a0.muscache.com/im/pictures/user/741eccac-5fb9-4c55-8f2a-333e0f951657.jpg?im_w=240"
        }
      },
      {
        id: "r117",
        txt: "A fairy tale corner in the middle of nature. Very warm and cozy atmosphere inside the cabin..",
        rate: 5,
        by: {
          _id: "u103",
          fullname: "Dror",
          imgUrl: "https://a0.muscache.com/im/pictures/user/a862403c-610f-4ffe-a67d-02b0cefdf395.jpg?im_w=240"
        }
      },
      {
        id: "r118",
        txt: "Wonderful house in wonderful location , with very thoughtful owner who will do all he can to help your stay be a success :-)",
        rate: 4,
        by: {
          _id: "u104",
          fullname: "Noam",
          imgUrl: "https://a0.muscache.com/im/users/2287469/profile_pic/1411392245/original.jpg?im_w=240"
        }
      },
    ],
    likedByUsers: ['mini-user']
  }
]

export const stayService = {
  getById,
  query,
  calcRate,
  mapIcon
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
    stayToDisplay = gStays.filter(stay => stay.tags.includes(tag))
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
      rate += review.rate
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