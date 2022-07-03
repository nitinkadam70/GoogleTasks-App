// import 'dotenv/config' 

//signup
export const GET_SIGNUP_LOADING = "GET_SIGNUP_LOADING"
export const GET_SIGNUP_SUCCESS = "GET_SIGNUP_SUCCESS"
export const GET_SIGNUP_ERROR = "GET_SIGNUP_ERROR"

//signup
const getSignuploading = () => ({
    type: GET_SIGNUP_LOADING
})
const getSignupSuccess = (payload) => ({
    type: GET_SIGNUP_SUCCESS,
    payload
})
const getSignupError = () => ({
    type: GET_SIGNUP_ERROR
})

export const getSignupToken = (payload) => (dispatch) => {
    dispatch(getSignuploading())
    fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: payload
    })
        .then((res) => res.json())
        .then((res) => dispatch(getSignupSuccess(res.token)))
        .catch((err) => dispatch(getSignupError()))
}


