import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@material-ui/core';

const ProgramNews = ({ programms }) => {
    const { blog_name, blog_description, blog_image } = programms;
    return (
        <div>
            <Container>
                <Box sx={{ flexGrow: 1, }}>
                    <Grid container
                    >
                        <Card sx={{ maxWidth: 345, marginTop: "30px", boxShadow: "none" }}>
                            <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={blog_image}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography variant="h5" color="text.secondary">
                                        {blog_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{}}>
                                        {blog_description}
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
        </div>
    );
};

export default ProgramNews;