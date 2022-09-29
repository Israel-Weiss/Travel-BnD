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
    if(wishLists.length === 1) {
        wishLists[0].stays.map((stayList, i) => {
            if(stayList._id === stay._id) wishLists[0].stays.splice(i, 1)
            i++
    })
    return storageService._save('wishList',wishLists)
}
    else {
        wishLists.map((list, wishlistIndex) => {
            var stays = list.stays
            stays.map((stayList, stayIndex) => {
                if(stayList._id === stay._id){
                    wishLists[wishlistIndex].stays.splice(stayIndex,1)
                }
                stayIndex++
            })
        wishlistIndex++
    })
}    
    return storageService._save('wishList',wishLists)
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