import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MyCards = ({cardImage}) => {
  return (
    <Box>
        
        <Card>
            <CardMedia
                component='img'
                height = '100%'
                
                image={cardImage}
                alt='card'
            />
            <CardContent>
                <Typography gutterBottom variant="body1" align='center' component='div' color='tomato'>
                    Lizard
                </Typography>
                <Typography gutterBottom variant="h5" align='center' component='div'>
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Typography gutterBottom variant="body2" align='center' component='div'>
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Typography variant="body2" align='center' color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>

    </Box>
  )
}

export default MyCards