import React from "react";
import './CSS/AdminDashboard.css'
import Number from "./NumberofUser";
import DashboardCourseAdmin from "./DashboardCourseAdmin";

function AdminDashboard ({
}) {
    return (
        <div id="admindashboard">
            <Number />
            <DashboardCourseAdmin/>
       </div>
    )
}

export default AdminDashboard;