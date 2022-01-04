import { Box, Container, Divider, Typography } from '@material-ui/core';
import React from 'react';
import programmingBlog from '../../fakeProgrammingBlog.json'
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const SingleBlog = () => {
    return (
        <>
          <Navigation/>
            <Container sx={{ my: '50px'}} fixed >
                <Box sx={{ width: { xs: '90%', md: '75%', lg: '50%' }, color: '#3C3C3C', mx: 'auto',my:'10vh'}}>
                <Box sx={{ textAlign: 'center' }}>
                    <img style={{width:'100%'}} src={programmingBlog[0].image} alt="program"/>
                </Box>
                <Box>
                    <Typography variant="h4" sx={{fontWeight:'bold'}} gutterBottom component="div">
                        {programmingBlog[0].heading}
                    </Typography>
                    <span style={{ color: '#D55857' }}>#Getting Started</span>
                    <span style={{ color: '#D55857' }}>#{programmingBlog[0].category}</span>
                </Box>
                <Box sx={{my:'20px',mb:'40px'}}>
                        <p style={{ color:'#756A7B',fontSize:'18px'}}>{programmingBlog[0].decsription}</p>
                </Box>
                <Divider/>
                <Box>
                    <span>Share This:</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </Box>
            </Box>
          </Container> 
          <Footer/>
        </>
    );
};

export default SingleBlog;