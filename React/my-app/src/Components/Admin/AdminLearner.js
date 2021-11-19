import React, { useEffect } from "react";
import SearchInTable from "../TableManage/SearchInTable";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";
import TableManage from "../TableManage/TableManage";
import { useSelector, useDispatch } from "react-redux";
import { getSysLearner } from "../../actions/adminActions";

function AdminLearner({ history }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || userInfo.isIns) history.push("/login");
    }, [history, userInfo]);

    const dispatch = useDispatch();
    const sysLearner = useSelector((state) => state.sysLearner);
    const { loading, error, sysLearnerList } = sysLearner;

    useEffect(() => {
        dispatch(getSysLearner());
    }, [dispatch]);

    return (
        <div id="adminlearner-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header />
            </div>
            <div id="adminlearner">
                <SearchInTable typeUserTemp={1} />
                <TableManage listLearner={sysLearnerList} />
            </div>
        </div>
    );
}

export default AdminLearner;
