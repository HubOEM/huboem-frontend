import { types } from "../actions";
const { CREATE_SESSION: SESSION_HEADER } = types;


const initialState = {
    loggedIn: false,
    loading: false,
    error: null, 
    token: null,
    user_id: null,
};

const sessionReducer = (state= initialState, action) => {
    switch(action.type) {
        case SESSION_HEADER.CREATE_SESSION_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false,
                error: null,
                token: action.payload.auth_token, // Store the token in the state
                user_id: action.payload.user_id
            };

        default:
            return state;
    }
}

export default sessionReducer;
