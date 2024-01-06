import React from "react";
import logo from "../../Assets/logo.png";
import "./Footer2.css";
import pay from "../../Assets/images/pay.png";
import social from "../../Assets/images/social.png";
import { Link } from "react-router-dom";
const Footer2 = () => {
  return (
    <div className="footer2">
      <div className="footerin1">
        <div className="f1">
          <img className="logo" src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            molestiae nisi ab quas beatae minus nulla facere deserunt placeat
            nostrum laborum, dolorum id error quaerat? Harum explicabo nihil
            repudiandae veniam molestias iusto pariatur rem illo quia.
          </p>
          <img src={social} alt="social" />
        </div>
        <div className="f2">
          <h3>About Us</h3>
          <Link to="/about" className="stylenone">
            <p>About Us</p>
          </Link>
          <Link to="/contact" className="stylenone">
            <p> Contact Us</p>
          </Link>
          <p>About team</p>
          <p>Customer support</p>
        </div>
        <div className="f2">
          <h3>Our information</h3>
          <Link className="stylenone" to="/privacypolicy">
            <p>Privacy Policy</p>
          </Link>{" "}
          <Link className="stylenone" to="/termsandconditions">
            <p>Terms and conditions</p>
          </Link>
          <p>Return Policy</p>
          <p>Site map</p>
        </div>
        <div className="f2">
          <h3>Community</h3>
          <p>Announcements</p>
          <p>Answer center</p>
          <p>Discussion Boards</p>
          <p>Giving works</p>
        </div>
        <div className="f2">
          <h3>Subscribe now</h3>
          <p>
            Subscribe your email for newsletter and featured new based on your
            interest
          </p>
          <div className="input_container">
            <span className="icon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="email"
              >
                <path
                  fill="#222"
                  d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
                ></path>
                <path
                  fill="#222"
                  d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
                ></path>
                <path
                  fill="#222"
                  d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
                ></path>
              </svg>
            </span>
            <input type="text" placeholder="Enter your email" />
            <span className="icon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="footerin2">
        <h3>Copyright 2023 Lorem ipsum dolor sit.</h3>
        <img src={pay} alt="pay" />
      </div>
    </div>
  );
};

export default Footer2;
