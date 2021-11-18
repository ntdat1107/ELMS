import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { courseDetailReducer, courseListReducer } from './Reducers/courseReducers'
import { userDetailByIDReducer, userLoginReducer, userProfileReducer, 
    userRegisterReducer, userUpdateProfileReducer } from './Reducers/userReducers'
import { addCourseReducer, myCoursesReducer } from './Reducers/myCoursesReducers'
import { myLearnerReducer } from './Reducers/myLearnerReducers'
import { sysInsReducer, sysLearnerReducer } from './Reducers/adminReducers'
import { useDispatch, useSelector } from 'react-redux'

const reducer = combineReducers({
    courseList: courseListReducer,
    courseDetail: courseDetailReducer,
    userLogin: userLoginReducer,
    userProfile: userProfileReducer,
    userRegister: userRegisterReducer,
    userUpdateProfile: userUpdateProfileReducer,
    myCourses: myCoursesReducer,
    myLearner: myLearnerReducer,
    sysLearner: sysLearnerReducer,
    sysIns: sysInsReducer,
    addCourse: addCourseReducer,
    userDetailByID: userDetailByIDReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') 
                                ? JSON.parse(localStorage.getItem('userInfo')) : null

const userProfileFromStorage = localStorage.getItem('userDetail')
                                ? JSON.parse(localStorage.getItem('userDetail')) : null

const initialStore = {
    userLogin: { userInfo: userInfoFromStorage },
    userProfile: { userProfile: userProfileFromStorage}
}
const middleware = [thunk]

const store = createStore(reducer, initialStore, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store