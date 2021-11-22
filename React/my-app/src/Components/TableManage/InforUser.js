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
                        <img id="userAvt" src={user.avatar} alt="UserAvt" height="140px" />
                        <div id="flexthis">
                            <div>
                                <p>{`Full Name: ${user.firstName}  ${user.lastName}`}</p>
                                <p>{`Role: ${Role}`}</p>
                                <p>{`Email: ${user.email}`}</p>
                                <p>{`User_Id: ${user._id}`}</p>
                                <p>{`Account ID (username): ${user.accountID}`}</p>
                            </div>
                            <div>
                                <p>{`Sex: ${user.sex ? user.sex : ""}`}</p>
                                <p>{`Country: ${user.country ? user.country : ""}`}</p>
                                <p>{`City: ${user.city ? user.city : ""}`}</p>
                                <p>{`BirthDay: ${
                                    user.birthday ? user.birthday : "__ /__ /____"
                                }`}</p>
                                <p>
                                    {`Description: ${
                                        user.description
                                            ? user.description
                                            : "My idol is Lam Thien Toan!"
                                    }`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InforUser;
