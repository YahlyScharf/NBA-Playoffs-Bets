import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import NavBar from './Navbar'
import FormError from '../addOns/fromError-com';
import FormSuccess from '../addOns/SigninSuccess';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






function SignIn() {
    const authContext = useContext(AuthContext);
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);
    const [signInError, setSignInError] = useState(false);
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [signInErrorText, setSignInErrorText] = useState();
    const [signInSuccessText, setSignInSuccessText] = useState();



    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function changeHandle(e) {
        const { name, value } = e.target;

        setUser(prevValue => {
            if (name === "email") {
                return {
                    email: value,
                    password: prevValue.password
                }
            } else if (name === "password") {
                return {
                    email: prevValue.email,
                    password: value
                }
            }
        })
    };



    async function clickHandle(e) {
        try {
            e.preventDefault();
            const { data } = await axios.post("http://localhost:5000/signin", user)
            authContext.setAuthState(data);
            const hasBetCon = data.userInfo.hasBet;
            setSignInError(false);
            setSignInSuccess(true)
            setSignInSuccessText(data.message);
            if (hasBetCon === false) {
                setTimeout(() => {
                    setRedirectOnLogin(false)
                }, 2500)
            }
            setTimeout(() => {
                setRedirectOnLogin(true)
            }, 2500)

        } catch (error) {
            const { data } = error.response;
            setSignInError(true);
            setSignInSuccess(false)
            setSignInErrorText(data.message);
        }

    }

    return (
        <>
            {redirectOnLogin && <Redirect to="/dashboard" />}
            <div>


                <NavBar />

                <form>
                    <br />
                    <br />
                    <div>
                    <p className="forgot-password text-middle not-h">
                            Not registered? <Link to={"/signup"}>Sign Up </Link>
                        </p>
                        <h3 className="not-h">Sign In</h3>
                        {signInError && <FormError text={signInErrorText} />}
                        {signInSuccess&& <FormSuccess text={signInSuccessText} />}
                        <div className="form-group">
                            <label className="not" htmlFor="email">Email</label>
                            <br />
                            <input type="email" onChange={changeHandle} name="email" id="email" className="form-control-lg" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label className="not" htmlFor="password">Password</label>
                            <br />
                            <input type="password" onChange={changeHandle} name="password" id="password" className="form-control-lg" placeholder="Enter password" />
                        </div>

                        <button type="submit" onClick={clickHandle} className="btn btn-primary btn-success">Login <FontAwesomeIcon icon={faSignInAlt} /></button>
                        <br />
                        <br />
                        
                    </div>
                </form>
            </div>

        </>
    )
}




export default SignIn;