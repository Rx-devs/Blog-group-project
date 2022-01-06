import React, { useEffect, useState } from 'react';
import Career from './Career/Career';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';




const Careers = () => {

  const [Carriers, setCarriers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/carrierBlogs')
      .then(res => res.json())
      .then(data => setCarriers(data))
  }, []);

  return (
    <Container sx={{ margin: "60px" }}>
      <Typography variant="h5" gutterBottom component="div">
        Career Blogs
      </Typography>
      <Box sx={{ flexGrow: 1 }} sx={{}}>
        <Grid container >
          {
            Carriers.map(Carrier => <Career key={Carrier.id} Carrier={Carrier} />)
          }
        </Grid>
      </Box>
    </Container>

  );
};

export default Careers;