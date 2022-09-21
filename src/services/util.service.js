export const UtilService = {
    makeId,
    stringToDate
}

function makeId(length = 10) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}


function stringToDate(str){
console.log(str);
var month
switch(str){
    case "Jan": return month = "01"
    break
    case  "Feb": return month = "02"
    break
    case "Mar": return  month ="03"
    break
    case "Apr": return month ="04"
    break
    case "May": return month ="05"
    break
    case "Jun": return month ="06"
    break
    case "Jul": return month ="07"
    break
    case "Aug": return month ="08"
    break
    case "Sep": return month ="09"
    break
    case "Oct": return month ="10"
    break
    case "Nov": return month ="11"
    break
    case "Dec": return month ="12"
    break
}
console.log(month,"i8uiuiui");
return month 

}