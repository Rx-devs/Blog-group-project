import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Career from '../Career/Career';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Career></Career>
            <Footer></Footer>
        </div>
    );
};

export default Home;