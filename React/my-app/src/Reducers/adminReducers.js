import { SYS_INS_FAIL, SYS_INS_REQUEST, SYS_INS_SUCCESS, SYS_LEARNER_FAIL,
    SYS_LEARNER_REQUEST, SYS_LEARNER_SUCCESS } from "../constants/adminConstants.js"

export const sysLearnerReducer = (state = { sysLearnerList: [] }, action) => {
    switch (action.type) {
        case SYS_LEARNER_REQUEST:
            return { loading: true, sysLearnerList: [] }
        case SYS_LEARNER_SUCCESS:
            return { loading: false, sysLearnerList: action.payload }
        case SYS_LEARNER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const sysInsReducer = (state = { sysInsList: [] }, action) => {
    switch (action.type) {
        case SYS_INS_REQUEST:
            return { loading: true, sysInsList: [] }
        case SYS_INS_SUCCESS:
            return { loading: false, sysInsList: action.payload }
        case SYS_INS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}