import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailLesson, listLessons } from '../../actions/lessonActions';
import "./CSS/CourseVideoView.css";
import MainPage from "./CourseVideoView";
import { OutsidePage } from "./CourseVideoView";
import { BackButton } from './CourseMainPage'



function CourseView({match, history}) {
    const dispatch = useDispatch()
    const lessonDetail = useSelector(state => state.lessonDetail)
    const {loading, error, lesson} = lessonDetail 
    // console.log(lesson)
    // console.log(match.params.id)
    // console.log(match.params.token)
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns || !userInfo.isLearner) history.push('/login')
    }, [history, dispatch])

    useEffect(() => {
        dispatch(detailLesson(match.params.id, match.params.token))
    }, [dispatch, match])

    return(
        <div id = "CV">
            <BackButton url = "/" style = {{"z-index" : "1000"}} />
            <OutsidePage match = {match}/>
            <MainPage match={match} url={lesson.lessonUrl} description={lesson.lessonDescription}/>
        </div>
    )
}

export default CourseView;