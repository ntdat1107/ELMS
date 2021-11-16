import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"
import axios from 'axios'


export const login = (accountID, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/users/login', { accountID, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}


export const register = (firstName, lastName, email, 
        accountID, password, isLearner, isIns) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/users', { firstName, lastName, email, 
            accountID, password, isLearner, isIns }, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}



export const profile = (accountID, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_PROFILE_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/users/profile', { accountID, password }, config)

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        })
        
        localStorage.setItem('userProfile', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT})
}