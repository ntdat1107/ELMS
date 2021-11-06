import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import DataNote from "./dataNote";
import ItemNote from "./itemNote"; 

function TableNote() {
  const [listNote] = useState(DataNote.slice(0, 24));
  const [pageNumber, setPageNumber] = useState(0);

  const notePerPage = 6;
  const pagesVisited = pageNumber * notePerPage;
  const displayNote = listNote
    .slice(pagesVisited, pagesVisited + notePerPage)
    .map((note, index) => {
    return (
      <div id={"rowNote"}>
        <ItemNote
            numberNote = {index + 1} 
            nameNote={note.title}
            courseNote={note.course}
            idCourseNote = {note.id}
        />
      </div>
    );
  });
  const pageCount = Math.ceil(listNote.length / notePerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
      <div id="tableNote">
          <div id="nameColNote">
            <div id="numberNote"><p>ID</p></div>
            <div id="courseOfNote"><p>Course</p></div>
            <div id="nameNote"><p>Title</p></div>
            <div id="stateViewNote">View</div>
            <div id="stateDownloadNote">Download</div>
          </div>
          <div id="scrollBar">
            <Scrollbars>
              {displayNote}
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

export default TableNote;