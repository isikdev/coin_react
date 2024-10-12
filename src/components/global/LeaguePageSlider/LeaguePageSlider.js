import React from 'react';
import styles from './LeaguePageSlider.module.scss';
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {translations} from "../../../utils/translations";
import LeagueStatus from '../../layout/LeagueStatus/LeagueStatus'
import Lottie from "lottie-react";
import Svg from "../../layout/Svg/Svg";
import {previousIcon, nextIcon} from "../../../assets/svg";

import {
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
    actualPagePath,
} from "../../../router/path";

const {
    electroText,
    bitchipText,
    blueTownText,
    motherText,
    quantumText,
    artText,
    arbitrationText,
    mainersText,
    securityText,
    bankText,
    cityText,
    teacherText,
    controlText,
    actualText
    } = translations

function LeaguePageSlider() {

    const language = useSelector(state => state.translate.language)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const navigateTo = (path) => navigate(path);

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

    const animations = useSelector((state) => state.league.animations);
    const leagueAnim = animations[pathname.replace('/', '')];

    const titles = {
        bronze: electroText[language],
        silver: bitchipText[language],
        platinum: blueTownText[language],
        golden: motherText[language],
        quantum: quantumText[language],
        art: artText[language],
        arbitration: arbitrationText[language],
        mainers: mainersText[language],
        security: securityText[language],
        bank: bankText[language],
        city: cityText[language],
        teacher: teacherText[language],
        control: controlText[language],
        actual: actualText[language],
    };

    const statuses = {
        bronze: '928 / 5К',
        silver: '180 / 410К',
        platinum: '290 / 268К',
        golden: '300 / 305К',
        quantum: '550 / 985К',
        art: '344 / 128К',
        arbitration: '5774 / 128К',
        mainers: '124 / 811К',
        security: '555 / 569К',
        bank: '139 / 489К',
        city: '5669 / 259К',
        teacher: '455 / 111К',
        control: '117 / 238К',
        actual: '569 / 655К',
    };

    const title = titles[pathname.replace('/', '')];
    const status = statuses[pathname.replace('/', '')];

    const pageNavigation = {
        bronze: { next: silverPagePath },
        silver: { previous: bronzePagePath, next: platinumPagePath },
        platinum: { previous: silverPagePath, next: goldenPagePath },
        golden: { previous: platinumPagePath, next: quantumPagePath },
        quantum: { previous: goldenPagePath, next: artPagePath },
        art: { previous: quantumPagePath, next: arbitrationPagePath },
        arbitration: { previous: artPagePath, next: mainersPagePath },
        mainers: { previous: arbitrationPagePath, next: securityPagePath },
        security: { previous: mainersPagePath, next: bankPagePath },
        bank: { previous: securityPagePath, next: cityPagePath },
        city: { previous: bankPagePath, next: teacherPagePath },
        teacher: { previous: cityPagePath, next: controlPagePath },
        control: { previous: teacherPagePath, next: actualPagePath },
        actual: { previous: controlPagePath},
    };

    return (
        <>
            <div className={styles['leaguePageSlider']}>
                <Lottie
                    animationData={leagueAnim}
                    className={styles['leaguePageSlider__leagueAnim']}
                    loop={true} />

                <h1 className={styles['leaguePageSlider__leagueType']}>{title}</h1>
                <span className={styles['leaguePageSlider__size']}>{status}</span>

                <button
                    className={styles['leaguePageSlider__slideBtn']}
                    onClick={() => navigate(pageNavigation[pathname.replace('/', '')].previous)}>
                    <Svg
                        id={previousIcon}
                        className={`${styles['leaguePageSlider__iconPrevious']} ${isBronze ? styles['leaguePageSlider__slidIconHidden'] : ''}`} />
                </button>

                <button
                    className={styles['leaguePageSlider__slideBtn']}
                    onClick={() => navigate(pageNavigation[pathname.replace('/', '')].next)}>
                    <Svg
                        id={nextIcon}
                        className={`${styles['leaguePageSlider__iconNext']} ${isActual ? styles['leaguePageSlider__slidIconHidden'] : ''}`} />
                </button>
                <LeagueStatus />
            </div>
        </>
    );
}

export default LeaguePageSlider;
