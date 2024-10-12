import {SET_ENERGY, SET_FULL_ENERGY, SET_VALUE} from "../types";


const initialState = {
    value: 0,
    energy: 1000,
    fullEnergy: 1,
}


export const profileReducer = (state = initialState, action) => {
    const {payload, type} = action
    switch (type) {
        case SET_VALUE: {

            return {
                ...state,
                value: payload
            }
        }
        case SET_ENERGY: {

            return {
                ...state,
                energy: payload
            }
        }
        case SET_FULL_ENERGY: {

            return {
                ...state,
                fullEnergy: payload
            }
        }
        default:
            return state
    }

}