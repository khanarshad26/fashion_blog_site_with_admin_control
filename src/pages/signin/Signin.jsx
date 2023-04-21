import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const SigninHandler = async (e) => {
    e.preventDefault();
    if(email.current.value === 'arshad@panda.com' && password.current.value === '1234') {
      console.log('succesfull signin');
      navigate('/admin');
    }
    console.log('fuck you');
  };

  return (
    <>
      <div className="signin">
        <div className="logoText2">Commune</div>
        <div className="signupBox">
          <form onSubmit={SigninHandler} className="form">
            <div className="inputContainer">
              <label className="label">
                Email
              </label>
              <input type="email" className="input" ref={email} />
            </div>

            <div className="inputContainer">
              <label className="label">
                Password
              </label>
              <input type="password" className="input" ref={password} />
            <div className="forgotPassword">
          </div>
        </div>
        <input type="submit" className="submitBtn" value="Sign in" />
      </form>
          <hr className='hr' />

          <div className="loginDirect">
            New to Commune?&nbsp;<Link to='/register' className="iink">Join now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
