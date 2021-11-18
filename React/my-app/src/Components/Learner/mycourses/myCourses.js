import Header from '../../Header/header';
import SideBar       from '../../SideBar/SideBar';
import avatarLn from '../../img/avtLn.png'
import {Route} from "react-router-dom";
import DropList from "./dropListCourse"
import "./LnMyCourses.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import ItemCourse from "./itemCourse"
import { listCourses } from "../../../actions/courseActions";

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

const TableCourse = ({match}) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch()
    const courseList = useSelector(state => state.courseList)
    const { loading, error, courses } = courseList
  
    useEffect(() => {
        dispatch(listCourses(keyword))
    }, [dispatch, keyword])
  
    const [pageNumber, setPageNumber] = useState(0);
  
    const coursesPerPage = 12;
    const pagesVisited = pageNumber * coursesPerPage;
    console.log(courses)
    const bigCourses = courses.slice(pagesVisited, pagesVisited + coursesPerPage);
  
    // key={index} imgSrcCourse={data.image}
    //           Name={data.name} Desc={data.description} Author={data.authorName} Type={data.typeCourse}
    //           rateScore={data.rateScore} totalRate={data.rateNum} linkName={`/course/${data.fastName}`}
    const display = bigCourses.map((course,index) => {
      return (
        <div id="colCourses" key={index}>
          <ItemCourse 
              imgCourse={course.image}
              nameCourse={course.name}
              authorCourse={course.authorName}
              progressScore = {50}
              rateScore={course.rateScore}
          />
        </div>
      );
    });
  
  
    const pageCount = Math.ceil(courses.length / coursesPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  
    return (
        <div id="tableCourses">
            <Scrollbars id="scrollbars">
            {display}
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

function ContentMyCourses({match}) {
    return (
        <div id = "myCourses">
            <div className="titleMC"><p>My Courses</p></div>
            <div id="typeCourse">
                <div id="allCourses"><p>All Courses</p></div>
                <div id="archived"><p>Archived</p></div>
                <Route render={({ history })=> <SearchBox history={history} />} />
            </div>
            <div id="labelSortFilter">
                <div id="sort"><p>Sort by</p></div>
                <div id="filter"><p>Filter by</p></div>
            </div>
            <div id="filterBar">
                <DropList />
                <div id = "buttonReset">
                <p>Reset</p>
                </div>
            </div>
            <div id="listCourseMC">
                <TableCourse match={match} />
            </div>
        </div>
    )
}

function LnMyCourses({match}) {
    return (
        <div id="lnMyCoursesUI">
            <SideBar typeUserTemp={2}/>
            <Header linkAvt="/learner/manageprofile" link="/learner/dashboard" srcImg={avatarLn} name="Lâm Thành Dương" gmail="lamduong11201@gmail.com" type="Learner"
            idName="information" typeUserTemp={2}/>
            <div id="lnMyCourses">
                <ContentMyCourses match={match} />
            </div>
        </div>
    )
}

export default LnMyCourses;