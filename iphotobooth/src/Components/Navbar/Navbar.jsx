import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/Storecontext';
import axios from 'axios';
import { assets } from '../../assets/assest';

const Navbar = ({ setshowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartItems, url, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const [list, setList] = useState([]);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const fetch = async () => {
            await fetchList(localStorage.getItem("token"));
        };
        fetch();
    }, [token]);

    const fetchList = async (token) => {
        try {
            const response = await axios.get(`${url}/api/user/profile`, { headers: { token } });
            if (response.data.success) {
                setList(response.data.data || []);
            } else {
                console.error("Error fetching list:", response.data.message);
                setList([]);
            }
        } catch (error) {
            console.error("Error fetching list", error);
            setList([]);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    return (
        <div className="navbar">
            <div className="header">
                <div className="logo">
                    <Link to={`/`}>
                        <img src={assets.logo} alt='logo' className='logo'></img>
                    </Link>
                    <div className="mob-profile-img">
                        {token && list.length > 0 ?
                            list.map((item, index) => {
                                return (
                                    <div key={item._id || index} className="profile-img-box">
                                        <div className="profile-image">
                                             <img src={item.image.url} alt="user" />
                                        </div>
                                        <div className="hover-board-mob">
                                            <ul>
                                                <li>Profile</li>
                                                <Link to={`/Order`}>
                                                    <li>Order</li>
                                                </Link>
                                                <li onClick={logout}>Log-out</li>
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })
                            : ""}
                    </div>
                </div>
                <div className="menu">
                    <ul className="menu-content">
                        <li className={menu === "home" ? "active" : ""}>
                            <Link to={`/`} onClick={() => setMenu("home")} className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className={menu === "categories" ? "active" : ""}>
                            <Link to={`/categories`} onClick={() => setMenu("categories")} className='nav-link'>
                                Categories
                            </Link>
                        </li>
                        <li onClick={() => setMenu("aboutus")} className={menu === "aboutus" ? "active" : ""}>About Us</li>
                        <li className={menu === "catalouge" ? "active" : ""}>
                            <Link to={`/Catalouge`} onClick={() => setMenu("catalouge")}>
                                Catalouge
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="login">
                    <div className="cart-img">
                        <Link to={`/cart`}>
                            <img src={assets.cart} alt="cart" ></img>
                        </Link>
                        <div className={cartItems && Object.keys(cartItems).length === 0 ? "cart-value-display" : "cart-value"}>
                            {cartItems ? Object.keys(cartItems).length : 0}
                        </div>
                        {!token ?
                            <button onClick={() => setshowLogin(true)} className="log-in">Log-In</button>
                            :
                            <div>
                                {Array.isArray(list) && list.map((item, index) => (
                                    <div key={index}>
                                        <div className="profile-img">
                                            <img src={item.image.url} alt="" id='profile-img-img' />
                                        </div>
                                        <div className="hover-board">
                                            <ul>
                                                <Link to={`/Profile`}>
                                                    <li>Profile</li>
                                                </Link>
                                                <Link to={`/Order`}>
                                                    <li>Order</li>
                                                </Link>
                                                <li onClick={logout}>Log-out</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <div className="hamburger" onClick={handleMenuToggle}>
                    <Link to={`/cart`}>
                        <img className="mob-cart-img" src={assets.cart} alt="cart" ></img>
                    </Link>
                    <div className={cartItems && Object.keys(cartItems).length === 0 ? "mob-cart-value-display" : "cart-value"}>
                        {cartItems ? Object.keys(cartItems).length : 0}
                    </div>
                    <img src={assets.hamburger} alt='hamburger'></img>
                </div>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu">
                    <ul className="menu-content">
                        <li className={menu === "home" ? "active" : ""}>
                            <Link to={`/`} onClick={() => setMenu("home")} className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className={menu === "categories" ? "active" : ""}>
                            <Link to={`/categories`} onClick={() => setMenu("categories")} className='nav-link'>
                                Categories
                            </Link>
                        </li>
                        <li onClick={() => setMenu("aboutus")} className={menu === "aboutus" ? "active" : ""}>About Us</li>
                        <li onClick={() => setMenu("contactus")} className={menu === "contactus" ? "active" : ""}>Contact Us</li>
                    </ul>
                    {!token ?
                        <button className="mobile-button" onClick={() => setshowLogin(true)}>Log-In</button>
                        : Array.isArray(list) && list.map((item, index) => {
                            return (
                                <div key={index} className="username">
                                    <p>{item.name}</p>
                                </div>
                            );
                        })
                    }
                </div>
            )}
        </div>
    );
};

export default Navbar;
