import React, { useState} from 'react';
import styles from './HomeMain.module.scss'
import {useNavigate} from "react-router-dom"
import {mainersPagePath} from "../../../router/path"
import {useDispatch, useSelector} from "react-redux";
import {setEnergy, setValue} from "../../../redux/action/profile";
import {translations} from "../../../utils/translations";
import Lottie from "lottie-react";
import Svg from "../../layout/Svg/Svg"
import {nextIcon} from "../../../assets/svg"

import {flowerCoinAnim} from "../../../assets/lotties"

const {placeText, mainersText} = translations

function HomeMain() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const language = useSelector(state => state.translate.language)
    const value = useSelector(state => state.profile.value)
    const energy = useSelector(state => state.profile.energy)
    const [clicks, setClicks] = useState([])

    const navigateToMainers = () => navigate(mainersPagePath);

    const handleLogoClick = (e) => {
        e.preventDefault()
        if (energy > 0) {
            setClicks(prevState => [...prevState, 1])
            dispatch(setValue(value + 1))
            dispatch(setEnergy(energy - 1))
        }
    };

    const animations = useSelector((state) => state.league.animations);
    const mainersAnimation = animations.mainers;

    return (
        <>
            <div className={styles['homeMain']}>
                <div className={styles['homeMain__contentBlock']}>
                    <div className={styles['homeMain__accountBox']}>
                        <Lottie
                            animationData={flowerCoinAnim}
                            loop={true}
                            className={styles['homeMain__logoSmall']}/>
                        <span className={styles['homeMain__account']}>{value}</span>
                    </div>
                    <p className={styles['homeMain__place']}><strong>127, 456</strong>&nbsp;{placeText[language]}
                    </p>
                    <div
                        className={styles['homeMain__status']}
                        onClick={navigateToMainers}>
                        <Lottie
                            animationData={mainersAnimation}
                            loop={true}
                            className={styles['homeMain__leagueAnim']}/>
                        <span
                            className={styles['homeMain__leagueName']}>{mainersText[language]}
                        </span>
                        <button
                            className={styles['homeMain__slideBtn']}>
                            <Svg
                                id={nextIcon}
                                className={styles['homeMain__iconNext']}/>
                        </button>
                    </div>

                    <div className={styles['homeMain__logoBig']} >
                        {clicks.map((_, index) => (
                            <span key={index} className={styles['homeMain__counter']}></span>
                        ))
                        }

                        <Lottie
                            animationData={flowerCoinAnim}
                            loop={true}
                            onClick={handleLogoClick}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeMain