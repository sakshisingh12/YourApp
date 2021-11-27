import React from 'react';
import img from '../Images/home1.png';
import img2 from '../Images/img2.png';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import {Styled} from '@mui/material/styles';
import './home.css';
import { CardContent, Typography } from '@mui/material';
const Home = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Item xs={7} id="item-1">
                    <Card sx={{ maxWidth: 1600 }} id="item-1">
                    <CardMedia
                        component="img"
                        height="680"
                        padding="2px"
                        image={img}
                        alt=""
                    />
                    </Card> 
                </Item>
                <Item xs = {5} id="item-2">
                <Box>
                    <Item >
                        <Card sx = {{maxWidth: 640}}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={img2}
                                alt=""
                            />
                        </Card>
                    </Item>
                    <Item xs = {5} md={2} id="item-3">
                        <Card sx = {{minWidth: 640}} id="card3" >
                            <CardMedia
                                height="600"
                                alt=""
                            />
                            <CardContent>
                                <Typography sx={{fontFamily: "'Playfair Display'"}} variant='h1' align="right" component="div">
                                    YourApp
                                </Typography>
                                <Typography sx={{fontFamily: "'Playfair Display'"}} variant='h3' align="right"  component="div">
                                        is here for You!
                                </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Item>
                </Box>
                </Item>
            </Grid>
        </div>
    )
}
export default Home;