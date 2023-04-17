import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import KidsImage from '../../static/Kids.jpg';
import MenImage from '../../static/Men.jpg';
import WomenImage from '../../static/wmen.jpg';

const StyledBox = styled(Box)({
    height: 200,
    width: '100%',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
})

const StyledTypography = styled(Typography)({
    margin: '25% 50px 25% 50px',
    backgroundColor: 'white',
    opacity: '0.8'
})

const Category = () => {
  return (
    <Box mb={2}>
        <Stack direction={{xs:'column', sm:'row'}} spacing={{xs:1, sm:2, md:4}} mt={5}>
            <StyledBox
                sx={{
                    backgroundImage: `url(${KidsImage})`
                }}
            >
                <StyledTypography variant='h3' align='center'>
                    Kids 
                </StyledTypography>
            </StyledBox>
            <StyledBox
                sx={{
                    backgroundImage: `url(${WomenImage})`
                }}
            >
                <StyledTypography variant='h3' align='center'>
                    Men 
                </StyledTypography>
            </StyledBox>
            <StyledBox
                sx={{
                    backgroundImage: `url(${MenImage})`
                }}
            >
                <StyledTypography variant='h3' align='center'>
                    Wmen 
                </StyledTypography>
            </StyledBox>
        </Stack>
    </Box>
  )
}

export default Category