import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    courseDetailReducer,
    courseDetailRateReducer,
    courseListReducer,
    courseReviewCreateReducer,
} from "./Reducers/courseReducers";
import {
    userDetailByIDReducer,
    userLoginReducer,
    userProfileReducer,
    userRegisterReducer,
    userUpdateProfileReducer,
    userDeleteReducer,
} from "./Reducers/userReducers";
import {
    addCourseReducer,
    courseDeleteReducer,
    enrollCourseReducer,
    getMyLearnersIDReducer,
    myCoursesReducer,
    myOneCourseReducer,
} from "./Reducers/myCoursesReducers";
import { myLearnerReducer } from "./Reducers/myLearnerReducers";
import { sysInsReducer, sysLearnerReducer } from "./Reducers/adminReducers";
import { createCvsReducer, getCvsSendReducer, getCvsReceiveReducer } from "./Reducers/conversationReducers";
import { lessonListReducer, lessonDetailReducer } from "./Reducers/lessonReducers";

const reducer = combineReducers({
    courseList: courseListReducer,
    courseDetail: courseDetailReducer,
    courseDetailRate: courseDetailRateReducer,
    courseReviewCreate: courseReviewCreateReducer,
    userLogin: userLoginReducer,
    userProfile: userProfileReducer,
    userRegister: userRegisterReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userDelete: userDeleteReducer,
    myCourses: myCoursesReducer,
    myLearner: myLearnerReducer,
    sysLearner: sysLearnerReducer,
    sysIns: sysInsReducer,
    addCourse: addCourseReducer,
    userDetailByID: userDetailByIDReducer,
    myOneCourse: myOneCourseReducer,
    enrollCourse: enrollCourseReducer,
    getMyLearnersID: getMyLearnersIDReducer,
    courseDelete: courseDeleteReducer,
    lessonList: lessonListReducer,
    lessonDetail: lessonDetailReducer,
    createCvs: createCvsReducer,
    getCvsSend: getCvsSendReducer,
    getCvsReceive: getCvsReceiveReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const userProfileFromStorage = localStorage.getItem("userDetail")
    ? JSON.parse(localStorage.getItem("userDetail"))
    : null;

const initialStore = {
    userLogin: { userInfo: userInfoFromStorage },
    userProfile: { userProfile: userProfileFromStorage },
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialStore,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
