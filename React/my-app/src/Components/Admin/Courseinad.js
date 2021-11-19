import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import CourseCpninad from "./CoureCpninad";
import { listCourses } from "../../actions/courseActions";
import data from "../courseForYou/data";
import "./CSS/AdminCourse.css";

function Courseinad() {
    const dispatch = useDispatch();
    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;

    useEffect(() => {
        dispatch(listCourses());
    }, [dispatch]);
    const display = courses.map((data, index) => {
        return (
            <CourseCpninad
                key={index}
                imgSrcCourse={data.image}
                Name={data.name}
                Desc={data.description}
                Author={data.authorName}
                Type={data.typeCourse}
                rateScore={data.rateScore}
                totalRate={data.rateNum}
                linkName={`/course/${data.fastName}`}
            />
        );
    });
    return (
        <div id="courseinad">
            <Scrollbars>{display}</Scrollbars>
        </div>
    );
}
export default Courseinad;
