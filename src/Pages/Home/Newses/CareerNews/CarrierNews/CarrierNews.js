import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@material-ui/core';

const CarrierNewsOne = ({ carriers }) => {
    const { blog_name, blog_description, blog_image } = carriers;

    return (
        <Container>
            <Box sx={{ flexGrow: 1, }}>
                <Grid container
                >
                    <Card sx={{ maxWidth: "auto", marginTop: "30px", boxShadow: "none" }}>
                        <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={blog_image}
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="h5" color="text.secondary">
                                    {blog_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{}}>
                                    {blog_description.slice(0, 200)}
                                </Typography>
                                <br />
                                <Typography variant="body2" color="caption" sx={{}}>
                                    2 min ago
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Box >
        </Container>
    );
};

export default CarrierNewsOne;