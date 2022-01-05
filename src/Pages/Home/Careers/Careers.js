import React, { useEffect, useState } from 'react';
import Career from './Career/Career';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';




const Careers = () => {

  const [careers, setcareers] = useState([]);
  useEffect(() => {
    fetch('./career.json')
      .then(res => res.json())
      .then(data => setcareers(data))
  }, []);

  return (
    <Container sx={{ margin: "60px" }}>
      <Typography variant="h5" gutterBottom component="div">
        Career Blogs
      </Typography>
      <Box sx={{ flexGrow: 1 }} sx={{}}>
        <Grid container >
          {
            careers.map(career => <Career key={career.id} career={career} />)
          }
        </Grid>
      </Box>
    </Container>

  );
};

export default Careers;