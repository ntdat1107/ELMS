import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CSS/AddCourseUI.css'
import Loading from '../Loading/Loading';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import ErrorMsg from '../Error/ErrorMsg'
import { getMyCourseByFastName, updateCourseNow } from '../../actions/myCoursesAction';


function EditCourse({history, match}) {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const myOneCourse = useSelector(state => state.myOneCourse)
    const { loading, error, myOneCourseDetail } = myOneCourse

    const updateCourse = useSelector(state => state.updateCourse)
    const { loading: loadingUpdate, error: errorUpdate, success } = updateCourse

    useEffect(() => {
        if (userInfo && userInfo.isIns) dispatch(getMyCourseByFastName(match.params.fastName))
        else history.push('/login')
    }, [history, dispatch])

    useEffect(() => {
        if (myOneCourseDetail) {
            setName(myOneCourseDetail.name)
            setCategory(myOneCourseDetail.category)
            setDescription(myOneCourseDetail.description)
            setImage(myOneCourseDetail.image)
        }
    }, [myOneCourseDetail])
    useEffect(() => {
        if (success == true && name != '')
            history.push(`/ins/managecourse/${match.params.fastName}`)
    }, [success])
    const handleSubmit = () => {
        dispatch(updateCourseNow({name, category, description, image, fastName: match.params.fastName}))
    }
    if (loading || loadingUpdate) return (
        <div id="loadingUI">
            <SideBar typeUserTemp={1}/>
            <Header history={history}/>
            <Loading />
        </div>
    )
    else if (error || errorUpdate) return (
        <div id="errorUI">
            <Header history={history}/>
            <ErrorMsg msg={ error ? error : errorUpdate}/>
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
                        <input type='text' id="Name" placeholder="Input name of course"
                        required value={name} onChange={(e) => setName(e.target.value)} ></input>
                        <label for="Category">Category</label>
                        <select type='selector' id="Category" placeholder="" 
                        required onChange={(e) => setCategory(e.target.value)} >
                            <option value="Beginner" label="Beginner" 
                            selected = {category == "Beginner" ? true : false}></option>
                            <option value="Advanced" label="Advanced"
                            selected = {category == "Advanced" ? true : false}></option>
                            <option value="Master" label="Master"
                            selected = {category == "Master" ? true : false}></option>
                        </select>
                        <label for="Desc">Description</label>
                        <textarea type='text' id="Desc" placeholder="Input your description of course" 
                        required value={description} onChange={(e) => setDescription(e.target.value)} />
                    </form>
                        <button type="submit" onClick={handleSubmit}>Add</button>
                </div>
                <div id="image-ctn">
                    <img src={image} alt="courseImg" width="400px" height="auto" />
                    <div id="image-input">
                        <label for="Image-url">Image Url</label>
                        <input type="text" id="Image-url" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCourse
