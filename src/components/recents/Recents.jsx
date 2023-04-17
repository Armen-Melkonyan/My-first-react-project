import { Box, Grid } from '@mui/material'
import React from 'react';
import CardImage from '../../static/cardImage.jpg';
import { Gite } from '@mui/icons-material';
import MyCards from '../myCards/MyCards';

const Recents = () => {
  return (
    <Box mt={2}>
        <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid item>
                <MyCards cardImage={CardImage}/>
            </Grid>
            <Grid item xs={6}>
                <MyCards cardImage={CardImage}/>
            </Grid>
            <Grid item xs={6}>
                <MyCards cardImage={CardImage}/>
            </Grid>
            <Grid item xs={6}>
                <MyCards cardImage={CardImage}/>
            </Grid>
            <Grid item xs={6}>
                <MyCards cardImage={CardImage}/>
            </Grid>
            
        </Grid>
    
        {/* <Grid container spacing={5}>
            <Grid item>
                <Card cardimage={CardImage}/>
            </Grid>
            <Grid item md={6}>
                <Card cardimage={CardImage}/>
            </Grid>
            <Grid item md={6}>
                <Card cardimage={CardImage}/>
            </Grid>
        </Grid> */}
    </Box>
  )
}

export default Recents