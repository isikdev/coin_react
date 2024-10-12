import React from 'react';
import UserInfoBlock from '../components/global/UserInfoBlock/UserInfoBlock'
import HomeMain from "../components/HomePage/HomeMain/HomeMain"

function HomePage() {

    return (
        <>
            <div className="fixedHeader">
                <div className="fixedHeaderSmall">
                    <UserInfoBlock />
                </div>
            </div>
            <HomeMain />
        </>
    );
}

export default HomePage;