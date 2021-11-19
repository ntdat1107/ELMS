import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, removeProfile } from '../../actions/userActions';

function Logout({history}) {
    const dispatch = useDispatch()
    const logoutHandler = () => {
    dispatch(logout())
    dispatch(removeProfile())
    history.push('/')
    }
    logoutHandler()
    return (
        <div>
            Logout
        </div>
    )
}

export default Logout
