import React,{ useContext } from 'react';
/* Context */
import { UserContext } from '../context/UserContext';
/* Img */
import Logo from '../assets/img/logo.png';

const NavBar = () => {

    const { user } = useContext(UserContext);

    return(
        <div className='nav-bar-container'>
            <div className='nav-bar-left'>
                <img src={Logo} />
            </div>
            <div className='nav-bar-right'>
                <span>{user.money}€</span>
                <div className='user-logo'>S</div>
                <button>Déconnexion</button>
            </div>
        </div>
    )
}

export default NavBar;