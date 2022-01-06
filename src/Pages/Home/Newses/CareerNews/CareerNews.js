import { Box, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ProgramNews from '../ProgrammingNews/ProgramNews/ProgramNews';
import CarrierNewsOne from './CarrierNews/CarrierNews';


const CarrierNews = () => {
    const [carriers, setcarriers] = useState([]);
    const [programmings, setProgramming] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carrierBlogs')
            .then(res => res.json())
            .then(data => setcarriers(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/programmingBlogs')
            .then(res => res.json())
            .then(data => setProgramming(data))
    }, [])
    console.log(programmings)
    return (
        <div>
            <Container >
                <Box sx={{ flexGrow: 1 }} sx={{ display: "flex", marginBottom: "60px" }}>
                    <Grid container>
                        <Grid item sm={12} md={4} lg={4} >
                            <Typography variant="h5" gutterBottom component="div" sx={{ display: "inlineBlock", textAlign: "center" }}>
                                Carrier Blogs
                            </Typography>
                            {
                                carriers.map(carriers => <CarrierNewsOne key={carriers._id} carriers={carriers} />)
                            }
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <Typography variant="h5" gutterBottom component="div">
                                Programming Blogs
                            </Typography>
                            {
                                programmings.map(programms => <ProgramNews key={programmings._id} programms={programms} />)
                            }
                        </Grid>
                    </Grid>


                </Box>
            </Container>
        </div>
    );
};

export default CarrierNews;