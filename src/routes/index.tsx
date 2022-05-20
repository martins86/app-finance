import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from '../routes/access-routes';

import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';
import Dashboard from '../pages/dashboard';


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path='/app-finance/dashboard' element={<PrivateRoutes Item={Dashboard} SignIn={SignIn} />} />
                    <Route path='/app-finance' element={<SignIn />} />
                    <Route path='/app-finance/sign-up' element={<SignUp />} />

                    <Route path='*' element={<SignIn />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;