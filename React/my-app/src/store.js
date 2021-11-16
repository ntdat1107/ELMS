import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { courseDetailReducer, courseListReducer } from './Reducers/courseReducers'
import { userLoginReducer, userProfileReducer } from './Reducers/userReducers'

const reducer = combineReducers({
    courseList: courseListReducer,
    courseDetail: courseDetailReducer,
    userLogin: userLoginReducer,
    userProfile: userProfileReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') 
                                ? JSON.parse(localStorage.getItem('userInfo')) : null

const userProfileFromStorage = localStorage.getItem('userProfile')
                                ? JSON.parse(localStorage.getItem('userProfile')) : null

const initialStore = {
    userLogin: { userInfo: userInfoFromStorage },
    userProfile: { userProfile: userProfileFromStorage}
}
const middleware = [thunk]

const store = createStore(reducer, initialStore, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store