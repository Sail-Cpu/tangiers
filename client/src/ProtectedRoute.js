import React,{ useContext } from 'react';
import { Outlet } from 'react-router';
/* Context */
import { UserContext } from './context/UserContext';
/* pages */
import SignIn from './pages/sign/SignIn';

const useAuth = () => {
    const{ user } = useContext(UserContext);
    return user && user.loggedIn;
}

const ProtecedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <SignIn />;
}

export default ProtecedRoute;