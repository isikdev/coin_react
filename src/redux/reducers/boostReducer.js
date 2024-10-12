import {SET_BOOST_DATA, SET_BOOST_INTERVALS, SET_BOOST_STATUS} from "../types";
import {translations} from "../../utils/translations";
import Lottie from "lottie-react";
import {boostAnim, harvestAnim, flowerCoinAnim} from "../../assets/lotties"

const { harvestText, superupText } = translations

const initialState = {
    data: [
        /*   {
         id: 1,
         mainText: 'INVITE +',
         bonus: '+ 100 000',
         img: inviteImg,
         activateText: 'Активировать',
         },
         {
         id: 2,
         mainText: 'GROW 1 st Quarter',
         activateText: 'Активировать',
         img: growImg,
         },*/
        {
            id: 3,
            mainText: harvestText,
            animation: harvestAnim,
        },
        {
            id: 4,
            mainText: superupText,
            animation: boostAnim,
        },
        {
            id: 5,
            mainText: harvestText,
            animation: harvestAnim,
        },
        {
            id: 6,
            mainText: superupText,
            animation: boostAnim,
        },
        {
            id: 7,
            mainText: harvestText,
            animation: harvestAnim,
        },
        {
            id: 8,
            mainText: superupText,
            animation: boostAnim,
        },
    ],
    activationStatus: {},
    intervals: {},
};

export const boostReducer = (state = initialState, action) => {
    const {type,payload} = action
    switch (type) {
        case SET_BOOST_DATA:
            return {
                ...state,
                data: payload,
            };
        case SET_BOOST_STATUS:
            return {
                ...state,
                activationStatus: payload,
            };
        case SET_BOOST_INTERVALS:
            return {
                ...state,
                intervals: payload,
            };
        default:
            return state;
    }
};


