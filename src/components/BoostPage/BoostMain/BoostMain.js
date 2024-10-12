import React from 'react';
import styles from './BoostMain.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {translations} from "../../../utils/translations";
import {activateBoost, maxStatus} from "../../../redux/action/boost";
import Lottie from "lottie-react";
import {flowerCoinAnim} from "../../../assets/lotties"

const { activateText, getText} = translations

function BoostMain() {
    const language = useSelector(state => state.translate.language)
    const dispatch = useDispatch()
    const activationStatus = useSelector(state => state.boost.activationStatus)
    const boostData = useSelector(state => state.boost.data)

    const onClickStatus = (e,id) => {
        e.target.classList.add(styles.boostMain__activationText_hidden)
        setTimeout(() => {
            dispatch(activateBoost(id))
            setTimeout(() => {
                e.target.classList.remove(styles.boostMain__activationText_hidden)
        },100)
        },800)
    }

    return (<div className={styles.boostMain}>
        <div className={styles.boostMain__activateBox}>
            <Lottie
                animationData={flowerCoinAnim}
                loop={true}
                className={styles['boostMain__logoAnim']}/>

            {boostData.map(({id, mainText, animation}) => {
                let activationStatusText = ""

                switch (activationStatus[id]) {
                    case 0: {
                        activationStatusText = activateText[language] + ' $CBDAI';
                        break;
                    }
                    case maxStatus: {
                        activationStatusText = (
                            <marquee>
                                <span className={styles['boostMain__marqueeText']}>{getText[language]} + {maxStatus}&nbsp;&nbsp;$CBDAI</span>
                            </marquee>
                        );
                        break;
                    }
                    default: {
                        activationStatusText = (
                            <span className={styles['boostMain__counter']}>
                                <span>+&nbsp;{activationStatus[id]}</span>&nbsp;$CBDAI
                                </span>
                        );
                        break;
                    }
                }

                return (<div key={id} className={styles.boostMain__activateDesk}>
                    <Lottie
                        animationData={animation}
                        loop={true}
                        className={styles['boostMain__activateDesk_anim']}/>
                    <div className={styles.boostMain__textBlock}>
                        <p className={styles.boostMain__title}>{mainText[language]}</p>
                        <div className={styles.boostMain__bonus}>
                            <div>
                                <button
                                    disabled={activationStatus[id] < maxStatus && activationStatus[id] > 0}
                                    onClick={(e) => onClickStatus(e,id)}
                                        className={`${styles.boostMain__activationText}`}>
                                    {activationStatusText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)
            })}
        </div>
    </div>);
}

export default BoostMain;
