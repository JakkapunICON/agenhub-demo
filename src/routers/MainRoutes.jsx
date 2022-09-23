import { Navigate } from 'react-router-dom';

// project import
import MainLayout from '../layout';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'home',
            element: <Navigate to="/" />
        },
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'contact',
            element: <Contact />
        }
    ]
};

export default MainRoutes;
