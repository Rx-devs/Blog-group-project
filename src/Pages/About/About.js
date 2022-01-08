import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Box style={{ padding: '50px 0' }}>
                    <Box style={{marginBottom:'20px'}} sx={{ flexGrow: 1 }} >
                        <Typography variant="h4" sx={{ textAlign: "center" }} >
                            Our Team
                        </Typography>
                        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                                We are contributed a blogs types of website that anyone post his/her blog easily
                            </Typography>
                    </Box>
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Card sx={{ maxWidth: 345, mx:'auto' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/87359831_3192189541006050_3799766891145199616_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFWi4cqx2S6mp6v_fcnhTqF535ZGxK2NB7nflkbErY0HuKK-kiSsqZtZxkDXpMVvv6wAee_XKTLy5yqASsMI5Rd&_nc_ohc=JZo06KBl4CoAX_1VTaQ&_nc_ht=scontent.fdac14-1.fna&oh=00_AT_0QqaPJAMAKP6YQQ-236RSJx-kqT3LVgcVppUv9055xQ&oe=61FA3D5F"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Mohammod Faysal
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    FrontEnd Developer
                                </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <Card sx={{ maxWidth: 345, mx:'auto' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/122463110_1808711205951558_3053033169619768876_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeELoHAp-gI_WcRnbcptcDV4I_dNpm8aqb8j902mbxqpv-H3WJvW2yg-pXTUzzrnu6KVsxQDCL_7nlZwxJPq6yp2&_nc_ohc=iysIxGaAmX8AX95WqH9&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-W9ZNUa0jpp2Zd7_hPdVPaRiGBOotEpQYkRVLThplmRw&oe=61FD99AA"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Tonmoy Roy
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Full Stack Developer
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <Card sx={{ maxWidth: 345, mx:'auto' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-1/p240x240/198123963_3019627894982662_7043125379049362582_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGmfs8fJy1sNKH-V8yDrIKRjOJge6-_i6OM4mB7r7-Lo4K5YVlbU0eMMxbD_qlIRvlrFvB0onvptDUFOLVCE7q9&_nc_ohc=H2biTksRNKsAX8UI7E8&tn=b8m1DjnRSWQm7L5q&_nc_ht=scontent.fdac14-1.fna&oh=00_AT_57vAClfNuHGJYya4cZhFyK-eFfP8nIHk9LSgNz4EiKA&oe=61FB9CDE"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Mohammed Siam
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    FrontEnd Developer
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <Card sx={{ maxWidth: 345, mx:'auto' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://avatars.githubusercontent.com/u/77662668?v=4"
                                alt="jay Sarker"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Joy Sarker
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    FrontEnd Developer
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                        </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;