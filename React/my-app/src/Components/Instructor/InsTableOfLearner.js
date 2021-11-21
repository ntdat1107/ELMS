import React, {useEffect} from 'react'
import CourseForYouCpn from '../courseForYou/courseForYouCpn';
import "./CSS/TableOfLearner.css"
import SideBar from '../SideBar/SideBar';
import Header from '../Header/header'
import SearchInTable from '../TableManage/SearchInTable';
import TableManage from '../TableManage/TableManage';
import { useSelector, useDispatch } from 'react-redux'
import { getMyLearner } from '../../actions/myLearnerAction';
import Loading from '../Loading/Loading';
import ErrorMsg from '../Error/ErrorMsg';


function TableOfLearner({history, match}) {
    const dispatch = useDispatch()
    // Check if logged in
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo || !userInfo.isIns) history.push('/login')
        // else if (!userInfo.isIns) push error not type
    }, [history, userInfo])


    const myLearner = useSelector(state => state.myLearner)
    const { loading, error, learnerList } = myLearner

    useEffect(() => {
        dispatch(getMyLearner(match.params.fastName))
    }, [dispatch])

    if (loading) return (
        <div id="loadingInsTable">
            <SideBar typeUserTemp={1}/>
            <Header history={history}/>
            <Loading />
        </div>
    )
    else if (error) return (
        <div id="errorInsTable">
            <SideBar typeUserTemp={1}/>
            <Header history={history}/>
            <ErrorMsg msg={error.message} />
        </div>
    )
    else return (
        <div id="managelearner">
            <SideBar typeUserTemp={1}/>
            <Header history={history}/>
        <div id="table-learner">
            <div id="row-2">
                <SearchInTable typeUserTemp={1}/>
                <TableManage userInfo={userInfo} match={match} listLearner={learnerList}/>
            </div>
        </div>
        </div>
    )
}

export default TableOfLearner
