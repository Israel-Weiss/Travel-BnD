import { storageService } from "./async-storage.service"
import { httpService } from './http.service'

var gOrders = [
  // {
  //   "_id": "o1225",
  //   "hostId": "u102",
  //   "createdAt": 9898989,
  //   "buyer": {
  //     "_id": "u101",
  //     "fullname": "User 1"
  //   },
  //   "totalPrice": 160,
  //   "startDate": "2025/10/15",
  //   "endDate": "2025/10/17",
  //   "guests": {
  //     "adults": 2,
  //     "kids": 1
  //   },
  //   "stay": {
  //     "_id": "h102",
  //     "name": "House Of Uncle My",
  //     "price": 80.00
  //   },
  //   "status": "pending"
  // }
]

export const orderService = {
  createOrder,
  getByLogedInUser,
  getByHostName,
  aproveOrder
}

const BASE_URL="orders/"

async function createOrder(stay,startDate,endDate) {
  const user = storageService.getLogedInUser()
  if (user) var userId = user._id
  else userId = "t001"
  var order = {
    date: "16/09/22",
    id: "tyuiis114",
    host: stay.host.fullname,
    stay: stay.name,
    startDate: startDate,
    endDate:endDate,
    guests: "1",
    price: stay.price,
    status: "pending",
    userId: userId
  }
 return await httpService.post(BASE_URL, order)
}

async function getByLogedInUser() {
  var user = storageService.getLogedInUser()
  if (!user) var user = { _id: "t001" }

  const orders = await httpService.get(BASE_URL)
  let orderToDisplay = []
  orders.map(order => {
    if (order.userId === user._id) orderToDisplay.push(order)
  })
  return orderToDisplay

}

async function getByHostName() {
  var user = storageService.getLogedInUser()
  console.log(user.ishost);
  if (!user) return
  if (!user.ishost) return

  const orders = await httpService.get(BASE_URL)
    let orderToDisplay = []
    orders.map(order => {
      console.log(order.host.toLowerCase(), " ", user.fullname.toLowerCase());
      if (order.host.toLowerCase() === user.fullname.toLowerCase()) orderToDisplay.push(order)
    })
    if (!orderToDisplay) return null
    else return orderToDisplay
}

async function aproveOrder(orderId,status) {
  let orders = await httpService.get(BASE_URL)
  let currOrder
  orders.map(order => {
    if (order._id === orderId) currOrder=order
  })
  currOrder.status = status
  console.log("order id",orderId);
  return await httpService.put(BASE_URL+orderId, currOrder)
}

