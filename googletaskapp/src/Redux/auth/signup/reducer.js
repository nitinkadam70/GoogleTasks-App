import { GET_SIGNUP_ERROR, GET_SIGNUP_LOADING, GET_SIGNUP_SUCCESS } from "./action"

const initState = {
    loading: false,
    token: "",
    error: false,
}

export const signupReducer = (state = initState, action) => {

    switch (action.type) {

        case GET_SIGNUP_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload
            }
        case GET_SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                token: "",
                error: true
            }
        default:
            return state
    }
}