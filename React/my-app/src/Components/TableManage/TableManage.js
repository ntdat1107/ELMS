import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import remove from "../Admin/image/delete.png";
import moreInfo from "../Admin/image/moreInfo.png";
import DetailCpn from "./DetailCpn";
import InforUser from "./InforUser";
import { deleteUserNow, kickUser } from "../../actions/userActions";
import "./TableManage.css";

function TableManage({ userInfo, listLearner, history, match }) {
    const users = listLearner;

    const dispatch = useDispatch();
    const userDelete = useSelector((state) => state.userDelete);
    const { success: successDelete } = userDelete;

    /* Set Click For More Information Box */
    const [click1, setClick1] = useState(0);

    function handleClick1(e) {
        e.stopPropagation();
        if (click1 !== 0) {
            click1 === e.target.id ? setClick1(0) : setClick1(e.target.id);
        } else {
            setClick1(e.target.id);
        }
    }

    const closeBox = () => {
        setClick1(0);
    };
    /* ________________________________________________________________ */

    /* Set Click for Delete Confirm Box */

    function handleClick2(e) {
        e.stopPropagation();
        if (userInfo && userInfo.isIns) {
            if (window.confirm("Are you sure that you want to kick this user out of your course!!")){}
            dispatch(kickUser(e.target.id, match.params.fastName))
        } else {
            if (window.confirm("Are you sure that you want to delete this user"))
            dispatch(deleteUserNow(e.target.id));
        }
    }

    useEffect(() => {}, [history, successDelete]);

    /* ________________________________________________________________ */

    /* ________________________________________________________________ */

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
                    <img
                        id={user._id}
                        onClick={handleClick1}
                        className="moreIcon"
                        src={moreInfo}
                        alt="MoreInfromationIcon"
                        width="118"
                        height="18"
                    />
                </div>

                <div id="delete">
                    <img
                        id={user._id}
                        onClick={handleClick2}
                        className="delIcon"
                        src={remove}
                        alt="Delete Icon"
                        width="35"
                        height="auto"
                    />
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
                    <div>
                        <InforUser user={user} click1={click1} closeBox={closeBox} Role={Role} />
                    </div>
                );
            })}

            {/* _____________________________________________________________ */}
        </div>
    );
}

export default TableManage;
