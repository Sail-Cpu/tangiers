import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
/* Context */
import { UserContext } from "../../context/UserContext";
/* img */
import Logo from '../../assets/img/logo.png';
import LogoTangiers from '../../assets/img/logo-tangiers.png';
import SignUpImg from '../../assets/img/sign-up-img.png';
/* Icons */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignUp = () => {

    const {setToken} = useContext(UserContext);
    const navigate = useNavigate();

    const[userName, setUserName] = useState();
    const[password, setPassword] = useState();
    const[errorMessage, setErrorMessage] = useState("");

    const config = {
        method: 'post',
        url: "http://localhost:3001/auth/login",
        data:{
            userName,
            password
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        try{
            axios(config).then((result) => {
                console.log(result.data);
                if(!result.data.loggedIn){
                    setErrorMessage(result.data.error);
                }else{
                    setToken(result.data);
                    navigate('/home');
                }
            }).catch((error) => {
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
        
    }

    return(
        <div className="sign-page">
            <img className="sign-page-logo" src={Logo} />
            <div className="sign-container">
                <div className="sign-left">
                    <div className="sign-left-top">
                        <img className="sign-top-logo" src={LogoTangiers} />
                    </div>
                    <form onSubmit={(e) => formSubmit(e)}>
                        <h1>Sign in</h1>
                        <div className="sign-input-container">
                            <div className="sign-input">
                                <span>User name</span>
                                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                            </div>
                            <div className="sign-input">
                                <span>Password</span>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            <span>{errorMessage}</span>
                            <button type="submit">Sign in</button>
                        </div>
                    </form>
                    <div className="sign-left-bottom">
                        <Link to={"/signup"}>
                            <ArrowBackIcon />
                            <span>Sign up</span>
                        </Link>
                    </div>
                </div>
                <div className="sign-right" style={{backgroundImage: `url(${SignUpImg})`, backgroundSize: 'cover'}}></div>
                <div></div>
            </div>
        </div>
    )
}

export default SignUp;