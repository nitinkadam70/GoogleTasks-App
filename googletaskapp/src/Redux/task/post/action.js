// import 'dotenv/config' 

import { getTaskToken } from "../Get/action"

//login
export const POST_TASK_LOADING = "POST_TASK_LOADING"
export const POST_TASK_SUCCESS = "POST_TASK_SUCCESS"
export const POST_TASK_ERROR = "POST_TASK_ERROR"

//login

const postTaskloading = () => ({
    type: POST_TASK_LOADING
})
const postTaskSuccess = (payload) => ({
    type: POST_TASK_SUCCESS,
    payload
})
const postTaskError = (payload) => ({
    type: POST_TASK_ERROR,
    payload
})

let userid = localStorage.getItem("userid")

export const postTaskAction = (payload) => (dispatch) => {
    dispatch(postTaskloading())
    fetch(`${process.env.REACT_APP_API_URL}/user/${userid}/task`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: payload
    })
        .then((res) => res.json())
        .then((res) => {
            dispatch(postTaskSuccess(res))
            dispatch(getTaskToken())
        })
        .catch((err) => dispatch(postTaskError(err)))
}