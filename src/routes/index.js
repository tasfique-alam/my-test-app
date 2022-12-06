import {
    Routes, Route, useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import Dashboard from '../pages/Dashbaord';
import Main from '../layouts/Main/main';

function AllRoutes() {
    const { pathname } = useLocation();

    const titles = {
        '/': 'dashboard',
    };

    useEffect(() => {
        document.title = titles[pathname] ?? 'Sorry';
    }, [pathname]);

    return (
        <Routes>
            <Route element={<Main />}>
                <Route
                    path='/'
                    element={<Dashboard />}
                />
            </Route>
        </Routes>
    );
}

export default AllRoutes;
