import React, { useEffect } from "react";
import SearchInTable from "../TableManage/SearchInTable";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";
import TableManage from "../TableManage/TableManage";
import { useSelector, useDispatch } from "react-redux";
import { getSysIns } from "../../actions/adminActions";
import "./CSS/AdminInstruc.css";

function AdminInstruc({ history }) {
    const dispatch = useDispatch();
    const sysIns = useSelector((state) => state.sysIns);
    const { loading, error, sysInsList } = sysIns;

    useEffect(() => {
        dispatch(getSysIns());
    }, [dispatch]);

    return (
        <div id="admininstruc-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header 
                history = {history}
                />
            </div>
            <div id="admininstruc">
                <SearchInTable typeUserTemp={1} />
                <TableManage listLearner={sysInsList} />
            </div>
        </div>
    );
}

export default AdminInstruc;
