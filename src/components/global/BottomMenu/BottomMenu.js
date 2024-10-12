import styles from './BottomMenu.module.scss';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {translations} from "../../../utils/translations";

import Lottie from "lottie-react";

import {
    homePagePath,
    frensPagePath,
    boostPagePath,
    bronzePagePath,
    silverPagePath,
    goldenPagePath,
    platinumPagePath,
    diamondPagePath,
    quantumPagePath,
    artPagePath,
    arbitrationPagePath,
    mainersPagePath,
    securityPagePath,
    bankPagePath,
    cityPagePath,
    teacherPagePath,
    controlPagePath,
    actualPagePath
} from "../../../router/path";

import {flowerCoinAnim} from "../../../assets/lotties"

const {frensText, boostText, leagueText} = translations

function BottomMenu() {

    const language = useSelector(state => state.translate.language)
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const isHome = pathname === homePagePath;
    const isFrens = pathname === frensPagePath;
    const isBoost = pathname === boostPagePath;
    const isBronze = pathname === bronzePagePath;
    const isSilver = pathname === silverPagePath;
    const isGolden = pathname === goldenPagePath;
    const isPlatinum = pathname === platinumPagePath;
    const isDiamond = pathname === diamondPagePath;
    const isQuantum = pathname === quantumPagePath;
    const isArt = pathname === artPagePath;
    const isArbitration = pathname === arbitrationPagePath;
    const isMainers = pathname === mainersPagePath;
    const isSecurity = pathname === securityPagePath;
    const isBank = pathname === bankPagePath;
    const isCity = pathname === cityPagePath;
    const isTeacher = pathname === teacherPagePath;
    const isControl = pathname === controlPagePath;
    const isActual = pathname === actualPagePath;

    const menuDesk = {
        [homePagePath]: 'menuLightDesk',
        [frensPagePath]: 'btnAAXADarkBlue',
        [boostPagePath]: 'menuLightDesk',
        [bronzePagePath]: 'menuElectroDesk',
        [silverPagePath]: 'menuSilverDesk',
        [goldenPagePath]: 'menuGoldenDesk',
        [platinumPagePath]: 'menuPlatinumDesk',
        [diamondPagePath]: 'menuDiamondDesk',
        [quantumPagePath]: 'menuQuantumDesk',
        [artPagePath]: 'menuArtDesk',
        [arbitrationPagePath]: 'menuArbitrationDesk',
        [mainersPagePath]: 'menuMainersDesk',
        [securityPagePath]: 'menuSecurityDesk',
        [bankPagePath]: 'menuBankDesk',
        [cityPagePath]: 'menuCityDesk',
        [teacherPagePath]: 'menuTeacherDesk',
        [controlPagePath]: 'menuControlDesk',
        [actualPagePath]: 'menuActualDesk',
};

    const btnAAXAColor = {
        [homePagePath]: 'btnAAXALightBlue',
        [boostPagePath]: 'btnAAXALightBlue',
        [bronzePagePath]: 'btnAAXAElectro',
        [silverPagePath]: 'btnAAXASilver',
        [goldenPagePath]: 'btnAAXAGolden',
        [platinumPagePath]: 'btnAAXAPlatinum',
        [diamondPagePath]: 'btnAAXADiamond',
        [quantumPagePath]: 'btnAAXAQuantum',
        [artPagePath]: 'btnAAXAArt',
        [arbitrationPagePath]: 'btnAAXAArbitration',
        [mainersPagePath]: 'btnAAXAMainers',
        [securityPagePath]: 'btnAAXASecurity',
        [bankPagePath]: 'btnAAXABank',
        [cityPagePath]: 'btnAAXACity',
        [teacherPagePath]: 'btnAAXATeacher',
        [controlPagePath]: 'btnAAXAControl',
        [actualPagePath]: 'btnAAXAActual',
    };

    return (
        <div className={`${styles['bottomMenu']} ${styles[menuDesk[pathname]] || ""}`}>
            <button
                className={`${isHome ? styles['bottomMenu__btnAAXAHome'] : (isFrens ? styles['bottomMenu__btnAAXABlue'] : (isBoost ? styles['bottomMenu__btnAAXAlight'] : styles['bottomMenu__btnAAXAlightMain']))} ${styles[btnAAXAColor[pathname]] || ""}`}

                onClick={() => navigate(homePagePath)}>
             {!isFrens &&
                <Lottie
                    animationData={flowerCoinAnim}
                    loop={true}
                    className={styles['bottomMenu__btnAAXAlightMain_logoAnim']} />
            }
                <span>$CBDAI</span>
            </button>

            <button
                className={`${styles['bottomMenu__btn']} ${isFrens ? styles['bottomMenu__btn_blueActive'] : isBoost ? styles['bottomMenu__btnLightBlue'] : ""}`}

                onClick={!isFrens ? () => navigate(frensPagePath) : null}>{frensText[language]}
            </button>

            <button
                className={`${styles['bottomMenu__btn']} ${isBoost ? styles['bottomMenu__btnLightBlueActive'] : ""}`}
                onClick={!isBoost ? () => navigate(boostPagePath) : null}>{boostText[language]}
            </button>

            <button
                className={`${styles['bottomMenu__btn']} ${[isBronze, isSilver, isGolden, isPlatinum, isDiamond, isQuantum, isArt, isArbitration, isMainers, isSecurity, isBank, isCity, isTeacher, isControl, isActual].includes(true) ? styles['bottomMenu__btn_active'] : ""}`}
                onClick={!isBronze ? () => navigate(bronzePagePath) : null}>
            {leagueText[language]}
            </button>
        </div>
    );
}

export default BottomMenu;