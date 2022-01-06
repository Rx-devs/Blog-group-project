import { Button } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import fakeData from '../../../fakeProgrammingBlog.json';

const ProgrammingBlog = () => {

    const Data = fakeData.slice(3, 7)
    console.log(Data);

    return (
        <React.Fragment>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ color: 'white' }} item xs={12} md={6}>
                        <Box sx={{ position: 'relative' }}>
                            <img style={{ width: '100%' }} src={fakeData[0].image} alt={fakeData[0].heading} />
                            <Box style={{ position: 'absolute', bottom: "15px" }}>
                                <Typography sx={{ borderRadius: 10, mx: '10px', bgcolor: '#FF3E30', px: '5px', width: '80px' }} variant="caption" display="block" gutterBottom>
                                    programming
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', mx: '10px' }} variant="h4" component="div" gutterBottom>
                                    {fakeData[0].heading}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img style={{ width: "30px" }} src="https://i.ibb.co/m0GS50x/toppng-com-circled-user-icon-user-pro-icon-2240x2240.png" alt="user"></img>
                                        <span style={{ padding: '0 5px' }}>{fakeData[0].writer}</span>
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
                            <img style={{ width: '100%' }} src={fakeData[1].image} alt="para"></img>
                            <h4 style={{ margin: '10px 0' }}>{fakeData[1].heading}</h4>
                        </div>
                        <div>
                            <img style={{ width: '100%' }} src={fakeData[2].image} alt="para"></img>
                            <h4 style={{ margin: '10px 0' }}>{fakeData[2].heading}</h4>
                        </div>
                    </Grid>
                    <Grid sx={{ color: '#594155' }} item xs={12} md={3}>
                        {
                            Data.map((blog, i) => (
                                <Box sx={{ borderBottom: '1px dotted #D9D9D9', margin: '0 0 10px 0' }}>
                                    <h4 style={{ margin: "0 0 5px 0" }}>{blog.heading}</h4>
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