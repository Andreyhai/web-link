import React from 'react';
import {Route, Routes} from "react-router-dom";

import { 
    ERROR_ROUTE, 
    HOME_ROUTE, 
} from './utils/PATHS';

import HomePage from './pages/Home/HomePage';
import ErrorPage from './pages/Error/ErrorPage';



const AppRouter = () => {

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;