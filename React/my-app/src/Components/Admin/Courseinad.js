import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import CourseCpninad from "./CoureCpninad";
import { listCourses } from "../../actions/courseActions";
import Loading from "../Loading/Loading";
import "./CSS/AdminCourse.css";

function Courseinad() {
    const dispatch = useDispatch();
    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;

    useEffect(() => {
        dispatch(listCourses());
    }, [dispatch]);
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    } else if (error) {
        return (
            <div id="err">
                <h1>ERROR</h1>
            </div>
        );
    } else
        return (
            <div id="courseinad">
                <Scrollbars>
                    {courses &&
                        courses.map((data, index) => {
                            return (
                                <CourseCpninad
                                    key={index}
                                    imgSrcCourse={data.image}
                                    Name={data.name}
                                    Desc={data.description}
                                    Author={data.authorName}
                                    Learners={data.learnerList}
                                    Type={data.typeCourse}
                                    rateScore={data.rateScore}
                                    totalRate={data.rateNum}
                                    linkName={`/course/${data.fastName}`}
                                />
                            );
                        })}
                </Scrollbars>
            </div>
        );
}
export default Courseinad;
