import React, { useState, useEffect } from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider';
import BronzeMain from '../components/BronzePage/BronzeMain/BronzeMain';

function BronzePage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <BronzeMain />
        </>
    );
}

export default BronzePage;
