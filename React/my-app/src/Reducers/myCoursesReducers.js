import { ADD_COURSE_FAIL, ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS, 
    MY_COURSE_FAIL, MY_COURSE_REQUEST, MY_COURSE_SUCCESS, MY_ONE_COURSE_FAIL, 
    MY_ONE_COURSE_REQUEST, MY_ONE_COURSE_SUCCESS } from "../constants/myCourseConstants";

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
            return { loading: true, courseInfo: action.payload }
        case ADD_COURSE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}