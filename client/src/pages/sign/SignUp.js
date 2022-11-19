import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
/* Context */
import { UserContext } from "../../context/UserContext";
/* img */
import Logo from '../../assets/img/logo.png';
import LogoTangiers from '../../assets/img/logo-tangiers.png';
import SignUpImg from '../../assets/img/sign-up-img.png';
/* Icons */
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SignUp = () => {

    const {setToken} = useContext(UserContext);
    const navigate = useNavigate();

    const[email, setEmail] = useState();
    const[pseudo, setPseudo] = useState();
    const[password1, setPassword1] = useState();
    const[password2, setPassword2] = useState();
    const[errorMessage, setErrorMessage] = useState("");

    const config = {
        method: 'post',
        url: "http://localhost:3001/auth/signup",
        data:{
            email,
            pseudo,
            password1,
            password2
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
                    navigate('/');
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
                        <h1>Sign up</h1>
                        <div className="sign-input-container">
                            <div className="sign-input">
                                <span>Mail address</span>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="sign-input">
                                <span>Pseudo</span>
                                <input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)}></input>
                            </div>
                            <div className="sign-input">
                                <span>Password</span>
                                <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)}></input>
                            </div>
                            <div className="sign-input">
                                <span>Confirm Password</span>
                                <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)}></input>
                            </div>
                            <span>{errorMessage}</span>
                            <button type="submit">Sign up</button>
                        </div>
                    </form>
                    <div className="sign-left-bottom signup" style={{display: "flex", justifyContent: 'flex-end'}}>
                        <Link to={"/signin"}>
                            <span>Sign in</span>
                            <ArrowForwardIcon />
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