import { map } from "lodash";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
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
  getLastYear,
  getStatus,
  getNumOfOccupied,
  getGrowth,
  getNumOfStays
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
  if (!user) return
  if (!user.ishost) return

  const orders = await httpService.get(BASE_URL)
  let orderToDisplay = []
  orders.map(order => {
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
  return await httpService.put(BASE_URL + orderId, currOrder)
}

function getLastMonth(orders){
  const currentYear = new Date().getFullYear().toString()
  var currMonth = new Date().getMonth() + 1
  currMonth = currMonth.toString()
  var monthRevenue = 0
  if(currMonth < 10) currMonth = '0' + currMonth

  orders.map((order) =>{
    if(order.endDate.substring(3,5) === currMonth && order.endDate.substring(6,10) === currentYear && order.status === "Aprove"){
      monthRevenue += (order.price - order.expenses) * order.nights
  }})

  monthRevenue = monthRevenue.toFixed(0)
  if (monthRevenue > 999 && monthRevenue < 9999) monthRevenue = monthRevenue.toString().charAt(0) + "," + monthRevenue.toString().substring(1)
    else if(monthRevenue>9999)monthRevenue= monthRevenue.toString().substring(0,2) + "," +monthRevenue.toString().substring(2)

  return monthRevenue
}

function getLastYear(orders){
  const currentYear = new Date().getFullYear().toString()
  var YearRevenue = 0
  orders.map((order) =>{
    if(order.endDate.substring(6,10) === currentYear && order.status === "Aprove"){
      YearRevenue += (order.price - order.expenses) * order.nights
  }}) 

  YearRevenue = YearRevenue.toFixed(0)
  if (YearRevenue > 999 && YearRevenue < 9999) YearRevenue = YearRevenue.toString().charAt(0) + "," + YearRevenue.toString().substring(1)
    else if(YearRevenue>9999)YearRevenue= YearRevenue.toString().substring(0,3) + "," +YearRevenue.toString().substring(3)

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

function getStatus(orders){
  let statusArr = [0,0,0]
  orders.map((order) => {
    switch(order.status){
      case ('Aprove'):
        statusArr[0]++
        break
      case ('Cancel'):
        statusArr[1]++
        break
      case ('pending'):
        statusArr[2]++
        break
    }
  })
  return statusArr
}

function getNumOfOccupied(orders){
  var currMonth = new Date().getMonth() + 1
  currMonth = currMonth.toString()
  if(currMonth < 10) currMonth = '0' + currMonth
  var occupiedPropeties = 0
  orders.map((order) => {
    if( order.endDate.substring(3,5) === currMonth && order.status === 'Aprove') occupiedPropeties++
  })
  return occupiedPropeties
}

function getGrowth(orders){
  var currMonth = new Date().getMonth() + 1
  var lastMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear().toString()
  currMonth = currMonth.toString()
  lastMonth = lastMonth.toString()
  if(currMonth < 10) currMonth = '0' + currMonth
  if(lastMonth < 10) lastMonth = '0' + lastMonth
  var currMonthIncome = 0
  var lastMonthIncome = 0
  orders.map((order) => {
    if(order.endDate.substring(3,5) === currMonth && order.status === 'Aprove' && currentYear === order.endDate.substring(6,10)) currMonthIncome += (order.price - order.expenses) * order.nights
    else if(order.endDate.substring(3,5) === lastMonth && order.status === 'Aprove' && currentYear === order.endDate.substring(6,10)) lastMonthIncome += (order.price - order.expenses) * order.nights
  })
  const precentageGrowth = currMonthIncome / lastMonthIncome * 100 - 100
  return precentageGrowth.toFixed(2)
}

function getNumOfStays(user){
  return user.numOfStays
}