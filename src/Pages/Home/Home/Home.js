import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ProgrammingBlog from '../Blogs/ProgrammingBlog';
import Carriers from '../Carriers/Carriers';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ProgrammingBlog />
            <Carriers></Carriers>
            <Footer></Footer>
        </div>
    );
};

export default Home;