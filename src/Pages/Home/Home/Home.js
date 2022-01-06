import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Careers from '../Careers/Careers';
import Newses from '../Newses/Newses';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Careers></Careers>
            <Newses></Newses>
            <Footer></Footer>
        </div>
    );
};

export default Home;