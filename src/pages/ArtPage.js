import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import ArtMain from '../components/ArtPage/ArtMain/ArtMain'

function ArtPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <ArtMain />
        </>
    );
}

export default ArtPage;