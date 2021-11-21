import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import {Route} from "react-router-dom";
import "./LnMyCourses.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import ItemCourse from "./itemCourse"
import Loading from '../../Loading/Loading';
import { getMyCourses } from "../../../actions/myCoursesAction";
import ErrorMsg from '../../Error/ErrorMsg';

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

const TableCourse = ({id, match, history}) => {
    const dispatch = useDispatch()
    const keyword = match.params.keyword;

    const myCourses = useSelector(state => state.myCourses)
    const { loading, error, myCoursesList } = myCourses
    useEffect(() => {
        dispatch(getMyCourses())
    }, [dispatch])
    const [pageNumber, setPageNumber] = useState(0);  
    const coursesPerPage = 9;
    const pagesVisited = pageNumber * coursesPerPage;
    if (loading) {
        return (
            <div className="handleLoading" style={{marginTop: "-300px"}}>
                <SideBar typeUserTemp={2} />
                <Header history={history} />
                <Loading />
            </div>
        )
    }
    else if (error) {
        return (
            <div id="err">
                <SideBar typeUserTemp={2} style={{marginTop: "-300px"}}/>
                <Header history={history} />
                <ErrorMsg msg="Something went wrong!" />
            </div>
        )
    }
    else {
        let arr = []
        if(keyword) {
            let filter = keyword.toUpperCase()
            for(let i = 0; i < myCoursesList.length; i++)
            {
                if(myCoursesList[i].name.toUpperCase().indexOf(filter) > -1) arr.push(myCoursesList[i])
            }
        }
        else arr = myCoursesList
        const pageCount = Math.ceil(arr&&arr.length / coursesPerPage);
        const changePage = ({ selected }) => {setPageNumber(selected)};
        return (
            <div id="tableCourses">
                <Scrollbars id="scrollbars">
                {
                    arr && arr.slice(pagesVisited, pagesVisited + coursesPerPage).map((course,index) => {
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
        );
    }
  }

function ContentMyCourses({match, id, history}) {
    return (
        <div id = "myCourses">
            <div className="titleMC"><p>My Courses</p></div>
            <div id="typeCourse">
                <Route render={({ history })=> <AllCourse history={history} />} />
                <Route render={({ history })=> <SearchBox history={history} />} />
            </div>
            <div id="listCourseMC">
                <TableCourse match={match} history={history} id={id}/>
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
    return (
        <div id="lnMyCoursesUI">
            <SideBar typeUserTemp={2}/>
            <Header  history = {history}/>
            <div id="lnMyCourses">
                <ContentMyCourses match={match} id={userInfo._id} />
            </div>
        </div>
    )
}

export default LnMyCourses;