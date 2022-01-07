import { Box, Container, Grid, Typography } from '@material-ui/core';
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarrierBlogs, fetchProgrammingBlogs } from "../../../redux/slices/blogSlice";
import CarrierNews from './CarrierNews/CarrierNews';
import ProgrammingNews from './ProgrammingNews/ProgrammingNews';


const AllNews = () => {
    const dispatch = useDispatch();
    const carriers = useSelector((state) => state.blogs.carrierBlogs).slice(3, 5);
    useEffect(() => {
        dispatch(fetchCarrierBlogs());
    }, [dispatch]);

    const programmings = useSelector((state) => state.blogs.programmingBlogs).slice(3, 5);
    useEffect(() => {
        dispatch(fetchProgrammingBlogs());
    }, [dispatch]);
    
    return (
        <div style={{padding:'100px 0'}}>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" gutterBottom component="div" style={{ textAlign: "center" }}>
                                Our Latest Blogs
                            </Typography>
                    <Grid container>
                        <Grid item sm={12} md={6} lg={6} >
                            {/* <Typography variant="h5" gutterBottom component="div" style={{ textAlign: "center" }}>
                                Carrier Blogs
                            </Typography> */}
                            {
                                carriers.map(carriers => <CarrierNews key={carriers._id} carriers={carriers} />)
                            }
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            {/* <Typography variant="h5" gutterBottom component="div" style={{ textAlign: "center" }}>
                                Programming Blogs
                            </Typography> */}
                            {
                                programmings.map(programms => <ProgrammingNews key={programms._id} programms={programms} />)
                            }
                        </Grid>
                    </Grid>


                </Box>
            </Container>
        </div >
    );
};

export default AllNews;