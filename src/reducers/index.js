import { LOGIN_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
    error: "",
    fetchingData: false,
    isLoggingIn: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false
            };
        default:
            return state;
    }
}

export default reducer;