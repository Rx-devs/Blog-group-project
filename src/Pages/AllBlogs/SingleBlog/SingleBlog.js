import { Box, Button, Container, Divider, Typography } from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import CommentSection from './CommentSection';

const user = {
    name:'Robin Binar',
    image:'https://i.ibb.co/m0GS50x/toppng-com-circled-user-icon-user-pro-icon-2240x2240.png',
    bio: 'How to Write a Professional Bio. Professional sites like LinkedIn, AngelList, or a speaker bio on an event site all have space for a bio or summary section. For each of these, you’ll probably want to write a mid-length description of both your current role, professional aspirations, and biggest achievements.'
}
const SingleBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});
    // load service
    useEffect(() => {
        fetch(`https://quiet-sierra-31697.herokuapp.com/allBlogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId]);
    
    return (
        <div>
            <Navigation />
            <Container>
                <Container sx={{ my: '50px' }} fixed >
                    <Box sx={{ width: { xs: '90%', md: '75%', lg: '50%' }, color: '#3C3C3C', mx: 'auto', my: '10vh' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img style={{ width: '100%' }} src={blog.blog_image} alt="program" />
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom component="div">
                                {blog.blog_name}
                            </Typography>
                            <span style={{ color: '#FF3E30', fontWeight: "bold" }}>#Getting Started</span>
                            <span style={{ color: '#FF3E30', fontWeight: "bold" }}>#{blog.blog_catagory}</span>
                        </Box>
                        <Box sx={{ my: '20px', mb: '40px' }}>
                            <Typography variant="body1" gutterBottom>
                                {blog.blog_description}
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', alignItems: 'center', my: '15px' }}>
                            <span>Share This:</span>
                            <span style={{ color: '#FF3E30', margin: '0 2px' }}><FacebookIcon /></span>
                            <span style={{ color: '#FF3E30', margin: '0 2px' }}><LinkedInIcon /></span>
                            <span style={{ color: '#FF3E30', margin: '0 2px' }}><GitHubIcon /></span>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <div>
                                <img style={{ width: '50px' }} src={user.image} alt="user" />
                            </div>
                            <div>
                                <h6 style={{ fontSize: '15px', display: 'inline-block', margin: '5px' }}>{user.name}</h6>
                                <small>Author</small>
                                <Typography variant="body1" gutterBottom style={{ margin: '5px' }}>
                                    {user.bio}
                                </Typography>
                                <span style={{ margin: '5px', color: '#FF3E30' }}><FacebookIcon /></span>
                                <span style={{ margin: '5px', color: '#FF3E30' }}><LinkedInIcon /></span>
                                <span style={{ margin: '5px', color: '#FF3E30' }}><GitHubIcon /></span>
                            </div>
                        </Box>
                        <Box sx={{ my: '20px', display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant='contained' style={{ backgroundColor: '#FF3E30', color: '#ffffff' }}>Previous</Button>
                            <Button variant='contained' style={{ backgroundColor: '#FF3E30', color: '#ffffff' }}>Next</Button>
                        </Box>
                        <CommentSection />
                    </Box>
                </Container>
            </Container>
            <Footer />
        </div>
    );
};

export default SingleBlog;