import { Box, Button, Container, Divider, Typography } from '@material-ui/core';
import React from 'react';
import programmingBlog from '../../fakeProgrammingBlog.json'
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CommentSection from './CommentSection';


const user = {
    name:'Robin Binar',
    image:'https://i.ibb.co/m0GS50x/toppng-com-circled-user-icon-user-pro-icon-2240x2240.png',
    bio: 'How to Write a Professional Bio. Professional sites like LinkedIn, AngelList, or a speaker bio on an event site all have space for a bio or summary section. For each of these, you’ll probably want to write a mid-length description of both your current role, professional aspirations, and biggest achievements.'
}
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
                <Box sx={{display:'flex',alignItems:'center',my:'15px'}}>
                    <span>Share This:</span>
                    <span style={{color:'#756A7B',m:'5px'}}><FacebookIcon/></span>
                    <span style={{color:'#756A7B',m:'5px'}}><LinkedInIcon/></span>
                    <span style={{color:'#756A7B',m:'5px'}}><GitHubIcon/></span>
                </Box>
                <Box sx={{display:'flex'}}>
                    <div>
                        <img style={{width:'80px'}} src={user.image} alt="user" />
                    </div>
                    <div>
                        <h6 style={{fontSize:'15px',display:'inline-block',margin:'5px'}}>{user.name}</h6>
                        <small>Author</small>
                        <p style={{margin:'5px',color:'#756A7B'}}>{user.bio}</p>
                        <span style={{margin:'5px'}}><FacebookIcon/></span>
                        <span style={{margin:'5px'}}><LinkedInIcon/></span>
                        <span style={{margin:'5px'}}><GitHubIcon/></span>
                    </div>
                </Box>
                <Box sx={{my:'20px',display:'flex',justifyContent:'space-between'}}>
                    <Button variant='contained' style={{border:'1px solid #3C3C3C'}}>Previous</Button>
                    <Button variant='contained' style={{border:'1px solid #3C3C3C'}}>Next</Button>
                </Box>
                <CommentSection/>
            </Box>
          </Container> 
          <Footer/>
        </>
    );
};

export default SingleBlog;