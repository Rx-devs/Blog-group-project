import { Box, Button } from '@material-ui/core';
import React from 'react';

let comments=[
    {
        name:'Lars Sambo',
        date: 'Tue Jan 03 2022',
        comment:'this is real comment,this is real commentthis is real commentthis is real commentthis is real commentthis is real commentthis is real commentthis is real comment',
        image:'https://i.ibb.co/m0GS50x/toppng-com-circled-user-icon-user-pro-icon-2240x2240.png'
    },
    {
        name:'Rambo',
        date: 'Tue Jan 04 2022',
        comment:'this is fake comment,this is fake commentthis is fake commentthis is fake commentthis is fake commentthis is fake commentthis is fake commentthis is fake comment',
        image:'https://i.ibb.co/m0GS50x/toppng-com-circled-user-icon-user-pro-icon-2240x2240.png'
    }
]
const CommentSection = () => {

    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <div>
                {
                    comments.map((m, i) => (
                        <Box sx={{display:'flex',my:'20px'}} key={i}>
                            <div><img style={{width:'50px'}} src={m.image} alt="comments" /></div>
                            <div >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <h4 style={{margin:'5px'}}>{m?.name}</h4>
                                    <small style={{ color:'#756A7B'}}>{m.date}</small>
                                </Box>
                                <p style={{ margin: '5px', color:'#756A7B'}}>{m.comment}</p>
                            </div>
                        </Box>
                    )) 
                }
            </div>
            <div>
                <h2>Post a Comment</h2>
                <form>
                    <textarea required style={{width:'300px',height:'10vh'}}></textarea><br/>
                    <Button variant='contained' style={{ border: '1px solid #3C3C3C' }}>Add Coment</Button>
                </form>
            </div>
        </div>
    );
};

export default CommentSection;