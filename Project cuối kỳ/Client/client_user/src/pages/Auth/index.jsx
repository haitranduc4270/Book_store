import React from "react";
import Login from "~/layouts/components/Auth/Login";
import Register from "~/layouts/components/Auth/Register";

import "./Auth.scss";

const Auth = ({ authRoute }) => {
    let body;

    body = (
        <>
            {authRoute === "login" && <Login />}
            {authRoute === "register" && <Register />}
        </>
    );

    return <div className="auth_wrap">{body}</div>;
};

export default Auth;
