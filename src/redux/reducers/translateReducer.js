import {boostAnim, harvestAnim} from "../../assets/lotties";
import {SET_BOOST_DATA, SET_BOOST_INTERVALS, SET_BOOST_STATUS, SET_LANGUAGE} from "../types";

const initialState = {
    language: "en"
};

export const translateReducer = (state = initialState, action) => {
    const {type,payload} = action
    switch (type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: payload,
            };
        default:
            return state;
    }
};


