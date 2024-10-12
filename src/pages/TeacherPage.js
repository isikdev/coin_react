import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import
LeaguePageSlider from '../components/global/LeaguePageSlider/LeaguePageSlider'
import TeacherMain from '../components/TeacherPage/TeacherMain/TeacherMain'

function TeacherPage() {
    return (
        <>
            <FixedBalance />
            <LeaguePageSlider />
            <TeacherMain />
        </>
        );
}

export default TeacherPage;