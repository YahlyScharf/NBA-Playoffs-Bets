import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import NavBar from './Navbar'
import FormError from '../formSubmit/fromError-com';
import FormSuccess from '../formSubmit/formSucess-com';

function SignUp() {
   
    const [signupError, setSignupError] = useState(false);
    const [signupSucess, setSignupSuccess] = useState(false);
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    function changeHandle(e) {
        const { name, value } = e.target;

        setUser((prevValue) => {
            if (name === "FN") {
                return {
                    firstName: value,
                    lastName: prevValue.lastName,
                    email: prevValue.email,
                    password: prevValue.password
                }
            } else if (name === "LN") {
                return {
                    firstName: prevValue.firstName,
                    lastName: value,
                    email: prevValue.email,
                    password: prevValue.passwords
                }
            } else if (name === "UN") {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    email: value,
                    password: prevValue.password
                }
            } else if (name === "PS") {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    email: prevValue.email,
                    password: value
                }
            }
        })

    }

    async function clickHandle(e) {
        try {
            e.preventDefault();

            const { data } = await axios.post("http://localhost:5000/signup", user)
            setSignupSuccess(true);
            setSignupError(false);
            setTimeout(() => {
                setRedirectOnLogin(true)
            }, 1000);
        } catch (error) {
            setSignupSuccess(false);
            setSignupError(true);
        }
    }

    return (
        <>
            {redirectOnLogin && <Redirect to="/signin" />}

            <div>
                <NavBar />

                

                <form>
                    <br />
                    <br />
                    <br />
                    <p className="forgot-password text-middle not-h">
                        Already registered? <Link to={"/signin"}>Sign In </Link>
                    </p>
                    
                    <h3 className="not-h">Sign Up</h3>

                   {signupError && <FormError text="Email already resgisterd" />}
                   {signupSucess && <FormSuccess text="Signed up successfully" />}
                   <br />
                   <br />
                    
                    <div className="form-group">
                        <label className="not">First name</label>
                        <br />
                        <input onChange={changeHandle} name="FN" type="text" className="form-control-lg" placeholder="First name" required />
                    </div>

                    <div className="form-group">
                        <label className="not">Last name</label>
                        <br />
                        <input onChange={changeHandle} name="LN" type="text" className="form-control-lg" placeholder="Last name" required />
                    </div>

                    <div className="form-group">
                        <label className="not">Email</label>
                        <br />
                        <input onChange={changeHandle} name="UN" type="email" className="form-control-lg" placeholder="Enter email" required />
                    </div>

                    <div className="form-group">
                        <label className="not">Password</label>
                        <br />
                        <input onChange={changeHandle} name="PS" type="password" className="form-control-lg " placeholder="Enter password" required />
                    </div>

                    <button type="submit" onClick={clickHandle} className="btn btn-primary">Sign Up</button>
                    <br />
                    <br />
              
                </form>
            </div>
        </>
    );
};


export default SignUp;
