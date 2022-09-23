import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

function ThemeRoutes() {
    return useRoutes([MainRoutes]);
}

export default ThemeRoutes;
