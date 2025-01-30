import { AppBar, Button, Toolbar, Typography, createTheme, ThemeProvider,Link } from '@mui/material'
import React from 'react'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const NavBar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position='static'>
          <Toolbar>
              <Typography variant='h6' sx={{ flexGrow: 1 }}>VH</Typography>
              <Link to="/user">
                  <Button color="inherit">User</Button>
              </Link>
              <Link to="/order">
                  <Button color="inherit">Order</Button>
              </Link>
              <Link to="/product">
                  <Button color="inherit">Product</Button>
              </Link>
          </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default NavBar