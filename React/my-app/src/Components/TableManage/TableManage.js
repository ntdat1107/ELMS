import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Scrollbars } from "react-custom-scrollbars";
import remove from "../Admin/image/delete.png";
import moreInfo from "../Admin/image/moreInfo.png";
import DetailCpn from "./DetailCpn";
import "./TableManage.css";

function TableManage({ heightSB, listLearner }) {
    const users = listLearner;
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 20;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
        return (
            <div className="tablecpn">
                <div>
                    {" "}
                    <DetailCpn userName={user.accountID} email={user.email} FN={user.firstName} LN={user.lastName} />{" "}
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
                <p className="tt-userName">Username</p>
                <p className="tt-email">Email</p>
                <p className="tt-FN">First Name</p>
                <p className="tt-LN">Last Name</p>
                <p className="tt-moreIcon">More Infromation</p>
                <p className="tt-delIcon">Delete</p>
            </div>
            <Scrollbars style={{ width: "100%", height: 345 }}>{displayUsers}</Scrollbars>

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
