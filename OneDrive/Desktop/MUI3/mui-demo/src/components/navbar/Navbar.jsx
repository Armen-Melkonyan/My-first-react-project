import { Facebook, Instagram, Menu, Twitter } from '@mui/icons-material'
import { AppBar, Box, InputBase, MenuItem, Menu as MenuIcon, Toolbar, Typography, styled } from '@mui/material'
import React from 'react';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const SocialBox = styled(Box)({
    display: 'flex',
    gap: 10
})

const MenuBox = styled(Box)({
    display: 'flex',
    gap: 30
})

const SearchBox = styled(Box)({
    display: 'flex',
    gap: 5
})

const menuItems = [
    {Name: 'Home', Link:'/', Id:1},
    {Name: 'Products', Link:'/products'},
    {Name: 'Portfolio', Link:'/portfolio'},
    {Name: 'Blog', Link:'/blog'},
    {Name: 'Contact us', Link:'/contact'},
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleClose = e =>{
        setOpen(false);
    }

  return (
    <AppBar sx={{bgcolor: 'black', position:'static'}}>
        <StyledToolbar>
            <SocialBox>
                <Facebook />
                <Instagram />
                <Twitter />
            </SocialBox>
            <MenuBox sx={{display:{xs:'none', sm:'none', md:'flex'}}}>
                {
                    menuItems.map((item) =>(
                        <Typography key={item.Name} sx={{cursor: 'pointer', fontSize: '14px'}}>{item.Name}</Typography>
                    ))
                }
            </MenuBox>
            <SearchBox>
                <InputBase placeholder='search...' sx={{color: 'white'}} />
                <Menu onClick={() =>setOpen(true)} sx={{color: 'white', display:{xs:'block', sm:'block', md:'none'}}}/>
            </SearchBox>
        </StyledToolbar>

         <MenuIcon
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            <Box sx={{width: 250, height: '90vh'}}>
                {
                    menuItems.map((item) =>(
                        <MenuItem key={item.Name} onClick={handleClose} sx={{cursor: 'pointer', fontSize: '14px'}}>{item.Name}</MenuItem>
                    ))
                }
                {/* <MenuItem onClick={handleClose}>
                    
                </MenuItem> */}
            </Box>
            
        </MenuIcon>
    </AppBar>
  )
}

export default Navbar