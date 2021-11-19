import axios from "axios";
import {
    SYS_INS_FAIL,
    SYS_INS_REQUEST,
    SYS_INS_SUCCESS,
    SYS_LEARNER_FAIL,
    SYS_LEARNER_REQUEST,
    SYS_LEARNER_SUCCESS,
    SYS_COURSE_FAIL,
    SYS_COURSE_REQUEST,
    SYS_COURSE_SUCCESS,
} from "../constants/adminConstants.js";

export const getSysLearner = () => async (dispatch) => {
    try {
        dispatch({
            type: SYS_LEARNER_REQUEST,
        });
        const { data } = await axios.get("/api/users/learner");

        dispatch({
            type: SYS_LEARNER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SYS_LEARNER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getSysIns = () => async (dispatch) => {
    try {
        dispatch({
            type: SYS_INS_REQUEST,
        });
        const { data } = await axios.get("/api/users/ins");

        dispatch({
            type: SYS_INS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SYS_INS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getSysCourse = () => async (dispatch) => {
    try {
        dispatch({
            type: SYS_COURSE_REQUEST,
        });
        const { data } = await axios.get("/api/course");

        dispatch({
            type: SYS_COURSE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SYS_COURSE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
