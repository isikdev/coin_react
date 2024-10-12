import {SET_LANGUAGE} from "../types";
import {lsProps} from "../../utils/localStorage";

export const setLanguage = (lang) => (dispatch) => {
    const payload = lang || localStorage.getItem(lsProps.language)
    dispatch({type: SET_LANGUAGE,payload})
    if(lang) localStorage.setItem(lsProps.language,payload)
}