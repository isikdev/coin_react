import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import QuantumMain from '../components/QuantumPage/QuantumMain/QuantumMain'

function QuantumPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <QuantumMain />
        </>
    );
}

export default QuantumPage;