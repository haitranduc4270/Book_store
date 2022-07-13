import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Si1Password } from "react-icons/si";

import "./Auth.scss";
import images from "~/assets/images";
import { Link } from "react-router-dom";

const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Your name is required!"),
            email: Yup.string()
                .required("Your email is required")
                .matches(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "Please enter a valid email address"
                ),
            password: Yup.string()
                .required("Password is required!")
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,16}$/,
                    "Password must be 7-16 characters and contain at least one letter, one number and a special character"
                ),
            confirmPassword: Yup.string()
                .required("Confirm password is required!")
                .oneOf([Yup.ref("password"), null], "Password must match"),
        }),
        onSubmit: (values) => {
            // Handle form submit
            console.log(values);
        },
    });

    return (
        <form
            action=""
            className="register_wrap"
            onSubmit={formik.handleSubmit}
        >
            <span className="img_logo">
                <img className="img" src={images.logo} alt="" />
            </span>
            <h1 className="title">Register</h1>

            <div className="input_wrap">
                <div className="input">
                    <MdDriveFileRenameOutline className="icon" />
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder="Enter your name"
                    />
                </div>
                {formik.errors.name && (
                    <p className="error_mess">{formik.errors.name}</p>
                )}
            </div>

            <div className="input_wrap">
                <div className="input">
                    <BsFillPersonFill className="icon" />
                    <input
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Enter your email"
                    />
                </div>
                {formik.errors.email && (
                    <p className="error_mess">{formik.errors.email}</p>
                )}
            </div>

            <div className="input_wrap">
                <div className="input">
                    <RiLockPasswordFill className="icon" />
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Enter your password"
                    />
                </div>
                {formik.errors.password && (
                    <p className="error_mess">{formik.errors.password}</p>
                )}
            </div>
            <div className="input_wrap">
                <div className="input">
                    <Si1Password className="icon" />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        placeholder="Confirm your password"
                    />
                </div>
                {formik.errors.confirmPassword && (
                    <p className="error_mess">
                        {formik.errors.confirmPassword}
                    </p>
                )}
            </div>
            <button type="submit" className="register_btn">
                Register
            </button>

            <span className="navi_wrap">
                <p className="text">Do you have an account?</p>
                <Link to="/login" className="navi_btn">
                    Login
                </Link>
            </span>
        </form>
    );
};

export default Register;
