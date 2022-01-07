import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AllNews from '../AllNews/AllNews';
import ProgrammingBlog from '../Blogs/ProgrammingBlog';
import Careers from '../Careers/Careers';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ProgrammingBlog />
            <Careers></Careers>
            <AllNews></AllNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;