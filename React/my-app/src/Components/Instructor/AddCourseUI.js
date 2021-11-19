import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewCourse } from '../../actions/myCoursesAction'

function AddCourseUI({history}) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
    }, [history, userInfo])
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('')
    const [fastName, setFastName] = useState('')

    const addCourse = useSelector(state => state.addCourse)
    const { courseInfo } = addCourse
    useEffect(() => {
        if (courseInfo) history.push(`/ins/managecourse/${courseInfo.fastName}`)
    }, [history, dispatch, courseInfo])
    let image= "https://i.ytimg.com/vi/SWYqp7iY_Tc/maxresdefault.jpg"
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewCourse(userInfo._id, name, image, category, desc, fastName))
    }

    return (
        <div>
            <form>
            <input placeholder="Name" required onChange={(e) => setName(e.target.value)}></input>
            <input placeholder="Category" required onChange={(e) => setCategory(e.target.value)}></input>
            <input placeholder="Desc" required onChange={(e) => setDesc(e.target.value)}></input>
            <input placeholder="FastName" required onChange={(e) => setFastName(e.target.value)}></input>
            <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default AddCourseUI
