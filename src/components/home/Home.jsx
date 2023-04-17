import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Hero from '../hero/Hero'
import Category from '../Category/Category'
import Recents from '../recents/Recents'

const Home = () => {
  return (
    <Box>
        <Hero />
        <Container>
            <Category /> 
            <hr />
            <Stack direction='row' spacing={2}>
                <Box>
                    <Recents />
                </Box>
                <Box>Rightbar</Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Home