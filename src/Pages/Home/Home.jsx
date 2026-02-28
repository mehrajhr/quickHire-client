import React from 'react';
import Hero from '../../Components/Hero';
import Companies from '../../Components/Companies';
import Categories from '../../Components/Categories';
import FeaturedJobs from '../../Components/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Companies></Companies>
            <Categories></Categories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;