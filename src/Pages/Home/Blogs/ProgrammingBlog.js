import { Button } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchProgrammingBlogs } from "../../../redux/slices/blogSlice";

const ProgrammingBlog = () => {
    const dispatch = useDispatch();
    const programmingBlogs = useSelector((state) => state.blogs.programmingBlogs);
    useEffect(() => {
        dispatch(fetchProgrammingBlogs());
    }, [dispatch]);
    const data = programmingBlogs.slice(3, 7);
    const slideBlogs = programmingBlogs.slice(0, 1);
    const topBlogs = programmingBlogs.slice(1, 3);

    return (
        <div style={{padding:'20px 0'}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ color: 'white' }} item xs={12} md={6}>
                        {
                            slideBlogs.map(blog => <Box blog={blog} key={blog._1} sx={{ position: 'relative' }}>
                                <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: '#ffffff' }}>
                                    <Box>
                                    <img style={{ width: '100%' }} src={blog.blog_image} alt="Blog" /> 
                                <Box style={{ position: 'absolute', bottom: "15px" }}>
                                    <Typography sx={{ borderRadius: 10, mx: '10px', bgcolor: '#FF3E30', p: '6px', display: 'inline-block' }} variant="caption" display="block" gutterBottom>
                                        Programming Blogs
                                    </Typography>
                                    <Typography sx={{ fontWeight: 'bold', mx: '10px' }} variant="h4" component="div" gutterBottom>
                                        {blog.blog_name}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: '10px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ width: "30px" }} src="https://i.ibb.co/m0GS50x/toppng-com-circled-user-icon-user-pro-icon-2240x2240.png" alt="user"></img>
                                            <span style={{ padding: '0 5px' }}>{blog.user_name}</span>
                                        </div>
                                        <div>
                                            <Typography sx={{ borderRight: 1, px: '5px' }} variant='caption'>Today</Typography>
                                            <span style={{ padding: '0 5px' }}>1 min to Read</span>
                                        </div>
                                    </Box>
                                        </Box>
                                        </Box>
                                    </Link>
                            </Box>)
                        }
                        
                        <div>
                            <Link to='/allBlogs' style={{textDecoration:'none'}}>
                            <Button variant='contained' style={{ background: '#FF3E30', color: '#fff' }}>See All Blogs</Button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid sx={{ color: '#594155' }} item xs={12} md={3}>
                        {
                            topBlogs.map(blog => <Box blog={blog} key={blog._id}>
                                <Link style={{ textDecoration: 'none', color: '#000000' }} to={`/blog/${blog._id}`} >
                                    <div>
                                        <img style={{ width: '100%' }} src={blog.blog_image} alt="para"></img>
                                        <h4 style={{ margin: '10px 0' }}>{blog.blog_name}</h4>
                                    </div>
                                </Link>
                            </Box>)
                        }
                    </Grid>
                    <Grid sx={{ color: '#594155' }} item xs={12} md={3}>
                        {
                            data.map((blog) => (
                                <Box key={blog._id} sx={{ borderBottom: '1px dotted #D9D9D9', margin: '0 0 10px 0' }}>
                                    <Link style={{ textDecoration: 'none', color: '#000000' }} to={`/blog/${blog._id}`} >
                                        <div>
                                            <h4 style={{ margin: "0 0 5px 0" }}>{blog.blog_name}</h4>
                                            <p>{'1 day ago'}</p>
                                        </div>
                                    </Link>
                                </Box>
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProgrammingBlog;