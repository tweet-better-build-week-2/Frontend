import { LOGIN_START, LOGIN_SUCCESS, ANALYZE_START, ANALYZE_SUCCESS } from "../actions";

const initialState = {
    error: "",
    fetchingData: false,
    isLoggingIn: false,
    score: ""
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
        case ANALYZE_START:
            return {
                ...state,
                fetchingData: true
            };
        case ANALYZE_SUCCESS:
            return {
                ...state,
                score: action.payload
            }
        default:
            return state;
    }
}

export default reducer;