import { Button } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import fakeData from '../../../fakeProgrammingBlog.json';


const ProgrammingBlog = () => {

    const Data = fakeData.slice(3, 7);

    return (
        <React.Fragment>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ color: 'white' }} item xs={12} md={6}>
                        <Box sx={{ position: 'relative' }}>
                            <img style={{ width: '100%' }} src={fakeData[0].blog_image} alt={fakeData[0].blog_name} />
                            <Box style={{ position: 'absolute', bottom: "15px" }}>
                                <Typography sx={{ borderRadius: 10, mx: '10px', bgcolor: '#FF3E30', px: '5px', width: '80px' }} variant="caption" display="block" gutterBottom>
                                    programming
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', mx: '10px' }} variant="h4" component="div" gutterBottom>
                                    {fakeData[0].blog_name}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img style={{ width: "30px" }} src="https://i.ibb.co/m0GS50x/toppng-com-circled-user-icon-user-pro-icon-2240x2240.png" alt="user"></img>
                                        <span style={{ padding: '0 5px' }}>{fakeData[0].user_name}</span>
                                    </div>
                                    <div>
                                        <Typography sx={{ borderRight: 1, px: '5px' }} variant='caption'>Today</Typography>
                                        <span style={{ padding: '0 5px' }}>1 min to Read</span>
                                    </div>
                                </Box>
                            </Box>
                            
                        </Box>
                        <div>
                            <Button variant='contained' style={{ background: '#FF3E30',color:'#fff' }}>See All Blogs</Button>
                        </div>
                    </Grid>
                    <Grid sx={{ color: '#594155' }} item xs={12} md={3}>
                        <div>
                            <img style={{ width: '100%' }} src={fakeData[1].blog_image} alt="para"></img>
                            <h4 style={{ margin: '10px 0' }}>{fakeData[1].blog_name}</h4>
                        </div>
                        <div>
                            <img style={{ width: '100%' }} src={fakeData[2].blog_image} alt="para"></img>
                            <h4 style={{ margin: '10px 0' }}>{fakeData[2].blog_name}</h4>
                        </div>
                    </Grid>
                    <Grid sx={{ color: '#594155' }} item xs={12} md={3}>
                        {
                            Data.map((blog, i) => (
                                <Box sx={{ borderBottom: '1px dotted #D9D9D9', margin: '0 0 10px 0' }}>
                                    <h4 style={{ margin: "0 0 5px 0" }}>{blog.blog_name}</h4>
                                    <p>{'1 day ago'}</p>
                                </Box>
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default ProgrammingBlog;