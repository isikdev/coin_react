import React, { useState, useEffect, useRef } from 'react';
import styles from './FixedBalance.module.scss';
import {useLocation, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from "../../../redux/action/translate";
import {languages} from "../../../utils/translations";
import {translations} from "../../../utils/translations";
import Languages from '../Languages/Languages';
import {setAnimation} from "../../../redux/action/animations";

import Lottie from 'lottie-react';
import Svg from "../../layout/Svg/Svg"
import {nextIcon} from "../../../assets/svg"

import {
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
    actualPagePath,
} from '../../../router/path';

import {flowerCoinAnim, mainersAnim} from '../../../assets/lotties';
const { placeText, mainersText } = translations

function FixedBalance() {
    const language = useSelector(state => state.translate.language)
    const dispatch = useDispatch();
    const value = useSelector((state) => state.profile.value);
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const navigateToControl = () => navigate(controlPagePath);

    const animations = useSelector((state) => state.league.animations);
    const mainersAnimation = animations.mainers;

    const balanceDesk = {
        [frensPagePath]: 'frensDesk',
        [boostPagePath]: 'boostDesk',
        [bronzePagePath]: 'electricBlueDesk',
        [silverPagePath]: 'silverDesk',
        [goldenPagePath]: 'goldenDesk',
        [platinumPagePath]: 'platinumDesk',
        [diamondPagePath]: 'diamondDesk',
        [quantumPagePath]: 'quantumDesk',
        [artPagePath]: 'artDesk',
        [arbitrationPagePath]: 'arbitrationDesk',
        [mainersPagePath]: 'mainersDesk',
        [securityPagePath]: 'securityDesk',
        [bankPagePath]: 'bankDesk',
        [cityPagePath]: 'cityDesk',
        [teacherPagePath]: 'teacherDesk',
        [controlPagePath]: 'controlDesk',
        [actualPagePath]: 'actualDesk',
};

    //Slide
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(intervalRef.current);
    }, []);


    const slideData = [
        {
            animationData: flowerCoinAnim,
            content: <>{value}</>,
            animClass: styles.fixedBalance__balanceAnim
        },
        {
            animationData: null,
            content: <span className={styles['fixedBalance__place']}><strong>127, 456</strong>&nbsp;{placeText[language]}</span>
        },
        {
            animationData: mainersAnimation,
            content: (
            <>
                <span className={styles['fixedBalance__leagueName']}>{mainersText[language]}</span>
                <button onClick={navigateToControl}>
                    <Svg id={nextIcon} className={styles['fixedBalance__iconNext']} />
                </button>
            </>
            ),
            animClass: styles['fixedBalance__leagueAnim']
    }
];

    return (
        <div className={`${styles['fixedBalance']} ${styles[balanceDesk[pathname]] || ""}`}>
        {slideData.map((item, index) => (
            <div
                key={index}
                className={`${styles['fixedBalance__slideDesk']} ${activeIndex === index ? styles['fixedBalance__slideDesk_active'] : ''}`}>

                <div className={styles['fixedBalance__slideBox']}>
                {item.animationData && (
                  <Lottie
                    animationData={item.animationData}
                    loop={true}
                    className={item.animClass} />
                )}
                {item.content}
             </div>

            </div>
            ))}
            <Languages />
        </div>
    );
}

export default FixedBalance;