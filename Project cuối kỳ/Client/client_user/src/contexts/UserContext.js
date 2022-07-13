import { createContext, useReducer } from "react";
import { userReducer } from "~/reducers/userReducer";
import request from "~/utils/httpRequest";

import * as fakeFuncUser from "~/Fake/user";
import config from "~/Config";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(userReducer, {
        userData: null,
        loading: true,
        isAuthenticated: false,
    });

    // Login
    const loginUser = async (userForm) => {
        request
            .get("users")
            .then((res) => {
                console.log(res.data);
                console.log(userForm);
                const data = fakeFuncUser.postUserLogin(userForm, res.data);
                console.log(data);

                if (!!data) {
                    localStorage.setItem(
                        config.LOCAL_STORAGE_TOKEN_NAME,
                        data.publicKey
                    );
                    return data;
                } else {
                    return {
                        messError: "Email or password is incorrect!",
                    };
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Get User data (include: userInfo, userCart)
    const getUserData = async () => {
        request
            .get("users?_id=1")
            .then((res) => {
                dispatch({
                    type: "USER_DATA_LOADED_SUCCESS",
                    payload: res.data,
                });

                console.log(res.data);
            })
            .catch((err) => {
                dispatch({
                    type: "USER_DATA_LOADED_FAILD",
                });
            });
    };

    // Context data
    const useContextData = { userState, getUserData, loginUser };

    // Return provider
    return (
        <UserContext.Provider value={useContextData}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
