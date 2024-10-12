import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import ActualMain from '../components/ActualPage/ActualMain/ActualMain'

function ActualPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <ActualMain />
        </>
    );
}

export default ActualPage;