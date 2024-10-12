import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import MainersMain from '../components/MainersPage/MainersMain/MainersMain'

function MainersPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <MainersMain />
        </>
        );
}

export default MainersPage;