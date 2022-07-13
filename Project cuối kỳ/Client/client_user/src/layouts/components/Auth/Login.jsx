import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

import "./Auth.scss";
import images from "~/assets/images";
import { UserContext } from "~/contexts/UserContext";

const Login = () => {
    //  Handle Context
    const { loginUser } = useContext(UserContext);

    let errorMess = null;
    const handleLogin = async (loginForm) => {
        try {
            const loginData = await loginUser(loginForm);

            if (loginData === undefined) {
                errorMess = "Email or password is incorrect!";
            }
            console.log(errorMess);
        } catch (error) {
            console.log(error);
        }
    };

    // Handle input by fomik
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Your email is required")
                .matches(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "Please enter a valid email address"
                ),
            password: Yup.string().required("Password is required!"),
            // .matches(
            //     "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
            //     "Minimum eight characters, at least one letter and one number"
            // ),
        }),
        onSubmit: (values) => {
            // console.log(values);
            handleLogin(values);
        },
    });

    return (
        <form action="" className="login_wrap" onSubmit={formik.handleSubmit}>
            <span className="img_logo">
                <img className="img" src={images.logo} alt="" />
            </span>
            <h1 className="title">Login</h1>

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
                <p className="error_mess">{errorMess}</p>
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
                {errorMess !== null && (
                    <p className="error_mess">{errorMess}</p>
                )}
            </div>
            <button type="submit" className="login_btn">
                Login
            </button>

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
