import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewCourse } from '../../actions/myCoursesAction'
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import ErrorMsg from '../Error/ErrorMsg'
import './CSS/AddCourseUI.css'
import Loading from '../Loading/Loading';
function AddCourseUI({history}) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
    }, [history, userInfo])
    const [image, setImage] = useState("https://i.ytimg.com/vi/SWYqp7iY_Tc/maxresdefault.jpg")
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Beginner')
    const [desc, setDesc] = useState('')
    const [fastName, setFastName] = useState('')
    const addCourse = useSelector(state => state.addCourse)
    const { loading, success, error } = addCourse
    useEffect(() => {
        if (success && fastName != '') {
            history.push(`/ins/managecourse/${fastName}`)
        }
    }, [success, dispatch])
    const handleSubmit = () => {
        if (image == "") image ="https://quangbinhtourism.vn/wp-content/uploads/2019/06/default-image.png"
        dispatch(addNewCourse(name, image, category, desc, fastName))
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
    else return (
        <div className="InAddCourseUI">
            <SideBar typeUserTemp={1}/>
            <Header history={history}/>
            <div id="containerAddCourse">
                <div className="InAddCourse" style={{width: "700px", paddingLeft: "20px", paddingTop: "20px"}}>
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
                    </form>
                        <button type="submit" onClick={handleSubmit}>Add</button>
                </div>
                <div id="image-ctn">
                    <img src={image} width="250px" height="auto" />
                    <label for="Image-url">Path Name</label>
                    <input type="text" id="Image-url" onChange={(e) => setImage(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default AddCourseUI
