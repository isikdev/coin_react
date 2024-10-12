import {Route, Routes, useLocation} from 'react-router-dom'
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEnergy, setValue} from "../../redux/action/profile";

import {
    actualPagePath,
    arbitrationPagePath,
    artPagePath,
    bankPagePath,
    boostPagePath,
    bronzePagePath,
    cityPagePath,
    controlPagePath,
    diamondPagePath,
    frensPagePath,
    goldenPagePath,
    homePagePath,
    mainersPagePath,
    platinumPagePath,
    quantumPagePath,
    securityPagePath,
    silverPagePath,
    teacherPagePath,
} from '../../router/path'

import HomePage from "../../pages/HomePage";
import FrensPage from "../../pages/FrensPage";
import BoostPage from "../../pages/BoostPage";
import BronzePage from "../../pages/BronzePage";
import SilverPage from "../../pages/SilverPage";
import GoldenPage from "../../pages/GoldenPage";
import PlatinumPage from "../../pages/PlatinumPage";
import DiamondPage from "../../pages/DiamondPage";
import QuantumPage from "../../pages/QuantumPage";
import ArtPage from "../../pages/ArtPage";
import ArbitrationPage from "../../pages/ArbitrationPage";
import MainersPage from "../../pages/MainersPage";
import SecurityPage from "../../pages/SecurityPage";
import BankPage from "../../pages/BankPage";
import CityPage from "../../pages/CityPage";
import TeacherPage from "../../pages/TeacherPage";
import ControlPage from "../../pages/ControlPage";
import ActualPage from "../../pages/ActualPage";

import Footer from "../global/Footer/Footer";
import {
    maxStatus,
    setActivationIntervals,
    setActivationStatus,
    startActivationInterval
} from "../../redux/action/boost";
import {setLanguage} from "../../redux/action/translate";
import {lsProps} from "../../utils/localStorage";

function App() {
    const {pathname} = useLocation()
    const isBoost = pathname === boostPagePath;

    const dispatch = useDispatch()
    const energy = useSelector(state => state.profile.energy)
    const boostData = useSelector(state => state.boost.data)
    const intervalRef = useRef(null)

    useEffect(() => {

        // boost activation
        const activationStatus = JSON.parse(localStorage.getItem(lsProps.activationStatus))
        const intervals = {...JSON.parse(localStorage.getItem(lsProps.intervals))}
        const initialStatus = {};
        if (!activationStatus) {
            boostData.forEach(({id}) => {
                initialStatus[id] = 0;
            });
            localStorage.setItem(lsProps.activationStatus, JSON.stringify(initialStatus))
        }
        if (!intervals) {
            localStorage.setItem(lsProps.intervals, {})
        }
        dispatch(setActivationStatus(activationStatus || initialStatus))
        dispatch(setActivationIntervals(intervals || {}))

        if (activationStatus) {
            Object.keys(activationStatus).forEach(key => {
                if (activationStatus[key] && activationStatus[key] !== maxStatus) {
                    dispatch(startActivationInterval(
                        +activationStatus[key],
                        key,
                    ))
                }
            })
        }


        // Translation
        const lang = localStorage.getItem(lsProps.language)
        if (lang) dispatch(setLanguage())


        // Profile
        const energy = localStorage.getItem(lsProps.energy)
        if (energy) dispatch(setEnergy(+energy, true))

        const balance = localStorage.getItem(lsProps.balance)
        if (balance) dispatch(setValue(+balance, true))



    }, []);

    useEffect(() => {
        if (energy !== 1000) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            intervalRef.current = setInterval(() => {
                dispatch(setEnergy(energy + 1))
            }, 1000)
        } else {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }, [energy]);

    //Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const menuColors = {
        [homePagePath]: 'blueLightBlue',
        [frensPagePath]: 'greenBlue',
        [boostPagePath]: 'blueAzure',
        [bronzePagePath]: 'electrcBlue',
        [silverPagePath]: 'silver',
        [goldenPagePath]: 'golden',
        [platinumPagePath]: 'platinum',
        [diamondPagePath]: 'diamond',
        [quantumPagePath]: 'goldBlack',
        [artPagePath]: 'pink',
        [arbitrationPagePath]: 'brown',
        [mainersPagePath]: 'purple',
        [securityPagePath]: 'turquoise',
        [bankPagePath]: 'platinumLight',
        [cityPagePath]: 'black',
        [teacherPagePath]: 'crimson',
        [controlPagePath]: 'copper',
        [actualPagePath]: 'bronze',
    };

    return (
        <>
            <div className={`container ${isBoost ? 'boostContainer' : ''} ${menuColors[pathname] || ""}`}>
                <div className="main">
                    <Routes>
                        <Route path={homePagePath} element={<HomePage/>}/>
                        <Route path={frensPagePath} element={<FrensPage/>}/>
                        <Route path={boostPagePath} element={<BoostPage/>}/>
                        <Route path={bronzePagePath} element={<BronzePage/>}/>
                        <Route path={silverPagePath} element={<SilverPage/>}/>
                        <Route path={goldenPagePath} element={<GoldenPage/>}/>
                        <Route path={platinumPagePath} element={<PlatinumPage/>}/>
                        <Route path={diamondPagePath} element={<DiamondPage/>}/>
                        <Route path={quantumPagePath} element={<QuantumPage/>}/>
                        <Route path={artPagePath} element={<ArtPage/>}/>
                        <Route path={arbitrationPagePath} element={<ArbitrationPage/>}/>
                        <Route path={mainersPagePath} element={<MainersPage/>}/>
                        <Route path={securityPagePath} element={<SecurityPage/>}/>
                        <Route path={bankPagePath} element={<BankPage/>}/>
                        <Route path={cityPagePath} element={<CityPage/>}/>
                        <Route path={teacherPagePath} element={<TeacherPage/>}/>
                        <Route path={controlPagePath} element={<ControlPage/>}/>
                        <Route path={actualPagePath} element={<ActualPage/>}/>
                        <Route path={"*"} element={<HomePage/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;
