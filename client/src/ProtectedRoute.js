import React,{ useContext } from 'react';
import { Outlet, Navigate } from 'react-router';
/* Context */
import { UserContext } from './context/UserContext';
/* pages */
import SignIn from './pages/sign/SignIn';

const useAuth = () => {
    const{ getToken } = useContext(UserContext);
    console.log(getToken().loggedIn)
    console.log("no")
    return getToken() && getToken().loggedIn;
}

const ProtecedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <SignIn />;
}

export default ProtecedRoute;