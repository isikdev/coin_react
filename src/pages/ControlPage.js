import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import ControlMain from '../components/ControlPage/ControlMain/ControlMain'

function ControlPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <ControlMain />
        </>
        );
}

export default ControlPage;