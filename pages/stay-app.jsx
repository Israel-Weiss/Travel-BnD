import React, { useEffect } from 'react'
import { connect } from 'react-redux'


import { loadStays, addStay, updateStay, removeStay, addToStayt } from '../store/stay.actions.js'

import { showSuccessMsg } from '../services/event-bus.service.js'
import { stayService } from '../services/stay.service.js'

function _StayApp({ loadStays}) {

    useEffect(() => {
        loadStays()
    }, [])


    return (
        <div>


        </div>
    )
}


function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays
    }
}

const mapDispatchToProps = {
    loadStays,
    removeStay,
    addStay,
    updateStay,
    addToStayt
}


export const StayApp = connect(mapStateToProps, mapDispatchToProps)(_StayApp)