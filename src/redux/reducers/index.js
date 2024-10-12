import {combineReducers} from "redux"
import {profileReducer} from "./profileReducer";
import {leagueReducer} from "./leagueAnimationReducer";
import {boostReducer} from "./boostReducer";
import {translateReducer} from "./translateReducer";

export default combineReducers({
    profile: profileReducer,
    league: leagueReducer,
    boost: boostReducer,
    translate: translateReducer,
})