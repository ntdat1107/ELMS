import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import ItemCourse from "./itemCourse"
import listCourse from "./dataListCourse.json"
function TableCourse() {
  const [courses] = useState(listCourse.slice(0, 96));
  const [pageNumber, setPageNumber] = useState(0);

  const coursesPerPage = 12;
  const pagesVisited = pageNumber * coursesPerPage;

  const bigCourses = courses
    .slice(pagesVisited, pagesVisited + coursesPerPage)
  const smallCourses = [];
  for(let i = 0; i + 3 <= bigCourses.length; i = i + 3)
  {
    var temp = bigCourses.slice(i,i + 3);
    smallCourses.push(temp);
  }
  console.log(smallCourses);
  
  const bigDisplay1 = smallCourses[0].map((course,index) => {
    return (
      <div id={"rowCourses" + (index + 1)}>
        <ItemCourse 
            idCourse={course.idCourse}
            nameCourse={course.nameCourse}
            authorCourse={course.authorCourse}
            progressScore = {course.progressScore}
            scoreRate={course.scoreRate}
        />
      </div>
    );
  });
  const bigDisplay2 = smallCourses[1].map((course,index) => {
    return (
      <div id={"rowCourses" + (index + 1)}>
        <ItemCourse 
            idCourse={course.idCourse}
            nameCourse={course.nameCourse}
            authorCourse={course.authorCourse}
            progressScore = {course.progressScore}
            scoreRate={course.scoreRate}
        />
      </div>
    );
  });
  const bigDisplay3 = smallCourses[2].map((course,index) => {
    return (
      <div id={"rowCourses" + (index + 1)}>
        <ItemCourse 
            idCourse={course.idCourse}
            nameCourse={course.nameCourse}
            authorCourse={course.authorCourse}
            progressScore = {course.progressScore}
            scoreRate={course.scoreRate}
        />
      </div>
    );
  });
  const bigDisplay4 = smallCourses[3].map((course,index) => {
    return (
      <div id={"rowCourses" + (index + 1)}>
        <ItemCourse 
            idCourse={course.idCourse}
            nameCourse={course.nameCourse}
            authorCourse={course.authorCourse}
            progressScore = {course.progressScore}
            scoreRate={course.scoreRate}
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
          {bigDisplay1}
          {bigDisplay2}
          {bigDisplay3}
          {bigDisplay4}
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