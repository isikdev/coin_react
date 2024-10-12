import {SET_BOOST_INTERVALS, SET_BOOST_STATUS} from "../types";
import {lsProps} from "../../utils/localStorage";

export const maxStatus = 95.78

export const setActivationStatus = (payload) => (dispatch) => {
    localStorage.setItem(lsProps.activationStatus,JSON.stringify(payload))
    dispatch({type: SET_BOOST_STATUS,payload})
}

export const setActivationIntervals = (payload) => (dispatch) => {
    localStorage.setItem(lsProps.intervals,JSON.stringify(payload))

    dispatch({type: SET_BOOST_INTERVALS,payload})
}

export const startActivationInterval = (currentBonus,id) => (dispatch,getState) => {

    const {intervals} = getState().boost
    let interval = setInterval(() => {
        const {activationStatus} = getState().boost
        currentBonus += 0.00000001;
        if (currentBonus >= maxStatus) {
            clearInterval(interval);
            delete intervals[id]
            dispatch(setActivationIntervals({intervals}))
            dispatch(setActivationStatus({
                ...activationStatus,
                [id]: maxStatus
            }))
        } else {
            dispatch(setActivationStatus({
                ...activationStatus,
                [id]: currentBonus.toFixed(8)
            }))
        }
    }, 100);
    dispatch(setActivationIntervals({...intervals,[id]: interval}))
}

export const activateBoost = (id) =>  (dispatch) => {
    let activationStatus = JSON.parse(localStorage.getItem(lsProps.activationStatus))
    let intervals = {...JSON.parse(localStorage.getItem(lsProps.intervals))}
    if(!activationStatus || !intervals) return;

    if (activationStatus[id] === maxStatus) {
        dispatch(setActivationStatus({
            ...activationStatus,
            [id]: 0
        }))
        return;
    }
    if (intervals[id]) return;
    let currentBonus = 0.00000001;
    dispatch(startActivationInterval(currentBonus,id))

};
