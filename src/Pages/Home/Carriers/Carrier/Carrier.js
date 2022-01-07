import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import './Carrier.css';

const Carrier = ({carrier }) => {
    const { blog_catagory, blog_name, blog_description, blog_image, user_image, user_name } = carrier;

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Card sx={{ display:'flex', flexDirection:'column', maxWidth: 545, marginTop: "30px" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={blog_image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography className='tag tag-blue'>
                                    {blog_catagory}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {blog_description}
                                </Typography>
                                <div className="card__footer">
                                    <div className="user">
                                        {/* <image src={user_image} alt="user__image" className="user__image" /> */}
                                        <div className="user__info">
                                            <h5>{user_name}</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Box >
        </>

    );
};

export default Carrier;