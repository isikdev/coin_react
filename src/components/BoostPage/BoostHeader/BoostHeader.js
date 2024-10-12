import React, {useState} from 'react';
import styles from './BoostHeader.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setEnergy, setFullEnergy} from "../../../redux/action/profile";
import {translations} from "../../../utils/translations";
import Svg from '../../layout/Svg/Svg';
import {energyIcon, turboIcon} from '../../../assets/svg';
import Lottie from "lottie-react";

import {fireworks1Anim, fireworks2Anim} from "../../../assets/lotties"

const {
    turboText,
    fullEnergyText,
    availableText,
    } = translations

function BoostHeader() {

    //translations
    const language = useSelector(state => state.translate.language)
    const dispatch = useDispatch()
    const fullEnergy = useSelector(state => state.profile.fullEnergy)
    const energy = useSelector(state => state.profile.energy)

    let fullEnergy1 = fullEnergy <= 3 ? fullEnergy : fullEnergy - 1
    let fullEnergy2 = fullEnergy <= 3 ? 3 : fullEnergy

    const onFull = () => {
        dispatch(setEnergy(1000))
        dispatch(setFullEnergy(fullEnergy + 1))
    }

    const [isTurboAnimating, setIsTurboAnimating] = useState(false);
    const [isEnergyAnimating, setIsEnergyAnimating] = useState(false);

    const handleTurboAnimating = () => {
        setIsTurboAnimating(true);
    };

    const handleEnergyAnimating = () => {
        setIsEnergyAnimating(true);
    };
    return (
        <>
            <div className={styles['boostHeader']}>
                <div className={styles['boostHeader__statusBlock']}>
                    <button
                        className={`${styles['boostHeader__statusBtn']} ${styles['boostHeader__narrow']}`}
                        onClick={() => {
                        if(energy !== 1000) onFull();
                        handleTurboAnimating();
                        }}>

                        <span className={styles['boostHeader__type']}>{turboText[language]}</span>
                        <span className={styles['boostHeader__available']}>{fullEnergy1}/{fullEnergy2} {availableText[language]}</span>
                        <Svg id={turboIcon} className={styles['boostHeader__statusIcon']}/>

                        {isTurboAnimating && (
                            <Lottie
                            animationData={fireworks1Anim}
                    loop={false}
                    className={styles['boostHeader__fireworks1Anim']}
                    onComplete={() => setIsTurboAnimating(false)}/>
                    )}

                    </button>

                    <button
                        className={`${styles['boostHeader__statusBtn']} ${styles['boostHeader__wide']}`}
                        onClick={() => {
                        if(energy !== 1000) onFull();
                        handleEnergyAnimating();
                        }}>
                        <span className={styles['boostHeader__type']}>{fullEnergyText[language]}</span>
                        <span className={styles['boostHeader__available']}>{fullEnergy1}/{fullEnergy2} {availableText[language]}</span>
                        <Svg id={energyIcon} className={styles['boostHeader__statusIcon']}/>

                        {isEnergyAnimating && (
                            <Lottie
                            animationData={fireworks2Anim}
                    loop={false}
                    className={styles['boostHeader__fireworks2Anim']}
                    onComplete={() => setIsEnergyAnimating(false)}/>
                    )}
                    </button>
                </div>
            </div>
        </>
    );
}

export default BoostHeader;