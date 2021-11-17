import { MY_COURSE_FAIL, MY_COURSE_REQUEST, MY_COURSE_SUCCESS } from "../constants/myCourseConstants";

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