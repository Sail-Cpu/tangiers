import React, { useState } from "react";
import axios from 'axios';
/* img */
import Logo from '../../assets/img/logo.png';
import LogoTangiers from '../../assets/img/logo-tangiers.png';
import SignUpImg from '../../assets/img/sign-up-img.png';

const SignUp = () => {

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
            <div className="sign-up-container">
                <div className="sign-up-left">
                    <div className="sign-up-left-top">
                        <img className="sign-up-top-logo" src={LogoTangiers} />
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
                            <button type="submit">Submit</button>
                        </div>
                    </form> 
                </div>
                <div className="sign-up-right" style={{backgroundImage: `url(${SignUpImg})`, backgroundSize: 'cover'}}></div>
                <div></div>
            </div>
        </div>
    )
}

export default SignUp;