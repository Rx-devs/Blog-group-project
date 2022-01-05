import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Careers from '../Careers/Careers';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Careers></Careers>
            <Footer></Footer>
        </div>
    );
};

export default Home;