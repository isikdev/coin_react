import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import ArbitrationMain from '../components/ArbitrationPage/ArbitrationMain/ArbitrationMain'

function ArbitrationPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <ArbitrationMain />
        </>
        );
}

export default ArbitrationPage;