import React from 'react';
import styles from "./UserInfoBlock.module.scss"

import {useLocation, useNavigate} from "react-router-dom"
import {frensPagePath, teacherPagePath  } from "../../../router/path"
import {useDispatch, useSelector} from "react-redux";
import {setAnimation} from "../../../redux/action/animations";
import {translations} from "../../../utils/translations";
import {homePagePath, boostPagePath} from '../../../router/path';
import Languages from '../../layout/Languages/Languages';

import Lottie from "lottie-react";
import { user1Img } from "../../../assets/images";
import { flowerCoinAnim } from "../../../assets/lotties"

const { channelText, teacherText} = translations

function UserInfoBlock() {
    const language = useSelector(state => state.translate.language)
    const dispatch = useDispatch();
    const value = useSelector(state => state.profile.value)

    const navigate = useNavigate()
    const navigateToFrens = () => navigate(frensPagePath)
    const navigateToTeacher = () => navigate(teacherPagePath)

    const {pathname} = useLocation()
    const isHome = pathname === homePagePath;

    const handleAnimationChange = (name, animation) => {
        dispatch(setAnimation(name, animation));
    };
    const animations = useSelector((state) => state.league.animations);
    const teacherAnimation = animations.teacher;

    return (
        <>
            <div className={styles['userInfoBlock']}>
                <img
                    src={user1Img}
                    className={styles['userInfoBlock__avatar']}
                    onClick={navigateToFrens}
                    alt="User" />
                <div>
                    <h3
                        className={styles['userInfoBlock__userName']}
                        onClick={navigateToFrens}>Du Rove's {channelText[language]}
                    </h3>
                    <div className={styles['userInfoBlock__rank']}>
                        <div className={styles['userInfoBlock__rankPosition']}>
                         <Lottie
                                animationData={teacherAnimation}
                                loop={true}
                                onClick={navigateToTeacher}
                                className={styles['userInfoBlock__rankPosition_rankAnim']} />
                            <span onClick={navigateToTeacher}>{teacherText[language]}</span>
                        </div>

                        <div className={styles['userInfoBlock__rankPosition']}>
                         <Lottie
                                animationData={flowerCoinAnim}
                                loop={true}
                                className={styles['userInfoBlock__rankPosition_logoAnim']}/>
                            <span>{value}</span>
                        </div>
                    </div>
                </div>

                {isHome ?
                 <Languages />
                : null}

            </div>
        </>
    );
}

export default UserInfoBlock;