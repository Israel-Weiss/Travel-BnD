import { map } from "lodash";
import { storageService } from "./async-storage.service"
import { httpService } from './http.service'
import { socketService, SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_UPDATE,SOCKET_EVENT_STAY_ADDED } from './socket.service.js'



export const orderService = {
  createOrder,
  getByLogedInUser,
  getByHostName,
  aproveOrder,
  calcRevenues,
  getLastMonth,
  getLastYear
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
    expenses: stay.expenses,
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

function getLastMonth(orders){
  var currMonth = new Date().getMonth().toString()
  var monthRevenue = 0
  if(currMonth < 10) currMonth = '0' + currMonth

  orders.map((order) =>{
    if(order.endDate.substring(3,5) === currMonth && order.status === "Aprove"){
      monthRevenue += (order.price - order.expenses) * order.nights
  }})
  return monthRevenue
}

function getLastYear(orders){
  const currentYear = new Date().getFullYear().toString()
  var YearRevenue = 0
  console.log(currentYear)
  orders.map((order) =>{
    if(order.endDate.substring(6,10) === currentYear && order.status === "Aprove"){
      YearRevenue += (order.price - order.expenses) * order.nights
  }}) 
  return YearRevenue
}

function calcRevenues(orders){
  const currentYear = new Date().getFullYear().toString()
  const lastYear = (new Date().getFullYear() - 1).toString()
  const currentYearRevenues = [0,0,0,0,0,0,0,0,0,0,0,0]
  const lastYearRevenues = [0,0,0,0,0,0,0,0,0,0,0,0]
  const data = []

  orders.map((order) => {
    if(order.endDate.substring(6,10) === currentYear && order.status === "Aprove"){
      switch(order.endDate.substring(3,5)){
        case('01'):
        currentYearRevenues[0] += (order.price - order.expenses) * order.nights
        break;
        case('02'):
        currentYearRevenues[1] += (order.price - order.expenses) * order.nights
        break;
        case('03'):
        currentYearRevenues[2] += (order.price - order.expenses) * order.nights
        break;
        case('04'):
        currentYearRevenues[3] += (order.price - order.expenses) * order.nights
        break;
        case('05'):
        currentYearRevenues[4] += (order.price - order.expenses) * order.nights
        break;
        case('06'):
        currentYearRevenues[5] += (order.price - order.expenses) * order.nights
        break;
        case('07'):
        currentYearRevenues[6] += (order.price - order.expenses) * order.nights
        break;
        case('08'):
        currentYearRevenues[7] += (order.price - order.expenses) * order.nights
        break;
        case('09'):
        currentYearRevenues[8] += (order.price - order.expenses) * order.nights
        break;
        case('10'):
        currentYearRevenues[9] += (order.price - order.expenses) * order.nights
        break;
        case('11'):
        currentYearRevenues[10] += (order.price - order.expenses) * order.nights
        break;
        case('12'):
        currentYearRevenues[11] += (order.price - order.expenses) * order.nights
        break;
      }
    }
    else if(order.endDate.substring(6,10) === lastYear && order.status === "Aprove"){
      switch(order.endDate.substring(3,5)){
        case('01'):
        lastYearRevenues[0] += (order.price - order.expenses) * order.nights
        break
        case('02'):
        lastYearRevenues[1] += (order.price - order.expenses) * order.nights
        break
        case('03'):
        lastYearRevenues[2] += (order.price - order.expenses) * order.nights
        break
        case('04'):
        lastYearRevenues[3] += (order.price - order.expenses) * order.nights
        break
        case('05'):
        lastYearRevenues[4] += (order.price - order.expenses) * order.nights
        break
        case('06'):
        lastYearRevenues[5] += (order.price - order.expenses) * order.nights
        break
        case('07'):
        lastYearRevenues[6] += (order.price - order.expenses) * order.nights
        break
        case('08'):
        lastYearRevenues[7] += (order.price - order.expenses) * order.nights
        break
        case('09'):
        lastYearRevenues[8] += (order.price - order.expenses) * order.nights
        break
        case('10'):
        lastYearRevenues[9] += (order.price - order.expenses) * order.nights
        break
        case('11'):
        lastYearRevenues[10] += (order.price - order.expenses) * order.nights
        break
        case('12'):
        lastYearRevenues[11] += (order.price - order.expenses) * order.nights
        break
      }
    }

  })
  data.push(currentYearRevenues)
  data.push(lastYearRevenues)
  return data
}