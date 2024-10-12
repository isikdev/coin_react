import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import CityMain from '../components/CityPage/CityMain/CityMain'

function CityPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <CityMain />
        </>
        );
}

export default CityPage;