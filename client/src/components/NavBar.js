import React,{ useContext, useEffect, useState } from 'react';
/* Context */
import { UserContext } from '../context/UserContext';
/* Img */
import Logo from '../assets/img/logo.png';
/* Icons */
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

    const { user, getToken } = useContext(UserContext);
    
    const disconect = () => {
        sessionStorage.removeItem('token');
        window.location = "/signin"
    }

    return(
        <div className='nav-bar-container'>
            <div className='nav-bar-left'>
                <img src={Logo} />
            </div>
            <div className='nav-bar-right'>
                <span>{getToken().data.money}€</span>
                <div className='user-logo'>{getToken().data.email[0].toUpperCase()}</div>
                <button onClick={() => disconect()}>Déconnexion</button>
            </div>
            <div className='toogle-sub-nav'>
                <MenuIcon />
            </div>
        </div>
    )
}

export default NavBar;