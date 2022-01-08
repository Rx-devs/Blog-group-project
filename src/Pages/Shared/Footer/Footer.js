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
            <Box elevation={10}>
                <Container maxWidth="lg" style={{ paddingBottom: '10px' }}>
                    <hr />
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={3} >
                            <Box>
                                <Typography variant='h6' style={{ marginBottom: '5px' }}>
                                    Newsfeed
                                </Typography>
                                <Typography>
                                    Newsfeed is well optimized template for any kinds of newspaper, blog, magazine etc website
                                </Typography>
                            </Box>
                        </Grid>
                        {/* Navigation */}
                        <Grid item xs={12} md={3} >
                            <Box>
                                <Typography variant='h6'>
                                    Navigation
                                </Typography>
                                <Box>
                                    <Box>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
                                            <Button variant="button"
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                Home
                                            </Button>

                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/blogs">
                                            <Button variant="button"
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                Blogs
                                            </Button>
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                            <Button variant="button"
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
                        <Grid item xs={12} md={3} >
                            <Box>
                                <Typography variant='h6' style={{ marginBottom: '5px' }}>
                                    Social Links
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, columnGap: '5px' }}>
                                <FacebookIcon />
                                <Typography style={{ fontSize: '14px', fontWeight: '500' }}>
                                    Facebook
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, columnGap: '5px' }}>
                                <TwitterIcon />
                                <Typography style={{ fontSize: '14px', fontWeight: '500' }}>
                                    Twitter
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, columnGap: '5px' }}>
                                <InstagramIcon />
                                <Typography style={{ fontSize: '14px', fontWeight: '500' }}>
                                    Instagram
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, columnGap: '5px' }}>
                                <LinkedInIcon />
                                <Typography style={{ fontSize: '14px', fontWeight: '500' }}>
                                    LinkedIn
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Contact Info */}
                        <Grid item xs={12} md={3} >
                            <Box>
                                <Typography variant='h6'>
                                    Contact Info
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, columnGap: '5px' }}>
                                    <HomeIcon />
                                    <Typography variant="subtitle1">
                                        New S. Sales Road, Toronto, CA
                                    </Typography>
                                </Box >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, columnGap: '5px' }}>
                                    <EmailIcon />
                                    <Typography variant="subtitle1">
                                        web@newsfeed.com
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, columnGap: '5px' }}>
                                    <LocalPhoneIcon />
                                    <Typography variant="subtitle1">
                                        +1 (123) 123 123
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Box sx={{ color: 'text.secondary', color: '#ffffff', backgroundColor: '#ff3e30', p: 2 }} textAlign="center">
                    © 2022 Newsfeed - Developed with by Team-33
                </Box>
            </Box>
        </div >
    );
};

export default Footer;