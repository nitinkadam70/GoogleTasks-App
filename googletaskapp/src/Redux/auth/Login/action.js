// import 'dotenv/config' 
//login
export const GET_LOGIN_LOADING = "GET_LOGIN_LOADING"
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS"
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR"

//login

const getLoginloading = () => ({
    type: GET_LOGIN_LOADING
})
const getLoginSuccess = (payload) => ({
    type: GET_LOGIN_SUCCESS,
    payload
})
const getLoginError = (payload) => ({
    type: GET_LOGIN_ERROR,
    payload
})



export const getLoginToken = (payload) => (dispatch) => {
    dispatch(getLoginloading())
    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: payload
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.message) {
                dispatch(getLoginError(res.message))
            }
            else {
                dispatch(getLoginSuccess(res))
            }
        })
        .catch((err) => dispatch(getLoginError(err)))
}