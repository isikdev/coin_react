import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import PlatinumMain from '../components/PlatinumPage/PlatinumMain/PlatinumMain'

function PlatinumPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <PlatinumMain />
        </>
    );
}

export default PlatinumPage;