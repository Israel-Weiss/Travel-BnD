import { storageService } from "./async-storage.service"
import { UtilService } from "./util.service"

export const wishListService = {
    createOrder,
    getByLogedInUser,
    addStayToList,
    getById,
    removeStay,
}

function createOrder(name, stay) {
    console.log(stay);
    var user = storageService.getLogedInUser()
    const wishList = {
        _id: UtilService.makeId(),
        name,
        stays:[stay],
        imgUrls: [
            stay.imgUrls[0],
            stay.imgUrls[1],
            stay.imgUrls[2],
        ],
        likedByUser: user._id
    }
    console.log("wishList", wishList);
    return storageService.post("wishList", wishList)
}

function addStayToList(listId,stay){
let wishList= storageService.getWishList()
let currList
wishList.map(list=>{
    if(list._id===listId)currList=list
})
currList.stays.push(stay)
storageService.put("wishList",currList)
}


function getByLogedInUser() {
    var user = storageService.getLogedInUser()
//   if(!user)var user={_id:"t001"}
    return storageService.query("wishList").then(wishLists => {
      let wishListToDisplay = []
      wishLists.map(wishList => {
        if (wishList.likedByUser === user._id) wishListToDisplay.push(wishList)
      })
      return  wishListToDisplay
    })
  }

  async function removeStay(stay){
    return Promise.resolve(storageService.query("wishList").then(wishLists => {
        console.log(stay)
    console.log(wishLists)
    if(wishLists.length === 1) wishLists[0].stays.splice(wishLists[0].stays.indexOf(stay), 1)
    
    else wishLists.map((list) => {
        if(list.stays.includes(stay)){
            list.stays.splice(list.stays.indexOf(stay), 1)
        }
    })
    console.log(wishLists)
    return storageService.put('wishList',wishLists)
  }))
}
  

function getById(listId){
let lists=storageService.getWishList()
let list
lists.map(currList=>{
    if(currList._id===listId)list=currList
})
return Promise.resolve(list)

}