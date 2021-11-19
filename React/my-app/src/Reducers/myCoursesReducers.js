import { ADD_COURSE_FAIL, ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS, 
    DELETE_COURSE_FAIL, 
    DELETE_COURSE_REQUEST, 
    DELETE_COURSE_SUCCESS, 
    ENROLL_COURSE_FAIL, 
    ENROLL_COURSE_REQUEST, 
    ENROLL_COURSE_SUCCESS, 
    MY_COURSE_FAIL, MY_COURSE_REQUEST, MY_COURSE_SUCCESS, 
    MY_LEARNER_FAIL, MY_LEARNER_REQUEST, MY_LEARNER_SUCCESS, 
    MY_ONE_COURSE_FAIL, MY_ONE_COURSE_REQUEST, MY_ONE_COURSE_SUCCESS } from "../constants/myCourseConstants";

export const myCoursesReducer = (state = {}, action) => {
    switch (action.type) {
        case MY_COURSE_REQUEST:
            return { loading: true }
        case MY_COURSE_SUCCESS:
            return { loading: false, myCoursesList: action.payload }
        case MY_COURSE_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const myOneCourseReducer = (state = { myOneCourseDetail: {} }, action) => {
    switch (action.type) {
        case MY_ONE_COURSE_REQUEST:
            return { loading: true }
        case MY_ONE_COURSE_SUCCESS:
            return { loading: false, myOneCourseDetail: action.payload }
        case MY_ONE_COURSE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const addCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_COURSE_REQUEST:
            return { loading: true }
        case ADD_COURSE_SUCCESS:
            return { loading: false, courseInfo: action.payload }
        case ADD_COURSE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const enrollCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case ENROLL_COURSE_REQUEST:
            return { loading: true }
        case ENROLL_COURSE_SUCCESS:
            return { loading: false, success: true }
        case ENROLL_COURSE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getMyLearnersIDReducer = (state = {}, action) => {
    switch (action.type) {
        case MY_LEARNER_REQUEST:
            return { loadingLearner: true}
        case MY_LEARNER_SUCCESS:
            return { loadingLearner: false, myLearnerList: action.payload }
        case MY_LEARNER_FAIL:
            return { loadingLearner: false, errorLearner: action.payload }
        default:
            return state
    }
}


export const courseDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_COURSE_REQUEST:
            return { loading: true }
        case DELETE_COURSE_SUCCESS:
            return { loading: false, success: true }
        case DELETE_COURSE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}