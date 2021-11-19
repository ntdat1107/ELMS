import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import remove from "../Admin/image/delete.png";
import moreInfo from "../Admin/image/moreInfo.png";
import DetailCpn from "./DetailCpn";
import "./TableManage.css";

function TableManage({ heightSB, listLearner }) {
    const users = listLearner;

    const [click, setClick] = useState(1);

    function handleClick(e) {
        e.stopPropagation();
        if (click !== 0) {
            click === e.target.id ? setClick(0) : setClick(e.target.id);
        } else {
            setClick(e.target.id);
        }
    }

    const closeBox = () => {
        setClick(0);
    };

    var stt = 0;

    const displayUsers = users.map((user) => {
        stt += 1;
        return (
            <div className="tablecpn">
                <div id="userStt">{stt}</div>
                <div>
                    {" "}
                    <DetailCpn email={user.email} FN={user.firstName} LN={user.lastName} />{" "}
                </div>
                <div id="moreInfo">
                    <img id={user._id} className="moreIcon" src={moreInfo} alt="MoreInfromationIcon" onClick={handleClick} width="118" height="18" />
                </div>

                <div id="delete">
                    <img id="delIcon" src={remove} alt="Delete Icon" width="35" height="auto" />
                </div>
            </div>
        );
    });
    return (
        <div id="tableinstruc">
            <div id="titletable">
                <p className="tt-userStt">No.</p>
                <p className="tt-email">Email</p>
                <p className="tt-FN">First Name</p>
                <p className="tt-LN">Last Name</p>
                <p className="tt-moreIcon">More Infromation</p>
                <p className="tt-delIcon">Delete</p>
            </div>

            <div id="contenttable">
                <Scrollbars style={{ width: "100%", height: 400 }}>{displayUsers}</Scrollbars>
            </div>

            {/* Information of User */}

            {users.map((user) => {
                var Role = "";
                if (user.isLearner) Role = "Learner";
                if (user.isIns) Role = "Instructor";

                return (
                    <div className={click == user._id ? "moreInfomation open" : "moreInfomation"}>
                        <div className="modal-overlay"></div>
                        <div className="modal-body">
                            <p id="close" onClick={closeBox}>
                                X
                            </p>
                            <div className="useInfor">
                                <img id="userAvt" src={user.avatar} alt="UserAvt" width="200px" />
                                <p>{`Full Name: ${user.firstName}  ${user.lastName}`}</p>
                                <p>{`Role: ${Role}`}</p>
                                <p>{`Email: ${user.email}`}</p>
                                <p>{`User_Id: ${user._id}`}</p>
                                <p>{`Account ID (username): ${user.accountID}`}</p>
                                <p>BirthDay: 01/01/2001</p>
                                <p>Favourite Programing Language: Javascript, KotLin</p>
                                <p>Description: I love Javascript, KotLin. My idol is Lam Thien Toan!</p>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* _____________________________________________________________ */}
        </div>
    );
}

export default TableManage;
