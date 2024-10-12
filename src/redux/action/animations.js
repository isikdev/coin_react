import {SET_ANIMATION} from "../types";

//export const setAnimation = (payload) => (dispatch) => dispatch({type: SET_ANIMATION,payload})

export const setAnimation = (name, animation) => ({
    type: SET_ANIMATION,
    payload: { name, animation },
});

