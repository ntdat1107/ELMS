import { MY_LEARNER_FAIL, MY_LEARNER_REQUEST, MY_LEARNER_SUCCESS } from "../constants/myLearnerConstants.js";

export const myLearnerReducer = (state = { learnerList: [] }, action) => {
    switch (action.type) {
        case MY_LEARNER_REQUEST:
            return { loading: true, learnerList: [] }
        case MY_LEARNER_SUCCESS:
            return { loading: false, learnerList: action.payload }
        case MY_LEARNER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}