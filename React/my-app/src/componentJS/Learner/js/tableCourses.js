import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import { Link } from "react-router-dom"
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
  const smallDisplay = () => {
    for(let i = 0; i < smallCourses.length; i++){
      smallCourses[i].map((course) => {
        console.log(course.idCourse);
        return (
          <div id="itemCourses">
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
    } 
  }
  const bigDisplay1 = () => {
    return (
      <div id="rowCourses">
        {smallDisplay}
      </div>
    );
  };
  const bigDisplay = smallCourses[1].map((course) => {
    return (
      <div id="rowCourses">
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
          {bigDisplay}
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