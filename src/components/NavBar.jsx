import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Links } from 'react-router'

const NavBar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6' marginRight={"auto"}>Blog</Typography>
            <Link to="/">
                <Button style={{color:"white"}}>Home</Button>
            </Link>
            <Link to="/add">
                <Button style={{color:"white"}}>Add</Button>
            </Link>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar