import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Navbar = ({ reloadNavbar }) => {
  const [showS3, setShowS3] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const getCartTotal = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let total = 0;
      cart.forEach((item) => {
        total += item.quantity;
      });
      setCartQuantity(total);
    } else {
      setCartQuantity(0);
    }
  };
  useEffect(() => {
    getCartTotal();
  }, [reloadNavbar]);
  return (
    <nav>
      <div className="s1">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for products and category"
            name=""
            id=""
          />
          <button>
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="right">
          <div className="cart">
            <span className="qty">{cartQuantity}</span>
            <Link to="/cart" className="stylenone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="">
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/login">Login</Dropdown.Item>
                <Dropdown.Item href="/signup">Signup</Dropdown.Item>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="s2">
        <Link className="stylenone" to="/">
          <a href="/">Home</a>
        </Link>
        <Link className="stylenone" to="/about">
          <a href="/about">About</a>
        </Link>
        <Link className="stylenone" to="/contact">
          <a href="/contact">Contact</a>
        </Link>

        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            More
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/faq">FAQ</Dropdown.Item>
            <Dropdown.Item href="/privacypolicy">Privacy Policy</Dropdown.Item>
            <Dropdown.Item href="/termsandconditions">
              Terms and Conditions
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {showS3 ? (
        <div className="s3">
          <div className="s31">
            <img src={logo} alt="logo" />
            <svg
              onClick={() => setShowS3(!showS3)}
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search for products and category"
              name=""
              id=""
            />
            <button>
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="s32">
            <ul>
              <li>
                <Link className="stylenone" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    More
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/faq">FAQ</Dropdown.Item>
                    <Dropdown.Item href="/privacypolicy">
                      Privacy Policy
                    </Dropdown.Item>
                    <Dropdown.Item href="/termsandconditions">
                      Terms and Conditions
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Link className="stylenone" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="stylenone" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <div className="cart">
                  <span className="qty">{cartQuantity}</span>
                  <Link to="/cart" className="stylenone">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" variant="">
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/login">Login</Dropdown.Item>
                      <Dropdown.Item href="/signup">Signup</Dropdown.Item>
                      <Dropdown.Item href="/user/yourorders">
                        Your orders
                      </Dropdown.Item>
                      <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="s3">
          <div className="s31">
            <img src={logo} alt="logo" />
            <svg
              onClick={() => {
                setShowS3(!showS3);
              }}
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
