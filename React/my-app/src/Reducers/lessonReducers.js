import { LESSON_LIST_FAIL, LESSON_LIST_SUCCESS, LESSON_LIST_FAIL, LESSON_DETAIL_REQUEST, LESSON_DETAIL_SUCCESS, LESSON_DETAIL_FAIL } from "../constants/lessonConstants"

export const lessonListReducer = (state = { lessons: [] }, action) => {
    switch (action.type) {
        case LESSON_LIST_REQUEST:
            return { loading: true, lessons: [] }
        case LESSON_LIST_SUCCESS:
            return { loading: false, lessons: action.payload }
        case LESSON_LIST_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const lessonDetailReducer = (state = { lesson: {} }, action) => {
    switch (action.type) {
        case LESSON_DETAIL_REQUEST:
            return { loading: true, lesson: {} }
        case LESSON_DETAIL_SUCCESS:
            return { loading: false, lesson: action.payload }
        case LESSON_DETAIL_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}