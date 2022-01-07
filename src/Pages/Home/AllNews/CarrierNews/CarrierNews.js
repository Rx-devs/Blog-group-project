import { Container } from '@material-ui/core';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const CarrierNewsOne = ({ carriers }) => {
    const { blog_name, blog_description, blog_image,_id } = carriers;

    return (
        <Container>
            <Box sx={{ flexGrow: 1, marginTop:'30px' }}>
                <Grid container
                >
                    <Link to={`/blog/${_id}`} style={{textDecoration:'none'}}>
                    <Card sx={{ maxWidth: "100%", boxShadow: "none" }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                    height="250"
                                    style={{width:"200px"}}
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
                        </Link>
                </Grid>
            </Box >
        </Container>
    );
};

export default CarrierNewsOne;