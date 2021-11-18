import React, {useEffect} from "react";
import SearchInstruc from "./SearchInstruc";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";
import TableManage from "../TableManage/TableManage";
import { useSelector, useDispatch } from 'react-redux'
import { getSysIns } from "../../actions/adminActions";

function AdminInstruc() {
    const dispatch = useDispatch()
    const sysIns = useSelector(state => state.sysIns)
    const { loading, error, sysInsList } = sysIns

    useEffect(() => {
        dispatch(getSysIns())
    }, [dispatch])

    return (
        <div id="admininstruc-UI">
            <div className="AdminUI">
                <SideBar typeUserTemp={0} />
                <Header />
            </div>
            <div id="admininstruc">
                <SearchInstruc />
                <TableManage listLearner={sysInsList} />
            </div>
        </div>
    );
}

export default AdminInstruc;