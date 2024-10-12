import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import SecurityMain from '../components/SecurityPage/SecurityMain/SecurityMain'

function DiamondPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <SecurityMain />
        </>
        );
}

export default DiamondPage;