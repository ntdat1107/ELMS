import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailLesson, listLessons } from '../../actions/lessonActions';
import "./CSS/CourseVideoView.css";
import MainPage from "./CourseVideoView";
import { OutsidePage } from "./CourseVideoView";
import { BackButton } from './CourseMainPage'



function CourseView({match, history}) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)

    const lessonDetail = useSelector(state => state.lessonDetail)
    const {loading, error, lesson} = lessonDetail 
    console.log(lesson)
    console.log(match.params.id)
    console.log(match.params.token)

    useEffect(() => {
        dispatch(detailLesson(match.params.id, match.params.token))
    }, [dispatch, match])

    return(
        <div id = "CV">
            <BackButton url = "/" style = {{"z-index" : "1000"}} />
            <OutsidePage/>
            <MainPage match={match} url = "https://www.youtube.com/watch?v=D9G1VOjN_84"/>
        </div>
    )
}

export default CourseView;