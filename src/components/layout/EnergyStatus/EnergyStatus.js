import React, { useState } from 'react';
import styles from "./EnergyStatus.module.scss"
import {useSelector} from "react-redux";
import Lottie from "lottie-react";

import { energyAnim } from "../../../assets/lotties"

function EnergyStatus() {
    const energy = useSelector(state => state.profile.energy)

    const [energyBalance, setEnergyBalance] = useState(1000);
    const [energySliderBalance, setEnergySliderBalance] = useState('100%');

    const balancePercent = energy*100/1000

    const handleFullEnergy = () => {
        setEnergySliderBalance(prevIncrement => prevIncrement - 10);
    };

     return (
        <>
            <div className={styles['energyStatus']}>
                <div className={styles['energyStatus__countBox']}>
                  <Lottie
                        animationData={energyAnim}
                        className={styles['energyStatus__energyAnim']}
                        loop={true}/>
                    <span className={styles['energyStatus__energyDigit']}>{energy}</span>
                </div>

                <div className={styles['energyStatus__statusBox']}>
                    <div style={{width: `${balancePercent}%`}} className={styles['energyStatus__statusPointer']}>{balancePercent}%</div>
                </div>
            </div>
        </>
    );
}

export default EnergyStatus;