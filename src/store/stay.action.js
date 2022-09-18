import { stayService } from "../services/stay.service"

export function loadStay(tag) {
    return (dispatch) => {
        stayService.query(tag)
            .then(stays => {
                dispatch({ type: 'SET_STAYS', stays })
            })
    }
}

export function setFilter(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}
