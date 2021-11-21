import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/header'
import './CSS/AddLessonUI.css'
import { addNewLesson } from '../../actions/lessonActions'
import Loading from '../Loading/Loading'
import ErrorMsg from '../Error/ErrorMsg'

function AddLessonUI({history, match}) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
    }, [history, userInfo])
    const [lessonName, setLessonName] = useState('')
    const [lessonDescription, setLessonDescription] = useState('')
    const [lessonUrl, setLessonUrl] = useState('')

    const addLesson = useSelector(state => state.addLesson)
    const { loading, success, error } = addLesson
    useEffect(() => {
        if (success && lessonName != '') {
            history.push(`/course/${match.params.fastName}/1`)
        }
    }, [success])
    const handleLesson = () => {
        dispatch(addNewLesson(lessonName, lessonDescription, lessonUrl, match.params.fastName))
    }
if (loading) return (
    <div id="loadingUI">
        <SideBar typeUserTemp={1}/>
        <Header history={history}/>
        <Loading />
    </div>
)
else if (error) return (
    <div id="errorUI">
        <SideBar typeUserTemp={1}/>
        <Header history={history}/>
        <ErrorMsg msg={error.message} />
    </div>
)
return (
    <div className="insAddLessonUI">
        <SideBar typeUserTemp={1}/>
        <Header history={history}/>
        <div className="insAddLesson" style={{width: "700px", paddingLeft: "20px", paddingTop: "20px"}}>
            <form>
                <label for="Name">Name Lesson</label>
                <input type='text' id="Name" 
                placeholder="Input name of lesson" required
                onChange={(e) => setLessonName(e.target.value)}></input>
                <label for="Url">Url Lesson</label>
                <input type='text' id="Url" 
                placeholder="Input url of lesson" required
                onChange={(e) => setLessonUrl(e.target.value)}></input>
                <label for="Desc">Description</label>
                <textarea type='text' id="Desc" 
                placeholder="Input your description of lesson" required
                onChange={(e) => setLessonDescription(e.target.value)}/>
            </form>
                <button type="submit" onClick={handleLesson}>Add</button>
        </div>
    </div>
)
}

export default AddLessonUI
