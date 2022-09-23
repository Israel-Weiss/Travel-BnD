import { stayService } from '../services/stay.service'
import { showErrorMsg } from '../services/event-bus.service.js'


export function loadStay() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().stayModule
            console.log("filter",filterBy);
            const stays = await stayService.query(filterBy)
            dispatch({ type: 'SET_STAY', stays })
        } catch (err) {
            showErrorMsg('Cannot load stays')
        }
    }
}

export function setStay(stays) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_STAY', stays })
        } catch (err) {
            showErrorMsg('Cannot load stays')
        }
    }
}

export function setCurrentUrl(currentUrl ) {
    return (dispatch) => {
        dispatch({ type: 'SET_CURRENT_URL', currentUrl:currentUrl })
    }
}

export function setFilter(tag = null, text = null) {
    return async (dispatch) => {
        try {
            const stays = await stayService.query(tag, text)
            dispatch({ type: 'SET_STAY', stays })
        } catch (err) {
            showErrorMsg('Cannot load stays')
        }
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}


