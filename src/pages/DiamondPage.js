import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import DiamondMain from '../components/DiamondPage/DiamondMain/DiamondMain'

function DiamondPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <DiamondMain />
        </>
    );
}

export default DiamondPage;