import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import {Link, Route} from "react-router-dom";
import "./LnMyCourses.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import ItemCourse from "./itemCourse"
import Loading from '../../Loading/Loading';
import { getMyCourses } from "../../../actions/myCoursesAction";
import ErrorMsg from '../../Error/ErrorMsg';
import empty from '../img/background/empty.png'
const SearchBox= ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/learner/mycourses/search/${keyword}`)
        } else {
            history.push('/learner/mycourses')
        }
    }

    return(
        <form onSubmit={submitHandler} className="searchMyCourse">
        <label>
          <input id="btn-1" type="text" name='q' onChange={(e)=> setKeyword(e.target.value)} placeholder='Search my courses'/>
        </label>
        <input id="btn-2" type="submit" value="Search" />
      </form>
    )
}
const AllCourse= ({ history }) => {
    const submitHandler = (e) => {
        e.preventDefault()
        history.push('/learner/mycourses')

    }

    return(
        <form onSubmit={submitHandler}>
        <input id="allCourses" type="submit" value="All Courses" />
      </form>
    )
}

const TableCourse = ({id, match, courses}) => {
    const keyword = match.params.keyword;
    const [pageNumber, setPageNumber] = useState(0);  
    const coursesPerPage = 9;
    const pagesVisited = pageNumber * coursesPerPage;
    let arr = []
    if(keyword) {
        let filter = keyword.toUpperCase()
        for(let i = 0; i < courses.length; i++)
        {
            if(courses[i].name.toUpperCase().indexOf(filter) > -1) arr.push(courses[i])
        }
    }
    else arr = courses
    const pageCount = Math.ceil( arr&&arr.length / coursesPerPage );
    const changePage = ({ selected }) => {setPageNumber(selected)};
    const display = (data) => {
        if(data && data.length === 0) {
            return(
                <div id="listEmpty">
                    <img src={empty} alt="Empty Img" width="240px" height="160px" />
                    <p id="row1">
                    Start learning new course. <br/>  
                    <Link to="/search" style={{textDecoration: "none"}} >
                        <p id = "btn-enroll">
                            Enroll Now
                        </p> 
                    </Link>
                    </p>
                </div>
            )
        }
        else {
            return(
                <div style={{height: "410px", width: "782px"}}>
                    <Scrollbars id="scrollbars">
                    {
                        data && data.slice(pagesVisited, pagesVisited + coursesPerPage).map((course,index) => {
                            var rateScore = 0;
                            for(let j = 0; j < course.ratings.length; j++) {
                                if(course.ratings[j].user === id) rateScore = course.ratings[j].rating;
                            }
                            return (
                            <div id="colCourses" key={index}>
                                <ItemCourse 
                                    imgCourse={course.image}
                                    nameCourse={course.name}
                                    authorCourse={course.authorName}
                                    rateScore={rateScore}
                                    fastNameCourse={course.fastName}
                                    category = {course.category}
                                />
                            </div>
                            );
                        })
                    }
                    </Scrollbars>
                    <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            )
        }
    }
    return (
        <div id="tableCourses">
            {display(arr)}
        </div>
    );
}

function ContentMyCourses({match, id, history, courses}) {
    return (
        <div id = "myCourses">
            <div className="titleMC"><p>My Courses</p></div>
            <div id="typeCourse">
                <Route render={({ history })=> <AllCourse history={history} />} />
                <Route render={({ history })=> <SearchBox history={history} />} />
            </div>
            <div id="listCourseMC">
                <TableCourse match={match} history={history} courses={courses} id={id}/>
            </div>
        </div>
    )
}

function LnMyCourses({match, history}) {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (!userInfo || !userInfo.isLearner) history.push('/login')
    }, [history, userInfo])

    const dispatch = useDispatch()
    const myCourses = useSelector(state => state.myCourses)
    const { loading, error, myCoursesList } = myCourses
    useEffect(() => {
        dispatch(getMyCourses())
    }, [dispatch])

    if (loading) {
        return (
            <div>
                <SideBar typeUserTemp={2}/>
                <Header history = {history}/>
                <Loading />
            </div>
        )
    }
    else if (error) {
        return (
            <div>
                <SideBar typeUserTemp={2}/>
                <Header history = {history}/>
                <ErrorMsg msg="Something went wrong!" />
            </div>
        )
    }
    else {
        return (
            <div id="lnMyCoursesUI">
                <SideBar typeUserTemp={2}/>
                <Header  history = {history}/>
                <div id="lnMyCourses">
                    <ContentMyCourses match={match} history = {history} courses={myCoursesList} id={userInfo._id} />
                </div>
            </div>
        )
    }
}

export default LnMyCourses;