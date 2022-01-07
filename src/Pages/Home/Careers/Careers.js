import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCarrierBlogs } from "../../../redux/slices/blogSlice";
import Career from './Career/Career';

const Careers = () => {
  const dispatch = useDispatch();
    const carrierBlogs = useSelector((state) => state.blogs.carrierBlogs);
    useEffect(() => {
        dispatch(fetchCarrierBlogs());
    }, [dispatch]);
  
  return (
    <div style={{paddingTop:"60px"}}>
    <Container>
      <Typography variant="h4" style={{textAlign:'center',marginBottom:'30px'}} gutterBottom component="div">
        Career Blogs
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} >
          {
            carrierBlogs.map(Carrier => <Career key={Carrier._id} Carrier={Carrier} />)
          }
        </Grid>
      </Box>
    </Container>
    </div>
  );
};

export default Careers;