import {
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    REMOVE_PROFILE,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_PROFILE_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_RESET,
    USER_UPDATE_PROFILE_SUCCESS,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    KICK_USER_REQUEST,
    KICK_USER_SUCCESS,
    KICK_USER_FAIL,
    RESET_PASS_REQUEST,
    RESET_PASS_SUCCESS,
    RESET_PASS_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const login = (accountID, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.post("/api/users/login", { accountID, password }, config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const register =
    (firstName, lastName, email, accountID, password, isLearner, isIns) => async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST,
            });
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/api/users",
                {
                    firstName,
                    lastName,
                    email,
                    accountID,
                    password,
                    isLearner,
                    isIns,
                },
                config
            );

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

export const getUserProfile = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_PROFILE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/users/${id}`, config);

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userDetail", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
};

export const removeProfile = () => (dispatch) => {
    localStorage.removeItem("userDetail");
    dispatch({ type: REMOVE_PROFILE });
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.put(`/api/users/profile`, user, config);

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userDetail", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getUserDetailByID = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST,
        });
        const { data } = await axios.get(`/api/users/getby/${id}`);

        dispatch({
            type: GET_USER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteUserNow = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_USER_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.delete(`/api/users/delete/${id}`, config);

        dispatch({ type: DELETE_USER_SUCCESS });
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const kickUser = (id, fastName) => async (dispatch, getState) => {
    try {
        dispatch({
            type: KICK_USER_REQUEST
        })
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        await axios.delete(`/api/users/delete/${id}/${fastName}`, config)
        dispatch({type: KICK_USER_SUCCESS})
    } catch (error) {
        dispatch({
            type: KICK_USER_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}


export const resetNewPass = (inform) => async (dispatch) => {
    try {
        dispatch({
            type: RESET_PASS_REQUEST,
        });

        const config = {
            headers: {
                "Content-type": "application/json",
            }
        }
        const { data } = await axios.put(`/api/users/reset`, inform, config);

        dispatch({
            type: RESET_PASS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: RESET_PASS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};