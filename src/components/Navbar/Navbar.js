import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from '../Images/Logo.png';
import CityDropdown from '../Mainsources/CityDropDown/CityDropDown';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-top">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="search-container">
                    <label className="search-label">Search</label>
                    <div className="search-bar">
                        <input type="text" placeholder="Search for Museums, Events....." />
                    </div>
                </div>

                <div className="city-dropdown">
                    <CityDropdown />
                </div>

                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button>Sign Up</button>
                </div>
            </div>

            <div className="navbar-bottom">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/guidebot">GuideBot</Link></li>
                    <li><Link to="/helpcenter">Help Center</Link></li>
                </ul>
            </div>
        </div>
    );
};


export default Navbar;
