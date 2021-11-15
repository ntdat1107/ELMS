import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import DataQuiz from "./dataQuiz";
import ItemQuiz from "./itemQuiz"; 
console.log(DataQuiz);
console.log(11111111111111111);
function TableQuiz() {
  const [listQuiz] = useState(DataQuiz.slice(0, 24));
  const [pageNumber, setPageNumber] = useState(0);

  const quizPerPage = 6;
  const pagesVisited = pageNumber * quizPerPage;
  const displayQuiz = listQuiz
    .slice(pagesVisited, pagesVisited + quizPerPage)
    .map((quiz) => {
    return (
      <div id={"rowQuiz"}>
        <ItemQuiz 
            nameQuiz={quiz.name}
            courseQuiz={quiz.course}
            lengthQuiz = {quiz.length}
            idCourseQuiz = {quiz.id}
        />
      </div>
    );
  });
  const pageCount = Math.ceil(listQuiz.length / quizPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
      <div id="tableQuiz">
          <div id="nameColQuiz">
            <div id="numberQuiz"><p>Quiz</p></div>
            <div id="courseOfQuiz"><p>Course</p></div>
            <div id="lengthOfQuiz"><p>Length</p></div>
            <div id="stateOfQuiz">State</div>
          </div>
          <div id="scrollBar">
            <Scrollbars>
              {displayQuiz}
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

export default TableQuiz;