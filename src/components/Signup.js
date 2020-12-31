import React, { useState , useContext} from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import NavBar from './Navbar'
import FormError from '../addOns/fromError-com';
import FormSuccess from '../addOns/SignupSuccess';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../context/AuthContext';



function SignUp() {
   
    const authContext = useContext(AuthContext);
    const [signupError, setSignupError] = useState(false);
    const [signupSucess, setSignupSuccess] = useState(false);
    const [signUpSuccessText,setSignupSuccessText] = useState();
    const [signUpErrorText,setSignupErrorText] = useState();
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

            const { data } = await axios.post("http://localhost:5000/signup", user);
            authContext.setAuthState(data);
            setSignupSuccess(true);
            setSignupError(false);
            setSignupSuccessText(data.message);
            setTimeout(() => {
                setRedirectOnLogin(true)
            }, 1100);
        } catch (error) {
            const { data } = error.response;
            setSignupSuccess(false);
            setSignupError(true);
            setSignupErrorText(data.message);
        }
    }

    

    return (
        <>
            {redirectOnLogin && <Redirect to="/place-bet" />}

            <div>
                <NavBar />

                <form>
                    <br />
                    <br />
                    <br />
               
                    
                    <h3 className="not-sh">Sign Up</h3>

                   {signupError && <FormError text={signUpErrorText} />}
                   {signupSucess && <FormSuccess text={signUpSuccessText} />}
                    
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
                    
                    <button type="submit" onClick={clickHandle} className="btn btn-success btn-primary">Sign Up <FontAwesomeIcon icon={faUserPlus} /> </button>
                    <br />
                    <br />
                </form>
            </div>
        </>
    );
};


export default SignUp;
