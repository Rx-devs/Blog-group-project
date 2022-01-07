import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from "react";
import { useForm } from "react-hook-form";

const PostBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://quiet-sierra-31697.herokuapp.com/allBlogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added');
                    reset();
            }
        })
    };

    return (
        <div>
            <Grid container >
                <Grid item xs={12} md={5} sx={{mx:'auto'}}>
                    <Card sx={{ p: 3}} variant="outlined">
                        <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h5" component="div" gutterBottom>
                            Add a New Blog
                        </Typography>
                
                        <form style={{display:'grid',gridTemplateColumns:'1fr', rowGap:'10px', padding:'10px'}}  onSubmit={handleSubmit(onSubmit)}>
                            <input style={{padding:'12px'}}  placeholder="Blog Image Url" {...register("blog_image",{ required: true })} />
                            <input style={{padding:'12px'}} placeholder="Blog Name" {...register("blog_name", { required: true })} />
                            <textarea style={{padding:'12px', resize:'none'}} placeholder="Blog Description" {...register("blog_description",{ required: true })} />
                            <input style={{padding:'12px'}} placeholder="Blog Catagory" {...register("blog_catagory", { required: true })} />
                            <input style={{padding:'12px', backgroundColor:'#ff3e30', color:'#ffffff', border:'none', borderRadius:'3px'}} type="submit" />
                        </form>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default PostBlog;

