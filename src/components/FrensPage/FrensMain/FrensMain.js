import React, {useState} from 'react';
import styles from "./FrensMain.module.scss"
import CarouselResponsive from '../../global/CarouselResponsive/CarouselResponsive'
import UsersTabs from '../../global/UsersTabs/UsersTabs'

function FrensMain() {
    return (
        <>
            <CarouselResponsive />
            <UsersTabs />
        </>
    );
}

export default FrensMain;