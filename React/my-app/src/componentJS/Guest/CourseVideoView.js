import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import playbutton from "./imgs/playbutton.png"
import "./CSS/CourseVideoView.css";
import ReactPlayer from 'react-player';
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";

import Header from "../header";
import avt from "../../img/cheems.png"

function MainPage({url}) {
    return (
        <div id = "mainPage">
            <VideoFrame url = {url}/>
            <LowBody/>
            
        </div>
    )
}




function OutsidePage() {
    return(
        <div id = "outsidePage">
            <Header 
                linkAvt="/learner/manageprofile" 
                link="/learner/dashboard" 
                srcImg={avt} 
                name="Lâm Thành Dương" 
                gmail="lamduong11201@gmail.com" 
                type="Learner"
                idName="information"
            />
            <RightSideBar courseContentInput = {courseContent}/>
        </div>
    )   
}

function VideoFrame({url}) {
    return(
        <div id = "videoFrame">
            <ReactPlayer 
                className = "react-player"
                url = {url}
                controls = {true}
                pip = {true}
                width = {1000}
                height = {450}
            />
        </div>
    )
}

const courseContent = [
    {
        "sessionName": "Overview",
        "lessonList" : [
            {
                "lessonName": "bbbb",
                "lessonDur": "13 min",
                "navlink" : "/course/1234/",
                "url": "https://www.youtube.com/watch?v=im5tnxCcPXU",
            },
        ]
    },
    {
        "sessionName": "AAAA",
        "lessonList" : [
            {
                "lessonName": "bbbb",
                "lessonDur": "13 min",
                "navlink" : "/course/1234/1_1",
                "url": "https://www.youtube.com/watch?v=im5tnxCcPXU",
            },
            {
                "lessonName": "cccc",
                "lessonDur": "34 min",
                "navlink" : "/course/1234/1_2",
                "url" : "https://www.youtube.com/watch?v=8GEU6zkCpT8",
            },
            {
                "lessonName": "dddd",
                "lessonDur": "25 min",
                "navlink" : "/course/1234/1_3",
                "url" : "https://www.youtube.com/watch?v=D9G1VOjN_84",
            },

        ]
    },
    {
        "sessionName": "BBBB",
        "lessonList" : [
            {
                "lessonName": "bbbb",
                "lessonDur": "13 min",
                "navlink" : "/course/1234/2_1",
                "url" : "https://www.youtube.com/watch?v=rGSsg93ZrT4",
            },
            {
                "lessonName": "cccc",
                "lessonDur": "34 min",
                "navlink" : "/course/1234/2_2",
                "url" : "https://www.youtube.com/watch?v=Fj3ZZIlQdlI",
            },
            {
                "lessonName": "dddd",
                "lessonDur": "25 min",
                "navlink" : "/course/1234/2_3",
                "url" : "https://www.youtube.com/watch?v=zF5Ddo9JdpY",
            },

        ]
    }    
]

const overView = {
    "lessonName": "bbbb",
    "lessonDur": "13 min",
    "navlink" : "/course/1234/",
    "url": "https://www.youtube.com/watch?v=im5tnxCcPXU",
}

function RightSideBar({courseContentInput}) {
    return(
        <div id = "rightSB">
            <ProSidebar width = "310px">
                <SidebarHeader>
                    <div id ="sbheader">
                        <h1>Course Content</h1>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu>
                        <Scrollbars style = {{height: 530}}>
                            {courseContentInput.map(session => (
                                <Session session = {session}/>
                            ))}
                        </Scrollbars>
                    </Menu>
                </SidebarContent>
            </ProSidebar>;
        </div>
    )
}

function Session({session}) {
    return (
        <div id = "contentSession">
            <Menu>
                <SubMenu title={session.sessionName}>
                    {session.lessonList.map(lesson => (
                        <Lesson lesson = {lesson}/>
                    ))}
                </SubMenu>
            </Menu>
        </div>
    )
}

function Lesson({lesson}) {
    const handleClick = (props) => {console.log(props)};  
    return (
        <div id = "lesson" >
            <MenuItem>
                <NavLink to={lesson.navlink} id="nav-link" onClick = {handleClick}>
                    <div id = "play-button">
                        <img src = {playbutton} alt = "play"/>
                    </div>
                    <div id = "lesson-information">
                        <p>{lesson.lessonName}</p>
                        <p>{lesson.lessonDur}</p>
                    </div>
                </NavLink>
            </MenuItem>
        </div>
    )
}

function LowBody() {
    return(
        <div id = "lowBody">
            lesson.lessonName
            aaaaa
        </div>
    )
}

export {OutsidePage};
export default MainPage;