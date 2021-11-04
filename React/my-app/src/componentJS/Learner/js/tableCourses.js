import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import { Link } from "react-router-dom"
import ItemCourse from "./itemCourse"
import listCourse from "./dataListCourse.json"
function TableCourse() {
  const [courses] = useState(listCourse.slice(0, 96));
  const [pageNumber, setPageNumber] = useState(0);

  const coursesPerPage = 9;
  const pagesVisited = pageNumber * coursesPerPage;

  const displayCourses = courses
    .slice(pagesVisited, pagesVisited + coursesPerPage)
    .map((course) => {
      return (
            <div id="displayCourse">
              <div id="rowCourses">
                <ItemCourse 
                    idCourse={course.idCourse}
                    nameCourse={course.nameCourse}
                    authorCourse={course.authorCourse}
                    progressScore = {course.progressScore}
                    scoreRate={course.scoreRate}
                />
                <ItemCourse 
                    idCourse={course.idCourse}
                    nameCourse={course.nameCourse}
                    authorCourse={course.authorCourse}
                    progressScore = {course.progressScore}
                    scoreRate={course.scoreRate}
                /> 
                <ItemCourse 
                    idCourse={course.idCourse}
                    nameCourse={course.nameCourse}
                    authorCourse={course.authorCourse}
                    progressScore = {course.progressScore}
                    scoreRate={course.scoreRate}
                /> 
              </div>
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
          {displayCourses}
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

export default TableCourse;