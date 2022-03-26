import React from 'react';
import Banner from './Banner';
import Footer from '../common/Footer';
import Header from '../common/Header';
import About from './About';
import AllCards from './AllCards';
import FeaturedCollections from './FeaturedCollections';
import TopCollection from './TopCollection';
import Speciality from './Speciality';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Speciality />
            <TopCollection />
            <FeaturedCollections />
            <About />
            <AllCards />
            <Footer />
        </div>
    );
};

export default Home;