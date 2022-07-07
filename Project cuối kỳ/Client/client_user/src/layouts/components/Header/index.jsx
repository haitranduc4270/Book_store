import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

import "./Header.scss";
import images from "~/assets/images";
import Search from "../Search";
import Button from "~/components/Button";

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);

    const handleShowSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <header className="header">
            {/* Logo */}
            <Link to="/" className="logo">
                <img src={images.logo} alt="" className="logo_img" />
            </Link>

            {/* Action */}
            <div className="action">
                <div className="action_page">
                    <NavLink
                        activeclassname="active"
                        to="/"
                        className="page_item"
                    >
                        <p>Home</p>
                    </NavLink>
                    <NavLink
                        activeclassname="active"
                        to="/book"
                        className="page_item"
                    >
                        <p>Our Book</p>
                    </NavLink>
                    <NavLink
                        activeclassname="active"
                        to="/contact"
                        className="page_item"
                    >
                        <p>Contact Us</p>
                    </NavLink>
                </div>

                <div className="action_user">
                    <div className="search icon_wrap">
                        <BiSearchAlt2
                            className="icon"
                            onClick={handleShowSearch}
                        />
                    </div>

                    {/* <>
                        <Button
                            to="/register"
                            disable
                            className="disable outline header_btn"
                        >
                            Register
                        </Button>
                        <Button to="/login" className="outline header_btn">
                            Login
                        </Button>
                    </> */}

                    <Link to="/cartOrder" className="cart icon_wrap">
                        <BsCartCheck className="icon" />
                    </Link>

                    <div className="user">
                        <div className="user_avatar">
                            <img
                                className="img"
                                src="https://images.unsplash.com/photo-1644982652061-df82282e178d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                        </div>
                        <div className="user_text">
                            <p className="user_hello">Hello,</p>
                            <p className="user_name">Nguyễn Phương Nam</p>
                        </div>

                        <div className="dropdown">
                            <RiArrowDropDownLine className="dropdown_icon" />

                            <div className="user_action">
                                <Link
                                    to="/@profile"
                                    className="user_action-item"
                                >
                                    <p>Edit Profile</p>
                                </Link>
                                <Link to="/login" className="user_action-item">
                                    <p>Logout</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Book */}
            {/* {showSearch && <Search />} */}
            <Search style={showSearch ? "active" : ""} />
        </header>
    );
};

export default Header;
