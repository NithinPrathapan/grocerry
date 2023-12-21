import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
import { Link } from "react-router-dom";
import './AuthPage.css'

const Login = () => {
  return (
    <div className="authpage">
      <Navbar />
      <div className="authcont">
        <img
          src="https://images.unsplash.com/photo-1631880383152-f29099b0fd16?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D"
          alt="login"
        />
        <form action="" className="authform">
          <h1>Login</h1>
          <div className="formgroup">
            <label htmlFor="">Email</label>
            <input type="text" name="" id="email" />
          </div>
          <div className="formgroup">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="password" />
          </div>
          <Link className="stylenone" to="/forgotpassword">
            <p>Forgot password?</p>
          </Link>
          <Link className="stylenone" to="/">
            <button className="btn">Login</button>
          </Link>
          <h2 className="or">OR</h2>
          <Link className="stylenone" to="/signup">
            <button className="btn">Signup</button>
          </Link>
        </form>
      </div>
      {/* <Footer1 />
      <Footer2 /> */}
    </div>
  );
};

export default Login;
