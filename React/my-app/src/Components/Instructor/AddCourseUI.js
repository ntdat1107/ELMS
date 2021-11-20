import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewCourse, removeCourseNow } from '../../actions/myCoursesAction'
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import './CSS/AddCourseUI.css'
function AddCourseUI({history}) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
    }, [history, userInfo])
    const [image, setImage] = useState("https://i.ytimg.com/vi/SWYqp7iY_Tc/maxresdefault.jpg")
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('')
    const [fastName, setFastName] = useState('')
    const addCourse = useSelector(state => state.addCourse)
    const { courseInfo } = addCourse
    useEffect(() => {
        if (courseInfo) {
            dispatch(removeCourseNow())
            history.push(`/ins/managecourse/${fastName}`)
        }
    }, [courseInfo])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewCourse(name, image, category, desc, fastName))
    }

    return (
        <div className="InAddCourseUI">
            <SideBar typeUserTemp={1}/>
            <Header history={history}/>
            <div className="InAddCourse">
                <input type="text" onChange={(e) => setImage(e.target.value)}/>
                <img src={image} width="150px" height="auto" />
                <div style={{width: "700px", paddingLeft: "20px", paddingTop: "20px"}}>
                    <form>
                        <label for="Name">Name Course</label>
                        <input type='text' id="Name" placeholder="Input name of course"  required onChange={(e) => setName(e.target.value)}></input>
                        <label for="Category">Category</label>
                        <select type='selector' id="Category" placeholder="" required onChange={(e) => setCategory(e.target.value)}>
                            <option value="Beginner" label="Beginner"></option>
                            <option value="Advanced" label="Advanced"></option>
                            <option value="Master" label="Master"></option>
                        </select>
                        <label for="PathName">Path Name</label>
                        <input type='text' id="PathName" placeholder="Input pathname of course" required onChange={(e) => setFastName(e.target.value)}></input>
                        <label for="Desc">Description</label>
                        <textarea type='text' id="Desc" placeholder="Input your description of course" required onChange={(e) => setDesc(e.target.value)} />
                        <button type="submit" onClick={handleSubmit}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCourseUI
