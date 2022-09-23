import { Outlet } from 'react-router-dom';

// material-ui
import { Box } from '@mui/material';

// project import
import Header from './Header';
import Footer from './Footer';

function MainLayout() {
    return (
        <Box component="div" sx={{ display: 'block', width: '100%' }}>
            <Header component="header" />
            <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Outlet />
            </Box>
            {/* <Footer component="footer" /> */}
        </Box>
    );
}

export default MainLayout;
