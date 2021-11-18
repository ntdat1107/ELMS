import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import ItemCourse from "./itemCourse"
import listCourse from "./dataListCourse"
function TableCourse() {
  const [courses] = useState(listCourse.slice(0, 36));
  const [pageNumber, setPageNumber] = useState(0);

  const coursesPerPage = 12;
  const pagesVisited = pageNumber * coursesPerPage;

  const bigCourses = courses
    .slice(pagesVisited, pagesVisited + coursesPerPage)

  
  const display = bigCourses.map((course,index) => {
    return (
      <div id="colCourses" key={index}>
        <ItemCourse 
            imgCourse={course.imgCourse}
            nameCourse={course.nameCourse}
            authorCourse={course.authorCourse}
            progressScore = {course.progressScore}
            scoreRate={course.scoreRate}
            imgRate={course.imgRate}
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

export default TableCourse;