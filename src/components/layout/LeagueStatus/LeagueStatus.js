import React from 'react';
import styles from "./LeagueStatus.module.scss"

import {useLocation} from 'react-router-dom'
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
} from "../../../router/path"

function LeagueStatus() {

    const {pathname} = useLocation()

    const statusBox = {
        [bronzePagePath] : 'statusBoxElectro',
        [silverPagePath] : 'statusBoxSilver',
        [goldenPagePath] : 'statusBoxGolden',
        [platinumPagePath] : 'statusBoxPlatinum',
        [diamondPagePath] : 'statusBoxDiamond',
        [quantumPagePath] : 'statusBoxQuantum',
        [artPagePath] : 'statusBoxArt',
        [arbitrationPagePath] : 'statusBoxArbitration',
        [mainersPagePath] : 'statusBoxMainers',
        [securityPagePath] : 'statusBoxSecurity',
        [bankPagePath] : 'statusBoxBank',
        [cityPagePath] : 'statusBoxCity',
        [teacherPagePath] : 'statusBoxTeacher',
        [controlPagePath] : 'statusBoxControl',
        [actualPagePath] : 'statusBoxActual',

}
    const statusPointer = {
        [bronzePagePath] : 'statusPointerElectro',
        [silverPagePath] : 'statusPointerSilver',
        [goldenPagePath] : 'statusPointerGolden',
        [platinumPagePath] : 'statusPointerPlatinum',
        [diamondPagePath] : 'statusPointerDiamond',
        [quantumPagePath] : 'statusPointerQuantum',
        [artPagePath] : 'statusPointerArt',
        [arbitrationPagePath] : 'statusPointerArbitration',
        [mainersPagePath] : 'statusPointerMainers',
        [securityPagePath] : 'statusPointerSecurity',
        [bankPagePath] : 'statusPointerBank',
        [cityPagePath] : 'statusPointerCity',
        [teacherPagePath] : 'statusPointerTeacher',
        [controlPagePath] : 'statusPointerControl',
        [actualPagePath] : 'statusPointerActual',
    }

    return (
        <>
            <div className={styles['leagueStatus']}>
                <div className={`${styles['leagueStatus__statusBox']} ${styles[statusBox[pathname]] || ""}`}>
                    <div className={`${styles['leagueStatus__statusPointer']} ${styles[statusPointer[pathname]] || ""}`}>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeagueStatus;