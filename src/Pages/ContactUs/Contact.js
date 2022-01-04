import React from 'react';
import { Grid, Paper, Avatar, TextField, Button} from '@material-ui/core'
import Email from '@mui/icons-material/Email';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    const paperStyle = { padding: 20,  width: "50%", height:"70%", margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <div>
            <Navigation></Navigation>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><Email /></Avatar>
                        <h2>Contact Us</h2>
                    </Grid>
                    <TextField label='Your Name' placeholder='Enter your name' fullWidth required />
                    <TextField label='Email' placeholder='Enter your email' type='email' fullWidth required />
                    <TextField label='Phone Number' placeholder='Enter your phone' type='Number' fullWidth  />
                    <TextField label='Subject' placeholder='Enter subject' type='text' fullWidth  />
                    <TextField label='Message' placeholder='Write Message......' type='text' fullWidth required/>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
                </Paper>
            </Grid>
            <Footer></Footer>
        </div>
    );
};

export default Contact;