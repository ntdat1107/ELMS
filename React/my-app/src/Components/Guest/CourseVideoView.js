import React, { useState, useEffect } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";
import "react-pro-sidebar/dist/css/styles.css";
import playbutton from "./imgs/playbutton.png";
import Rating from '@mui/material/Rating';
import "./CSS/CourseVideoView.css";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";
import {
  detailCourseRate,
  createCourseReview,
} from "../../actions/courseActions";

import Header from "../Header/header";
import avt from "../img/cheems.png";

function MainPage({ url, match }) {
  return (
    <div id="mainPage">
      <VideoFrame url={url} />
      <LowBody match={match} />
    </div>
  );
}

function OutsidePage() {
  return (
    <div id="outsidePage">
      <Header
        linkAvt="/learner/manageprofile"
        link="/learner/dashboard"
        srcImg={avt}
        name="Lâm Thành Dương"
        gmail="lamduong11201@gmail.com"
        type="Learner"
        idName="information"
        typeUserTemp={2}
      />
      <RightSideBar courseContentInput={courseContent} />
    </div>
  );
}

function VideoFrame({ url }) {
  return (
    <div id="videoFrame">
      <ReactPlayer
        className="react-player"
        url={url}
        controls={true}
        pip={true}
        width={900}
        height={450}
      />
    </div>
  );
}

const courseContent = [
  {
    sessionName: "Overview",
    lessonList: [
      {
        lessonName: "bbbb",
        lessonDur: "13 min",
        navlink: "/course/1234/",
        url: "https://www.youtube.com/watch?v=im5tnxCcPXU",
      },
    ],
  },
  {
    sessionName: "Chapter 1: Fantastic Beasts",
    lessonList: [
      {
        lessonName: "Where",
        lessonDur: "13 min",
        navlink: "/course/1234/1_1",
        url: "https://www.youtube.com/watch?v=im5tnxCcPXU",
      },
      {
        lessonName: "To",
        lessonDur: "34 min",
        navlink: "/course/1234/1_2",
        url: "https://www.youtube.com/watch?v=8GEU6zkCpT8",
      },
      {
        lessonName: "Find Them",
        lessonDur: "25 min",
        navlink: "/course/1234/1_3",
        url: "https://www.youtube.com/watch?v=D9G1VOjN_84",
      },
    ],
  },
  {
    sessionName: "Chapter 2: Thor",
    lessonList: [
      {
        lessonName: "Love",
        lessonDur: "13 min",
        navlink: "/course/1234/2_1",
        url: "https://www.youtube.com/watch?v=rGSsg93ZrT4",
      },
      {
        lessonName: "And",
        lessonDur: "34 min",
        navlink: "/course/1234/2_2",
        url: "https://www.youtube.com/watch?v=Fj3ZZIlQdlI",
      },
      {
        lessonName: "Thunder",
        lessonDur: "25 min",
        navlink: "/course/1234/2_3",
        url: "https://www.youtube.com/watch?v=zF5Ddo9JdpY",
      },
    ],
  },
];

function RightSideBar({ courseContentInput }) {
  return (
    <div id="rightSB">
      <ProSidebar width="310px">
        <SidebarHeader>
          <div id="sbheader">
            <h1>Course Content</h1>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu>
            <Scrollbars style={{ height: 530 }}>
              {courseContentInput.map((session) => (
                <Session session={session} />
              ))}
            </Scrollbars>
          </Menu>
        </SidebarContent>
      </ProSidebar>
      ;
    </div>
  );
}

function Session({ session }) {
  return (
    <div id="contentSession">
      <Menu>
        <SubMenu title={session.sessionName}>
          {session.lessonList.map((lesson) => (
            <Lesson lesson={lesson} />
          ))}
        </SubMenu>
      </Menu>
    </div>
  );
}

function Lesson({ lesson }) {
  const handleClick = (props) => {
    console.log(props);
  };
  return (
    <div id="lesson">
      <MenuItem>
        <NavLink to={lesson.navlink} id="nav-link" onClick={handleClick}>
          <div id="play-button">
            <img src={playbutton} alt="play" />
          </div>
          <div id="lesson-information">
            <p>{lesson.lessonName}</p>
            <p>{lesson.lessonDur}</p>
          </div>
        </NavLink>
      </MenuItem>
    </div>
  );
}

function LowBody({ match }) {
  return (
    <div id="lowBody">
      <LowNavBar match={match} />
      <LowBodyBox />
    </div>
  );
}

function LowNavBar({ match }) {
  return (
    <div id="lowNavBar">
      <NavItem1 title="Overview" />
      <NavItem3 match={match} title="Review" />
      <NavItem2 title="Quiz" url="/learner/takeQuiz" />
      <NavItem2 title="Turorial" url="/learner/readTutorial" />
    </div>
  );
}

function NavItem2({ title, url }) {
  const handleClick = (props) => {
    console.log(props);
  };
  return (
    <div id="navItem">
      <NavLink to={url} id="nav-link" onClick={handleClick}>
        <h3>{title}</h3>
      </NavLink>
    </div>
  );
}

function NavItem1({ title }) {
  const handleClick = (props) => {
    console.log(props);
  };
  return (
    <div id="navItem" onClick={handleClick}>
      <h3>{title}</h3>
    </div>
  );
}

function NavItem3({ title, match }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const courseDetailRate = useSelector((state) => state.courseDetailRate);
  const { loading, error, course } = courseDetailRate;
  if (!loading && course.ratings) console.log(course.ratings[0]);
  let listRate = (!loading && course.ratings) ? course.ratings : []
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const courseReviewCreate = useSelector((state) => state.courseReviewCreate);
  const { success: successCourseReview } = courseReviewCreate;

  useEffect(() => {
    dispatch(detailCourseRate(match.params.id, match.params.token));
  }, [dispatch]);
  return (
    <div className="nav-item-3">
      <div id="navItem">
        <h3 onClick={handleClick}>{title}</h3>
        <ul className={click ? "nav-menu-rate active" : "nav-menu-rate"}>
          <p style={{ color: "black" }}>Review</p>
          {listRate === [] && <p>No reviews</p>}
          {listRate.map((data) => (
            <div key = {data._id}>
                <p>{data.name}</p>
                <Rating name="read-only" value={data.rating} readOnly />
                <p>{data.comment}</p>
            </div>
          ))}
          <button onClick={closeMenu}>Submit</button>
        </ul>
      </div>
    </div>
  );
}

function LowBodyBox() {
  return (
    <div id="lowBodyBox">
      <Scrollbars style={{ height: 300 }}>
        <h2>what we'll learn</h2>
        <p>
          Engineers, as practitioners of engineering, are people who invent,
          design, analyze, build, and test machines, systems, structures and
          materials to fulfill objectives and requirements while considering the
          limitations imposed by practicality, regulation, safety, and cost. The
          work of engineers forms the link between scientific discoveries and
          their subsequent applications to human and business needs and quality
          of life.
        </p>

        <h2>what we'll learn</h2>
        <p>
          Engineers, as practitioners of engineering, are people who invent,
          design, analyze, build, and test machines, systems, structures and
          materials to fulfill objectives and requirements while considering the
          limitations imposed by practicality, regulation, safety, and cost. The
          work of engineers forms the link between scientific discoveries and
          their subsequent applications to human and business needs and quality
          of life.
        </p>

        <h2>what we'll learn</h2>
        <p>
          Engineers, as practitioners of engineering, are people who invent,
          design, analyze, build, and test machines, systems, structures and
          materials to fulfill objectives and requirements while considering the
          limitations imposed by practicality, regulation, safety, and cost. The
          work of engineers forms the link between scientific discoveries and
          their subsequent applications to human and business needs and quality
          of life.
        </p>

        <h2>what we'll learn</h2>
        <p>
          Engineers, as practitioners of engineering, are people who invent,
          design, analyze, build, and test machines, systems, structures and
          materials to fulfill objectives and requirements while considering the
          limitations imposed by practicality, regulation, safety, and cost. The
          work of engineers forms the link between scientific discoveries and
          their subsequent applications to human and business needs and quality
          of life.
        </p>

        <h2>what we'll learn</h2>
        <p>
          Engineers, as practitioners of engineering, are people who invent,
          design, analyze, build, and test machines, systems, structures and
          materials to fulfill objectives and requirements while considering the
          limitations imposed by practicality, regulation, safety, and cost. The
          work of engineers forms the link between scientific discoveries and
          their subsequent applications to human and business needs and quality
          of life.
        </p>
      </Scrollbars>
    </div>
  );
}

export { OutsidePage };
export default MainPage;
