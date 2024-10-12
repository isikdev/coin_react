import React from 'react';
import FixedBalance from '../components/layout/FixedBalance/FixedBalance';
import UserInfoBlock from '../components/global/UserInfoBlock/UserInfoBlock'
import BoostHeader from '../components/BoostPage/BoostHeader/BoostHeader'
import BoostMain from '../components/BoostPage/BoostMain/BoostMain'

function BoostPage() {
    return (
        <>
            <FixedBalance />
            <div className="fixedHeader">
                <div className="fixedHeaderBig">
                    <UserInfoBlock />
                    <BoostHeader />
                </div>
            </div>
            <BoostMain />
        </>
    );
}

export default BoostPage;