import { CardActionArea, Container, Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../../redux/slices/blogSlice";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const AllBlogs = () => {
    const dispatch = useDispatch();
    const allBlogs = useSelector((state) => state.blogs.allBlogs);
    useEffect(() => {
        dispatch(fetchAllBlogs());
    }, [dispatch]);
  
  return (
    <div>
      <Navigation></Navigation>
      <Container sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', p: 4 }}>
          <Typography variant="h4" gutterBottom component="div">
            Our All Blogs
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Read more and Learn More.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {
            allBlogs.map(blog => <Grid
              key={blog._id}
              blog={blog}
              item xs={12} md={3}>
              <Card sx={{ maxWidth: 'auto' }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      {blog.user_image}
                    </Avatar>
                  }
                  title={blog.user_name}
                  subheader="September 14, 2016"
                />
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }} >
                  <CardMedia
                    component="img"
                    height="250px"
                    image={blog.blog_image}
                    alt="Blog_image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {blog.blog_description.slice(0, 150)} ...
                    </Typography>
                  </CardContent>
                </CardActionArea>
                
              </Card>
            </Grid>)
          }
           
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default AllBlogs;




