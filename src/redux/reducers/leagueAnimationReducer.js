
import { SET_ANIMATION } from "../types";
import {
    bronzeAnim,
    silverAnim,
    goldenAnim,
    platinumAnim,
    quantumAnim,
    artAnim,
    arbitrationAnim,
    mainersAnim,
    securityAnim,
    bankAnim,
    cityAnim,
    teacherAnim,
    controlAnim,
    actualAnim,

} from "../../assets/lotties";

const initialState = {
    animations: {
    bronze: bronzeAnim,
    silver: silverAnim,
    golden: goldenAnim,
    platinum: platinumAnim,
    quantum: quantumAnim,
    art: artAnim,
    arbitration: arbitrationAnim,
    mainers: mainersAnim,
    security: securityAnim,
    bank: bankAnim,
    city: cityAnim,
    teacher: teacherAnim,
    control: controlAnim,
    actual: actualAnim,
    },
};

export const leagueReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANIMATION:
            return {
                ...state,
                animations: {
        ...state.animations,
                [action.payload.name]: action.payload.animation,
        },
    };
default:
    return state;
}
};
