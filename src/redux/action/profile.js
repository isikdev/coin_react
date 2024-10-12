import {SET_ENERGY, SET_FULL_ENERGY, SET_VALUE} from "../types";
import {lsProps} from "../../utils/localStorage";


export const setValue = (payload,onlyStore) => (dispatch) => {
    dispatch({type: SET_VALUE, payload})
    if(!onlyStore) localStorage.setItem(lsProps.balance,payload)
}
export const setEnergy = (payload,onlyStore) => (dispatch) => {
    dispatch({type: SET_ENERGY, payload})
    if(!onlyStore) localStorage.setItem(lsProps.energy,payload)
}
export const setFullEnergy = (payload,onlyStore) => (dispatch) => {
    dispatch({type: SET_FULL_ENERGY, payload})
    if(!onlyStore) localStorage.setItem(lsProps.energy,payload)
}