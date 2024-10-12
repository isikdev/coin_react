import React, { useState } from 'react';
import styles from "./CarouselResponsive.module.scss";
import {useNavigate} from "react-router-dom"
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useDispatch, useSelector} from "react-redux";
import {setAnimation} from "../../../redux/action/animations";

import {setLanguage} from "../../../redux/action/translate";
import {languages} from "../../../utils/translations";
import {translations} from "../../../utils/translations";

import Lottie from "lottie-react";

import {
    user1Img,
    user2Img,
    user3Img,
    user4Img,
} from '../../../assets/images';

import { flowerCoinAnim } from "../../../assets/lotties"

import {
    bankPagePath,
    cityPagePath,
    teacherPagePath,
    controlPagePath,
} from "../../../router/path";
const {
    channelText,
    addFriendText,
    myFriendText,
    previousText,
    nextText,
    teacherText,
    controlText,
    bankText,
    cityText,
    } = translations

function CarouselResponsive() {

    const navigate = useNavigate();
    const navigateToTeacher = () => navigate(teacherPagePath);
    const navigateToControl = () => navigate(controlPagePath);
    const navigateToBank = () => navigate(bankPagePath);
    const navigateToCity = () => navigate(cityPagePath);

    //translation
    const language = useSelector(state => state.translate.language)
    const dispatch = useDispatch();

    const userChannel = [
        {
            userImg: user1Img,
            userAlt: "Du Rove's " + channelText[language],
            userName: "Du Rove's " + channelText[language],
            leagueIcon: 'teacher',
            leagueType:  teacherText[language],
            status: '9 690 779 099',
            onClick: navigateToTeacher
        },
        {
            userImg: user2Img,
            userAlt: "Mark's Channel",
            userName: "Mark's " + channelText[language],
            leagueIcon: 'control',
            leagueType: controlText[language],
            status: '7 40 79 458',
            onClick: navigateToControl
        },
        {
            userImg: user3Img,
            userAlt: "Edward's Channel",
            userName: "Edward's " + channelText[language],
            leagueIcon: 'bank',
            leagueType: bankText[language],
            status: '8 789 134 536',
            onClick: navigateToBank
        },
        {
            userImg: user4Img,
            userAlt: "Peter's Channel",
            userName: "Peter's " + channelText[language],
            leagueIcon: 'city',
            leagueType: cityText[language],
            status: '2 730 529 11',
            onClick: navigateToCity
        },
    ];

//Carousel
    const [friendStatus, setFriendStatus] = useState(Array(userChannel.length).fill(false));
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleFriend = (index) => {
        setFriendStatus((prevState) => {
            const updatedStatus = [...prevState];
        updatedStatus[index] = !updatedStatus[index];
        return updatedStatus;
    });
};

    const handleNextClick = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % userChannel.length);
    const handlePrevClick = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + userChannel.length) % userChannel.length);

    //League Animations
    const animations = useSelector((state) => state.league.animations);

return (
    <div className={styles.slide}>
        <Carousel
        emulateTouch
        autoPlay
        interval={3000}
        infiniteLoop
        transitionTime={600}
        selectedItem={currentIndex}
        onChange={setCurrentIndex}>

            {userChannel.map(({ userImg, userAlt, userName, leagueIcon, leagueType, status }, index) => (
            <div className={styles.carouselResponsive} key={index}>
                <img
                src={userImg}
                alt={userAlt}
                className={styles.carouselResponsive__avatar} />
                <h3 className={`caption ${styles.carouselResponsive__userName}`}>{userName}</h3>
                    <div className={styles.carouselResponsive__status} onClick={userChannel[index].onClick}>
                        <Lottie
                        animationData={animations[leagueIcon]}
                        loop={true}
                        className={styles.carouselResponsive__logoIcon} />
                        <span>{leagueType}</span>
                    </div>
                    <div className={styles.carouselResponsive__desk}>
                        <div className={styles.carouselResponsive__account}>
                            <Lottie
                            animationData={flowerCoinAnim}
                            loop={true}
                            className={styles.carouselResponsive__logoAnim} />
                            <span>{status} <strong>$CBDAI</strong></span>
                        </div>
                        <button
                        onClick={() => handleFriend(index)}
                        className={styles.carouselResponsive__blueBtn}>
                        {friendStatus[index] ? myFriendText[language] : addFriendText[language]}
                        </button>
                        <div className={styles.carouselResponsive__navBtnDesk}>
                            <button
                            onClick={handlePrevClick}
                            className={styles.carouselResponsive__navBtnDesk_btn}>{previousText[language]}</button>
                            <button
                            onClick={handleNextClick}
                            className={styles.carouselResponsive__navBtnDesk_btn}>{nextText[language]}</button>
                        </div>
                    </div>
                </div>
                ))}
        </Carousel>
    </div>
    );
}

export default CarouselResponsive;
