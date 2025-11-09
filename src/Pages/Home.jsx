import React from 'react';
import Banner from '../Component/Home/Banner';
import FeaturedArtworks from '../Component/Home/Feauters';
import TopArtists from '../Component/Home/TopArtists';
import CommunityHighlights from '../Component/Home/CommunityHighlights';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <FeaturedArtworks></FeaturedArtworks>
            </div>
            <div className='mt-10'>
                <TopArtists></TopArtists>
            </div>
            <div className='mt-15'>
                <CommunityHighlights></CommunityHighlights>
            </div>
        </div>
    );
};

export default Home;