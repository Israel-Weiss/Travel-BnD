
import { stayService } from "../services/stay.service"


export function loadStay(tag=null,text=null){
    return (dispatch, getState) => {
    stayService.query().then(stays=>{
        console.log(stays,"staysss");
        dispatch({ type: 'SET_STAY', stays: stays })
    })

}
}

    export function setFilter(tag=null,text=null){

        return (dispatch, getState) => {
       
        stayService.query(tag,text).then(stays=>{
            console.log("J",stays);
            dispatch({ type: 'SET_STAY', stays: stays })
        })
    }
    }


