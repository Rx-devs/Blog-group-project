import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import Carrier from './Carrier/Carrier';


const Carriers = () => {

  const [carriers, setCarriers] = useState([]);
  useEffect(() => {
    fetch('./Carrier.JSON')
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
            carriers.map(carrier => <Carrier key={carrier.id} carrier={carrier} />)
          }
        </Grid>
      </Box>
    </Container>

  );
};

export default Carriers;