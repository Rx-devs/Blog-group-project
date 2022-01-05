import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <Box  elevation={10}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3} >
                            <Box >
                                <Typography variant='h6'>
                                    Newsfeed
                                </Typography>
                                <Typography>
                                    Newsfeed is well optimized template for any kinds of newspaper, blog, magazine etc website
                                </Typography>
                            </Box>
                        </Grid>
                        {/* Navigation */}
                        <Grid item xs={12} sm={3} >
                            <Box>
                                <Typography variant='h6'>
                                    Navigation
                                </Typography>
                                <Box>
                                    <Box>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                Home
                                            </Button>

                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/blogs">
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                Blogs
                                            </Button>
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact">
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                Contact
                                            </Button>
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/aboutUs">
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                About Us
                                            </Button>
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                Login
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        {/* Social Links */}
                        <Grid item xs={12} sm={3} >
                            <Box>
                                <Typography variant='h6'>
                                    Social Links
                                </Typography>
                            </Box>
                            <Box>
                                <FacebookIcon />Facebook
                            </Box>
                            <Box>
                                <TwitterIcon />Twitter
                            </Box>
                            <Box>
                                <InstagramIcon />Instagram
                            </Box>
                            <Box>
                                <LinkedInIcon />LinkedIn
                            </Box>
                        </Grid>
                        {/* Contact Info */}
                        <Grid item xs={12} sm={3} >
                            <Box>
                                <Typography variant='h6'>
                                    Contact Info
                                </Typography>
                                <Box><HomeIcon />New S. Sales Road, Toronto, CA</Box>
                                <Box><EmailIcon />web@newsfeed.com</Box>
                                <Box><LocalPhoneIcon />+1 (123) 123 123</Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ color: 'text.secondary' }} textAlign="center" pt={{ sm: 10 }} pb={{ xs: 5, sm: 0, md:5}} >
                        © 2022 Newsfeed - Developed with by Team-33
                    </Box>
                </Container>
            </Box>
        </div >
    );
};

export default Footer;