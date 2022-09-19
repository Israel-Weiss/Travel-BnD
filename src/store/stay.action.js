import { stayService } from "../services/stay.service"

<<<<<<< HEAD

export function loadStay(tag = null, text = null) {
=======
export function loadStay(tag=null,text=null){
>>>>>>> dfecbed827974239b0d5a99b85e25a260b2eebea
    return (dispatch, getState) => {
        stayService.query().then(stays => {
            console.log(stays, "staysss");
            dispatch({ type: 'SET_STAY', stays: stays })
        })

    }
}

export function loadPage(page) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_PAGE', page: page })
    }
}

export function setFilter(tag = null, text = null) {

    return (dispatch, getState) => {

        stayService.query(tag, text).then(stays => {
            dispatch({ type: 'SET_STAY', stays: stays })
        })
    }
}


