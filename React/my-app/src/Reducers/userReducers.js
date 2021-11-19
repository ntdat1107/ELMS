import {
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
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
} from "../constants/userConstants.js";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userRegInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userProfileReducer = (state = { userDetail: {} }, action) => {
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return { ...state, loading: true };
        case USER_PROFILE_SUCCESS:
            return { loading: false, userDetail: action.payload };
        case USER_PROFILE_FAIL:
            return { loading: false, error: action.payload };
        case REMOVE_PROFILE:
            return {};
        default:
            return state;
    }
};

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true };
        case USER_UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                success: true,
                userProfile: action.payload,
            };
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userDetailByIDReducer = (state = { userInfoByID: {} }, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return { loading: true, userInfoByID: {} };
        case GET_USER_SUCCESS:
            return { loading: false, userInfoByID: action.payload };
        case GET_USER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return { loading: true };
        case DELETE_USER_SUCCESS:
            return { loading: false, success: true };
        case DELETE_USER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
