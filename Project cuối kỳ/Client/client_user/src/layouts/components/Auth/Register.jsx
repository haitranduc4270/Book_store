import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Si1Password } from "react-icons/si";

import "./Auth.scss";
import images from "~/assets/images";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <form action="" className="register_wrap">
            <span className="img_logo">
                <img className="img" src={images.logo} alt="" />
            </span>
            <h1 className="title">Register</h1>

            <div className="input_wrap">
                <MdDriveFileRenameOutline className="icon" />
                <input type="text" placeholder="Name" />
            </div>

            <div className="input_wrap">
                <BsFillPersonFill className="icon" />
                <input type="text" placeholder="Email" />
            </div>

            <div className="input_wrap">
                <RiLockPasswordFill className="icon" />
                <input type="password" placeholder="Password" />
            </div>
            <div className="input_wrap">
                <Si1Password className="icon" />
                <input type="password" placeholder="Confirm Password" />
            </div>
            <button className="register_btn">Register</button>

            <span className="navi_wrap">
                <p className="text">Do not have an account?</p>
                <Link to="/login" className="navi_btn">
                    Login
                </Link>
            </span>
        </form>
    );
};

export default Register;
