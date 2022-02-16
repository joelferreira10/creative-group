import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@mui/material';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{bgcolor:"text.disabled"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6">
                Creative<span>Group</span>
          </Typography>
          </IconButton>
          <Typography variant="h6" color="textPrimary" component="p">
            Hello guest
          </Typography>
          <div className='mx-3 text-dark mr-auto'>
                <Button variant='outlined' color="inherit">Sing in</Button>
                
                <IconButton aria-label="show cart items" color="inherit">
                    <Badge badgeContent={2} color='secondary'>
                    <ShoppingCart fontSize='large' color="primary" />
                    </Badge>
                </IconButton>
           </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
