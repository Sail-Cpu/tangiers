import React from "react";
/* img */
import Logo from '../../assets/img/logo.png';
import LogoTangiers from '../../assets/img/logo-tangiers.png';
import SignUpImg from '../../assets/img/sign-up-img.png';

const SignUp = () => {
    return(
        <div className="sign-page">
            <img className="sign-page-logo" src={Logo} />
            <div className="sign-up-container">
                <div className="sign-up-left">
                    <div className="sign-up-left-top">
                        <img className="sign-up-top-logo" src={LogoTangiers} />
                    </div>
                    <form>
                        <h1>Sign up</h1>
                        <div className="sign-input-container">
                            <div className="sign-input">
                                <span>Mail address</span>
                                <input type="text"></input>
                            </div>
                            <div className="sign-input">
                                <span>Pseudo</span>
                                <input type="text"></input>
                            </div>
                            <div className="sign-input">
                                <span>Password</span>
                                <input type="text"></input>
                            </div>
                            <div className="sign-input">
                                <span>Confirm Password</span>
                                <input type="text"></input>
                            </div>
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