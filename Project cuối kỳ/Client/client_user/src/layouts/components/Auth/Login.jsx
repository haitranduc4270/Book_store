import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

import "./Auth.scss";
import images from "~/assets/images";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <form action="" className="login_wrap">
            <span className="img_logo">
                <img className="img" src={images.logo} alt="" />
            </span>
            <h1 className="title">Login</h1>

            <div className="input_wrap">
                <BsFillPersonFill className="icon" />
                <input type="text" placeholder="Email" />
            </div>

            <div className="input_wrap">
                <RiLockPasswordFill className="icon" />
                <input type="password" placeholder="Password" />
            </div>
            <button className="login_btn">Login</button>

            <span className="navi_wrap">
                <p className="text">Do not have an account?</p>
                <Link to="/register" className="navi_btn">
                    Register
                </Link>
            </span>
        </form>
    );
};

export default Login;
