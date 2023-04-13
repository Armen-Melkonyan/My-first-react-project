import { Box, Typography } from '@mui/material';
import React from 'react';
import HeroImage from '../../static/HeroImage.avif';

const Hero = () => {
  return (
    <Box>
        <Typography align='center' variant='h3' sx={{fontWidth: 900}}>
            Fashions<b style={{color: 'red'}}>Blog</b>
        </Typography>
        <Typography align='center' variant='body1' sx={{fontWidth: 100}}>
            We Make you look the better of you!
        </Typography>
        <Box sx={{
            backgroundImage:`url(${HeroImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor:'black',
            backgroundPosition:'center',
            backgroundSize:'cover',
            height:600,
            width: '100%'
        }}>

        </Box>
    </Box>
  )
}

export default Hero