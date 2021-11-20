import React from "react";

function InforUser({ user, click1, closeBox, Role }) {
    return (
        <div>
            <div className={click1 == user._id ? "moreInfomation open" : "moreInfomation"}>
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
                        <p>Description: My idol is Lam Thien Toan!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InforUser;
