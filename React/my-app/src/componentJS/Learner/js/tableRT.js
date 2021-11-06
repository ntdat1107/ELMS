import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import DataTutorial from "./dataTutorial";
import ItemTutorial from "./itemTutorial"; 
console.log(DataTutorial);
console.log(11111111111111111);
function TableTutorial() {
  const [listTutorial] = useState(DataTutorial.slice(0, 24));
  const [pageNumber, setPageNumber] = useState(0);

  const tutorialPerPage = 6;
  const pagesVisited = pageNumber * tutorialPerPage;
  const displayTutorial = listTutorial
    .slice(pagesVisited, pagesVisited + tutorialPerPage)
    .map((tutorial) => {
    return (
      <div id={"rowTutorial"}>
        <ItemTutorial 
            idCourseTutorial = {tutorial.idCourse}
            courseTutorial={tutorial.course}
            titleTutorial={tutorial.title}
            descTutorial = {tutorial.desc}
            idCourseTutorial = {tutorial.id}
        />
      </div>
    );
  });
  const pageCount = Math.ceil(listTutorial.length / tutorialPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
      <div id="tableTutorial">
          <div id="scrollBar">
            <Scrollbars>
              {displayTutorial}
            </Scrollbars>
          </div>
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

export default TableTutorial;