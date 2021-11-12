import React, { useState } from "react";
import JsonData from "../Admin/MOCK_DATA";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars";
import remove from "../Admin/image/delete.png";
import moreInfo from "../Admin/image/moreInfo.png";
import disqualify from "../Admin/image/disqualify.png";
import DetailCpn from "./DetailCpn";
import './TableManage.css'

function TableManage({
    heightSB,
}
    
) {
    const users = JsonData.slice(0, 100);
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 15;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
        return (
            <div className="tablecpn">
                <div>
                    {" "}
                    <DetailCpn ID={user.ID} FN={user.FN} LN={user.LN} />{" "}
                </div>
                <div id="moreInfo">
                    <img id="moreIcon" src={moreInfo} alt="More Infromation Icon" width="118" height="18" />
                </div>
                <div id="delete">
                    <img id="delIcon" src={remove} alt="Delete Icon" width="35" height="auto" />
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
                <p className="tr">Delete</p>
            </div>
            {console.log(heightSB)}
            <Scrollbars style={{ width: "100%", height: 275 }}>{displayUsers}</Scrollbars>

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

export default TableManage;