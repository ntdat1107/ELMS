import React from "react";

import manageCourse from "../../img/managerCourse.png"
import instr from "../../img/instr.png"
import learner from "../../img/learner.png"
import NumofUComponent from "./NumberofUserComponent";

function Number() {    
    return (
        <div id="number">
            <NumofUComponent linkName="/admin/instructor" idName="numofinstruc" imgid="instructoricon" number="234" srcImg={instr} altName="Instructor Image" name="Instructor" h="40" w="40"/>
            <NumofUComponent linkName="/admin/learner" idName="numoflearner" imgid="learnericon" number="50192" srcImg={learner} altName="Learnertor Image" name="Learner" h="40" w="40"/>        
            <NumofUComponent linkName="/admin/managecourse" idName="numofcourse" imgid="learnericon" number="357" srcImg={manageCourse} altName="Coursetor Image" name="Course" h="40" w="40"/>
        </div>
    )
}

export default Number;