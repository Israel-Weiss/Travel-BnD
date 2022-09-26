import { storageService } from "./async-storage.service"
import { httpService } from './http.service'
import { socketService, SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_UPDATE,SOCKET_EVENT_STAY_ADDED } from './socket.service.js'



export const orderService = {
  createOrder,
  getByLogedInUser,
  getByHostName,
  aproveOrder
}


const reviewChannel = new BroadcastChannel('reviewChannel');
(() => {
  socketService.on(SOCKET_EVENT_ORDER_ADDED, (order) => {
    console.log('GOT from socket', order)
    // store.dispatch(getActionAddReview(review))
  })
  socketService.on(SOCKET_EVENT_ORDER_UPDATE, (order) => {
    console.log('GOT from socket', order)
    // store.dispatch(getActionAddReview(review))
  })
  socketService.on(SOCKET_EVENT_STAY_ADDED, (stay) => {
    console.log('GOT from socket', stay)
  })

})()


const BASE_URL = "orders/"

async function createOrder(stay, startDate, endDate,nights,stayImg) {
  const user = storageService.getLogedInUser()
  if (user) {
    var userId = user._id
    var userImg = user.imgUrl
    var username = user.fullname
  }
  else userId = "t001"
  var order = {
    date: "16/09/22",
    id: "tyuiis114",
    host: stay.host.fullname,
    stay: stay.name,
    startDate: startDate,
    endDate: endDate,
    guests: "1",
    nights:nights,
    price: stay.price,
    status: "pending",
    stayImg:stayImg,
    userId: userId,
    userImg: userImg,
    username: username
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

async function aproveOrder(orderId, status) {
  let orders = await httpService.get(BASE_URL)
  let currOrder
  orders.map(order => {
    if (order._id === orderId) currOrder = order
  })
  currOrder.status = status
  console.log("order id", orderId);
  return await httpService.put(BASE_URL + orderId, currOrder)
}

