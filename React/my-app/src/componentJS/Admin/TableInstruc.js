import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars"
import { Link } from "react-router-dom"
import remove from "./image/delete.png"
import moreInfo from "./image/moreInfo.png"
import disqualify from "./image/disqualify.png"
import TableComponent from "./TableComponent"
import "./CSS/AdminInstruc.css"

function TableInstruc2() {
  const [users, setUsers] = useState(JsonData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 15;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="tablecpn">
            <div> <TableComponent ID={user.ID} FN={user.FN} LN={user.LN}/> </div>
            <div  id="moreInfo">
                <img id="moreIcon" src={moreInfo} alt="More Infromation Icon" width="118" height="18"/>
            </div>
            <div  id="disqualify">
                <img id="disIcon" src={disqualify} alt="Disqualify Icon" width="35" height="auto"/>
            </div>
            <div  id="delete">
                <img id="delIcon" src={remove} alt="Delete Icon" width="35" height="auto"/>
            </div> 
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
      <div id="tableinstruc">
        <div id="titletable">
            <p className="tr">ID</p>
            <p className="tr">First Name</p>
            <p className="tr">Last Name</p>
            <p className="tr">More Infromation</p>
            <p className="tr">Disqualify</p>
            <p className="tr">Delete</p>
        </div>

        
          <Scrollbars style={{ width: "100%", height: 430 }}>
          {displayUsers}
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

export default TableInstruc2;