export const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "CARTS_LOADED_SUCCESS":
            return {
                ...state,
                carts: payload,
                cartsLoading: false,
            };
        default:
            return state;
    }
};
