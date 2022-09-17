import { storageService } from "./async-storage.service"

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
  getByLogedInUser
}


function createOrder(stay) {
  const user = storageService.getLogedInUser()
  console.log("useers", user);
  var order = {
    date: "16/09/22",
    id: "tyuiis114",
    host: stay.host.fullname,
    stay: stay.name,
    startDate: "05/09/22",
    endDate: "15/09/22",
    guests: "1",
    price: stay.price,
    status: "pending",
    userId: user._id
  }
  return storageService.post("orders", order, 'order')

}

function getByLogedInUser() {
  const user = storageService.getLogedInUser()
 return storageService.query("orders").then(orders => {
    let orderToDisplay = []
    orders.map(order => {
      if (order.userId === user._id) orderToDisplay.push(order)
    })
    return orderToDisplay
  })
}