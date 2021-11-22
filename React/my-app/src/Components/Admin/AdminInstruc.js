import React, { useEffect } from "react";
import SearchInTable from "../TableManage/SearchInTable";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";
import TableManage from "../TableManage/TableManage";
import { useSelector, useDispatch } from "react-redux";
import { getSysIns } from "../../actions/adminActions";
import Loading from "../Loading/Loading";
import ErrorMsg from "../Error/ErrorMsg";
import "./CSS/AdminInstruc.css";

function AdminInstruc({ history }) {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) history.push("/login");
    }, [history, userInfo]);

    const sysIns = useSelector((state) => state.sysIns);
    const { loading, error, sysInsList } = sysIns;

    useEffect(() => {
        dispatch(getSysIns());
    }, [dispatch]);

    if (loading)
        return (
            <div id="loadingInsTable">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
                <Loading />
            </div>
        );
    else if (error)
        return (
            <div id="err">
                <SideBar typeUserTemp={0} />
                <Header history={history} />
                <ErrorMsg msg={error} />
            </div>
        );
    else
        return (
            <div id="admininstruc-UI">
                <div className="AdminUI">
                    <SideBar typeUserTemp={0} />
                    <Header history={history} />
                </div>
                <div id="admininstruc">
                    <SearchInTable typeUserTemp={1} />
                    <TableManage listLearner={sysInsList} />
                </div>
            </div>
        );
}

export default AdminInstruc;
