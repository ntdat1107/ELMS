import React from "react";

import manageCourse from "../img/manageCourse.png";
import instr from "../img/manageIns.png";
import learnersidebar from "../img/manageLn.png";
import NumofUComponent from "./NumberofUserComponent";

function Number({ sysInsList, sysLearnerList, courses }) {
    return (
        <div id="number">
            <NumofUComponent
                linkName="/admin/instructor"
                idName="numofinstruc"
                imgid="instructoricon"
                number={sysInsList}
                srcImg={instr}
                altName="Instructor Image"
                name="Instructor"
                h="40"
                w="40"
            />
            <NumofUComponent
                linkName="/admin/learner"
                idName="numoflearner"
                imgid="learnericon"
                number={sysLearnerList}
                srcImg={learnersidebar}
                altName="Learnertor Image"
                name="Learner"
                h="40"
                w="40"
            />
            <NumofUComponent
                linkName="/admin/managecourse"
                idName="numofcourse"
                imgid="learnericon"
                number={courses}
                srcImg={manageCourse}
                altName="Coursetor Image"
                name="Course"
                h="40"
                w="40"
            />
        </div>
    );
}

export default Number;
