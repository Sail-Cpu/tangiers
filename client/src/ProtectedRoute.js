import React,{ useContext } from 'react';
import { Outlet, Navigate } from 'react-router';
/* Context */
import { UserContext } from './context/UserContext';
/* pages */
import SignIn from './pages/sign/SignIn';
import SignUp from './pages/sign/SignUp';

const useAuth = () => {
    const{ getToken } = useContext(UserContext);
    return getToken() && getToken().loggedIn;
}

const ProtecedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <SignUp />;
}

export default ProtecedRoute;