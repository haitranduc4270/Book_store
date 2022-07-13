export const getUserById = (id, usersData) => {
    const userData = usersData.find((user) => {
        return user._id === id;
    });
    return userData;
};

export const postUserLogin = (loginForm, usersData) => {
    const userData = usersData.find((user) => {
        return (
            user.email === loginForm.email &&
            user.publicKey === loginForm.password
        );
    });

    return userData;
};
