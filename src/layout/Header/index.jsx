import * as React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

export default function Header({ component }) {
    return (
        <AppBar component={component} position="static" sx={{ display: 'flex' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography component="div" variant="h6" color="inherit" sx={{ mr: 1 }}>
                    <Link to="/">Home</Link>
                </Typography>
                <Typography component="div" variant="h6" color="inherit" sx={{ mr: 1 }}>
                    <Link to="/contact">Contact</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
