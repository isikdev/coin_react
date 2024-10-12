import React, { useState, useRef } from 'react';
import styles from "./UsersTabs.module.scss";
import {useLocation, useNavigate} from 'react-router-dom';
import UsersTabsUserData from "./UsersTabsUserData/UsersTabsUserData";
import {useDispatch, useSelector} from "react-redux";
import {translations} from "../../../utils/translations";

import {
    frensPagePath,
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

import { flowerCoinAnim, avatarAnim } from "../../../assets/lotties";

const { playersText, friendsText} = translations

function UsersTabs() {

    //translations
    const language = useSelector(state => state.translate.language)
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const navigateToFrens = () => navigate(frensPagePath);

    const isFrens = pathname === frensPagePath;
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

    const usersTabsColors = {
        [frensPagePath]: 'blueBox',
        [bronzePagePath]: 'electicBlueBox',
        [silverPagePath]: 'silverBox',
        [goldenPagePath]: 'goldenBox',
        [platinumPagePath]: 'platinumBox',
        [diamondPagePath]: 'diamondBox',
        [quantumPagePath]: 'quantumBox',
        [artPagePath]: 'artBox',
        [arbitrationPagePath]: 'arbitrationBox',
        [mainersPagePath]: 'mainersBox',
        [securityPagePath]: 'securityBox',
        [bankPagePath]: 'bankBox',
        [cityPagePath]: 'cityBox',
        [teacherPagePath]: 'teacherBox',
        [controlPagePath]: 'controlBox',
        [actualPagePath]: 'actualBox',
};

    const [activeTab, setActiveTab] = useState(0);
    const [startX, setStartX] = useState(null);
    const tabsRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const difference = startX - e.changedTouches[0].clientX;
        if (Math.abs(difference) > 30) {
            if (difference > 0 && activeTab < tabs.length - 1) {
                setActiveTab(activeTab + 1);
            } else if (difference < 0 && activeTab > 0) {
                setActiveTab(activeTab - 1);
            }
        }
        setStartX(null);
    };

    const playersFrens = [
    {
        medal: '🥇',
        avatarImg: avatarAnim,
        userName: 'Albert',
        rewardIcon: flowerCoinAnim,
        account: '35,230,929'
    },
    {
        medal: '🥈',
        avatarImg: avatarAnim,
        userName: 'Frank',
        rewardIcon: flowerCoinAnim,
        account: '25,200,429'
    },
    {
        medal: '🥉',
        avatarImg: avatarAnim,
        userName: 'Kevin',
        rewardIcon: flowerCoinAnim,
        account: '15,130,129'
    },
    {
        medal: '45 M',
        avatarImg: avatarAnim,
        userName: 'Sam',
        rewardIcon: flowerCoinAnim,
        account: '18,230,129'
    },
    {
        medal: '193 K',
        avatarImg: avatarAnim,
        userName: 'Mark',
        rewardIcon: flowerCoinAnim,
        account: '105,630,929'
    }
];

const friendsFrens = [
    {
        medal: '🥇',
        avatarImg: avatarAnim,
        userName: 'Joseph',
        rewardIcon: flowerCoinAnim,
        account: '35,230,929'
    },
    {
        medal: '🥈',
        avatarImg: avatarAnim,
        userName: 'George',
        rewardIcon: flowerCoinAnim,
        account: '25,200,429'
    },
    {
        medal: '🥉',
        avatarImg: avatarAnim,
        userName: 'Paul',
        rewardIcon: flowerCoinAnim,
        account: '15,130,129'
    },
    {
        medal: '🥇',
        avatarImg: avatarAnim,
        userName: 'Anthony',
        rewardIcon: flowerCoinAnim,
        account: '18,230,129'
    },
    {
        medal: '86 K',
        avatarImg: avatarAnim,
        userName: 'Steven',
        rewardIcon: flowerCoinAnim,
        account: '105,630,929'
    }
];

const playersLeague = [
    {
        medal: '🥇',
        avatarImg: avatarAnim,
        userName: 'Michael',
        rewardIcon: flowerCoinAnim,
        account: '35,230,929'
    },
    {
        medal: '🥈',
        avatarImg: avatarAnim,
        userName: 'Daniel',
        rewardIcon: flowerCoinAnim,
        account: '25,200,429'
    },
    {
        medal: '🥉',
        avatarImg: avatarAnim,
        userName: 'James',
        rewardIcon: flowerCoinAnim,
        account: '15,130,129'
    },
    {
        medal: '4 M',
        avatarImg: avatarAnim,
        userName: 'Robert',
        rewardIcon: flowerCoinAnim,
        account: '18,230,129'
    },
    {
        medal: '567 K',
        avatarImg: avatarAnim,
        userName: 'William',
        rewardIcon: flowerCoinAnim,
        account: '105,630,929'
    }
];

    const friendsLeague = [
    {
        medal: '🥇',
        avatarImg: avatarAnim,
        userName: 'Brian',
        rewardIcon: flowerCoinAnim,
        account: '35,230,929'
    },
    {
        medal: '🥈',
        avatarImg: avatarAnim,
        userName: 'Alexander',
        rewardIcon: flowerCoinAnim,
        account: '25,200,429'
    },
    {
        medal: '🥉',
        avatarImg: avatarAnim,
        userName: 'Henry',
        rewardIcon: flowerCoinAnim,
        account: '15,130,129'
    },
    {
        medal: '68 M',
        avatarImg: avatarAnim,
        userName: 'Charles',
        rewardIcon: flowerCoinAnim,
        account: '18,230,129'
    },
    {
        medal: '841 K',
        avatarImg: avatarAnim,
        userName: 'Jack',
        rewardIcon: flowerCoinAnim,
        account: '105,630,929'
    }
];

    const tabs = [
        { label: playersText[language]},
        { label: friendsText[language]},
    ];

    const tabsData = activeTab === 0 ? (isFrens ? playersFrens : playersLeague) : (isFrens ? friendsFrens : friendsLeague);

    return (
        <div
            className={styles['usersTabs']}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            <div
                ref={tabsRef}
                className={`${styles['usersTabs__tabs']} ${styles[usersTabsColors[pathname] || ""]}`}>
                <div className={styles['usersTabs__tabBtn']}>
                    {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        onClick={() => handleTabClick(index)}
                        className={`${styles['usersTabs__btn']} ${activeTab === index ? styles.usersTabs__btn_active : ''}`}>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>
                <UsersTabsUserData data={tabsData} />
            </div>
        </div>
    </div>
);
}

export default UsersTabs;