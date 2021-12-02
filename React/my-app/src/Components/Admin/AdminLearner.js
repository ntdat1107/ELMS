import React, { useEffect } from "react";
import SearchInTable from "../TableManage/SearchInTable";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/header";
import TableManage from "../TableManage/TableManage";
import { useSelector, useDispatch } from "react-redux";
import { getSysLearner } from "../../actions/adminActions";
import Loading from "../Loading/Loading";
import ErrorMsg from "../Error/ErrorMsg";
import { deleteUserNow, kickUser } from "../../actions/userActions";

function AdminLearner({ history }) {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const userDelete = useSelector((state) => state.userDelete);
    const { success: successDelete } = userDelete;

    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) history.push("/login");
    }, [history, userInfo]);

    function handleClick2(e) {
        e.stopPropagation();

        if (window.confirm("Are you sure that you want to delete this user"))
            dispatch(deleteUserNow(e.target.id));
    }

    const sysLearner = useSelector((state) => state.sysLearner);
    const { loading, error, sysLearnerList } = sysLearner;

    useEffect(() => {
        dispatch(getSysLearner());
    }, [dispatch, successDelete]);

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
            <div id="adminlearner-UI">
                <div className="AdminUI">
                    <SideBar typeUserTemp={0} />
                    <Header history={history} />
                </div>
                <div id="adminlearner">
                    <SearchInTable typeUserTemp={1} />
                    <TableManage listLearner={sysLearnerList} handleClick2={handleClick2} />
                </div>
            </div>
        );
}

export default AdminLearner;
