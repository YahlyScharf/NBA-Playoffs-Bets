import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import NavBar from './Navbar'
import FormError from '../formSubmit/fromError-com';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';



function SignIn() {
    const authContext = useContext(AuthContext);
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);
    const [signInError, setSignInError] = useState(false);
    const [signInErrorText, setSignInErrorText] = useState();



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
            setSignInError(false);
            console.log(data);
            setTimeout(() => {
                setRedirectOnLogin(true)
            }, 1000)

        } catch (error) {
            const { data } = error.response;
            setSignInError(true);
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

                        <button type="submit" onClick={clickHandle} className="btn btn-primary">Login</button>
                        <br />
                        <br />
                        
                    </div>
                </form>
            </div>

        </>
    )
}




export default SignIn;