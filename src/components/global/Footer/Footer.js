import React from 'react';
import styles from "./Footer.module.scss"
import {useLocation} from "react-router-dom";
import {homePagePath, boostPagePath} from "../../../router/path";
import EnergyStatus from "../../../components/layout/EnergyStatus/EnergyStatus"
import BottomMenu from "../BottomMenu/BottomMenu";


function Footer() {
    const { pathname } = useLocation();
    const isHome = pathname === homePagePath;
    const isBoost = pathname === boostPagePath;

    return (
        <>
            <div className={styles['footer']}>
            {(isHome || isBoost) && <EnergyStatus />}
                <BottomMenu />
            </div>
        </>
    );
}

export default Footer;