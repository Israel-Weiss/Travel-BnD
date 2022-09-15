
import { toyService } from "../services/toy.service"


export function loadToys() {

    return (dispatch, getState) => {
        // const { filterBy } = getState().robotModule
        toyService.query()
            .then(toys => {
                dispatch({ type: 'SET_TOYS', toys: toys })
            })
            .catch(err => {
                console.log('err:', err)
            })

    }
}
    export function removeToy(toyId) {
        return (dispatch, getState) => {
            toyService.remove(toyId)
                .then(() => {
                    dispatch({ type: 'REMOVE_TOY', toyId: toyId })
                })
                .catch(err => {
                    console.log('err:', err)
                })
        }
    }


    export function addReview(toyId,review){
        return (dispatch, getState) => {
            toyService.saveReview(toyId,review)
                .then(reviews => {
                    dispatch({ type: 'ADD_REVIEW', reviews: reviews})
                })
                .catch(err => {
                    console.log('err:', err)
                })
        }

    }

    export function addToy(toy){
        return (dispatch, getState) => {
            toyService.save(toy)
                .then(toy => {
                    dispatch({ type: 'ADD_TOY', toy: toy})
                })
                // .catch(err => {
                //     console.log('err:', err)
                // })
        }

    }



    export function setFilter(filterBy=null,sortBy=null){
        return (dispatch, getState) => {
            console.log(sortBy);
        toyService.query(filterBy,sortBy).then(toys=>{
            dispatch({ type: 'SET_TOYS', toys: toys })
        })

    }
    }


