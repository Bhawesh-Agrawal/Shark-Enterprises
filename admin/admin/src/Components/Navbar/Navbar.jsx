import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="header">
                <div className="logo">
                    <Link to={`/`}>
                        <img src={assets.logo} alt='logo' className='logo'></img>
                    </Link>
                    <p>Admin Panel</p>
                </div>
                <div className="profile">
                    <img src={assets.user} alt={assets.user} />
                </div>
            </div>
        </div>
    )
};

export default Navbar;