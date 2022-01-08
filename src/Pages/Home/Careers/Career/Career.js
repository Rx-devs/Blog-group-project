import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import './Career.css';


const Career = ({ Carrier }) => {
    const { blog_catagory, blog_name, blog_description, blog_image, user_image, user_name, _id, id } = Carrier;

    return (
        <>
            <Grid item xs={12} md={4}>
                <Link to={`/blog/${_id}`} style={{ textDecoration: 'none' }}>
                    <Card sx={{ maxWidth: 'auto' }}>
                    
                        <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
                            <CardMedia
                                component="img"
                                height="160"
                                image={blog_image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography className='tag tag-blue'>
                                    {blog_catagory}
                                </Typography>
                                <Typography style={{ margin: '5px 0' }} variant="h5">
                                    {blog_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "12px" }}>
                                    {blog_description.slice(0, 180)} ...
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
                </Link>
            </Grid>
        </>

    );
};

export default Career;