import { stayService } from "../services/stay.service"


export function loadStay(tag = null,text=null) {
    return (dispatch) => {
        stayService.query().then(stays => {
            dispatch({ type: 'SET_STAY', stays: stays })
        })
    }
}

export function setCurrentUrl(page) {
    return (dispatch) => {
        dispatch({ type: 'SET_PAGE', page: page })
    }
}

export function setFilter(tag = null, text = null) {
    return (dispatch) => {
        stayService.query(tag, text).then(stays => {
            dispatch({ type: 'SET_STAY', stays: stays })
        })
    }
}


