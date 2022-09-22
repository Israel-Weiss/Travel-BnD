import { stayService } from '../services/stay.service'
import { showErrorMsg } from '../services/event-bus.service.js'

// export function loadStay(tag = null, text = null) {
//     return (dispatch) => {
//         stayService.query().then(stays => {
//             dispatch({ type: 'SET_STAY', stays: stays })
//         })
//     }
// }

export function loadStay() {
    return async (dispatch) => {
        try {
            const stays = await stayService.query()
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


export function setCurrentUrl(page) {
    return (dispatch) => {
        dispatch({ type: 'SET_PAGE', page: page })
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

// export function setFilter(tag = null, text = null) {
//     return (dispatch) => {
//         stayService.query(tag, text).then(stays => {
//             dispatch({ type: 'SET_STAY', stays: stays })
//         })
//     }
// }


