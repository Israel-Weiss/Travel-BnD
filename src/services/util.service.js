export const UtilService = {
    makeId,
    stringToDate,
    calcSum,
    numberToDate,
    getRandomInt,
    getDistance
}


function getDistance(latUser, lngUser, latPlace, lngPlace) {
    var R = 6371
    var dLat = toRad(latPlace-latUser)
    var dLon = toRad(lngPlace-lngUser)
    var latUser = toRad(latUser)
    var latPlace = toRad(latPlace)

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(latUser) * Math.cos(latPlace)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    var d = R * c
    return d
  
}

function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }

function makeId(length = 10) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}


function stringToDate(str) {
    console.log(str);
    var month
    switch (str) {
        case "Jan": return month = "01"
            break
        case "Feb": return month = "02"
            break
        case "Mar": return month = "03"
            break
        case "Apr": return month = "04"
            break
        case "May": return month = "05"
            break
        case "Jun": return month = "06"
            break
        case "Jul": return month = "07"
            break
        case "Aug": return month = "08"
            break
        case "Sep": return month = "09"
            break
        case "Oct": return month = "10"
            break
        case "Nov": return month = "11"
            break
        case "Dec": return month = "12"
            break
    }
    console.log(month, "i8uiuiui");
    return month

}

function calcSum(price, night) {
    let sum =price * night
    let string
    let totalPrice
    if (sum > 1000) {
        string = sum.toString()
        totalPrice = string.charAt(0) + "," + string.substring(1, string.length)
        return totalPrice
    }
    else return sum
}

function numberToDate(date){
    const today = date
const yyyy = today.getFullYear()
let mm = today.getMonth() + 1
let dd = today.getDate()

if (dd < 10) dd = '0' + dd
if (mm < 10) mm = '0' + mm

const formattedToday = dd + '/' + mm + '/' + yyyy
return formattedToday
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }