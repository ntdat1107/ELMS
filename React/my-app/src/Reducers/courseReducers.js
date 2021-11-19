import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_DETAIL_REQUEST,
  COURSE_DETAIL_SUCCESS,
  COURSE_DETAIL_FAIL,
  COURSE_DETAIL_RATE_REQUEST,
  COURSE_DETAIL_RATE_SUCCESS,
  COURSE_DETAIL_RATE_FAIL,
  COURSE_CREATE_REVIEW_REQUEST,
  COURSE_CREATE_REVIEW_SUCCESS,
  COURSE_CREATE_REVIEW_FAIL,
  COURSE_CREATE_REVIEW_RESET,
} from "../constants/courseConstants";

export const courseListReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case COURSE_LIST_REQUEST:
      return { loading: true, courses: [] };
    case COURSE_LIST_SUCCESS:
      return { loading: false, courses: action.payload };
    case COURSE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const courseReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case COURSE_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case COURSE_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case COURSE_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const courseDetailReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case COURSE_DETAIL_REQUEST:
      return { loading: true, course: {} };
    case COURSE_DETAIL_SUCCESS:
      return { loading: false, course: action.payload };
    case COURSE_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const courseDetailRateReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case COURSE_DETAIL_RATE_REQUEST:
      return { loading: true, course: {} };
    case COURSE_DETAIL_RATE_SUCCESS:
      return { loading: false, course: action.payload };
    case COURSE_DETAIL_RATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
