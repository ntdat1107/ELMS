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
import Rating from "@mui/material/Rating";
import "./CSS/CourseVideoView.css";
import ReactPlayer from "react-player";
import { NavLink, Link } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";
import {
  detailCourseRate,
  createCourseReview,
} from "../../actions/courseActions";
import { COURSE_CREATE_REVIEW_RESET } from "../../constants/courseConstants";

import Header from "../Header/header";
import { listLessons } from '../../actions/lessonActions';
import Loading from "../Loading/Loading";

function MainPage({ url, match , description}) {
  return (
    <div id="mainPage">
      <VideoFrame url={url} />
      <LowBody match={match} description={description}/>
    </div>
  );
}

function OutsidePage({match, history}) {
  const dispatch = useDispatch()
  const lessonList = useSelector(state => state.lessonList)
  const {loading, error, lessons} = lessonList
  console.log(lessons)
  console.log(match.params.id)

  useEffect(() => {
      dispatch(listLessons(match.params.id))
  }, [dispatch, match])
  return (
    <div id="outsidePage">
      <Header
        typeUserTemp={2}
        history ={history}
      />
      <RightSideBar lessons = {lessons}/>
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

function RightSideBar({lessons}) {
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
              <Session lessons = {lessons}/>
            </Scrollbars>
          </Menu>
        </SidebarContent>
      </ProSidebar>
      ;
    </div>
  );
}

function Session({lessons }) {
  return (
    <div id="contentSession">
      <Menu>
        <SubMenu title="Course videos">
          {lessons.map((lesson) => (
            <Lesson lesson={lesson} key={lesson._id}/>
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
        <NavLink to={`/course/${lesson.courseFastname}/${lesson.lessonNumber}`} id="nav-link" onClick={handleClick}>
          <div id="play-button">
            <img src={playbutton} alt="play" />
          </div>
          <div id="lesson-information">
            <p>{lesson.lessonName}</p>
          </div>
        </NavLink>
      </MenuItem>
    </div>
  );
}

function LowBody({ match, description }) {
  return (
    <div id="lowBody">
      <LowNavBar match={match} />
      <LowBodyBox description= {description}/>
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
  const handleClick = (e) => {
    e.preventDefault()
  };
  return (
    <div id="disabledNavItem">  
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
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const courseDetailRate = useSelector((state) => state.courseDetailRate);
  const { loading, error, course } = courseDetailRate;

  const courseReviewCreate = useSelector((state) => state.courseReviewCreate);
  const { success: successCourseReview } = courseReviewCreate;

  useEffect(() => {
    if (successCourseReview) {
      alert("Review Submitted!");
      setRating(0);
      setComment('');
      dispatch({type: COURSE_CREATE_REVIEW_RESET})
    }
    dispatch(detailCourseRate(match.params.id, match.params.token));
  }, [dispatch, match, successCourseReview]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createCourseReview(match.params.id, match.params.token, {
        rating,
        comment,
      })
    );
  };

  return (
    <div className="nav-item-3">
      <div id="navItemReview">
        <h3 onClick={handleClick}>{title}</h3>
        <ul className={click ? "nav-menu-rate active" : "nav-menu-rate"}>
          <div style={{width: "50%", paddingLeft: "10px"}}>
            <p style={{fontSize: "20px", fontWeight: "bold"}}>List Review</p>
            <div>
              <Scrollbars style={{height: "265px"}}>
              {!loading && course.ratings && course.ratings.map((data) => (
                <div key={data._id} style={{border: "1px solid black", borderRadius: "10px", marginBottom: "5px", width: "90%"}}>
                  <p style={{fontSize: "16px", paddingLeft: "5px"}}>Name: {data.name}</p>
                  <div style={{display: "flex"}}>
                  <p style={{fontSize: "16px", paddingLeft: "5px"}}>Score: </p> <Rating name="read-only" value={data.rating} readOnly />
                  </div>
                  <p style={{fontSize: "16px", paddingLeft: "5px", paddingBottom: "5px",
                    height: "25px", whiteSpace: "nowrap", overflow: "hidden",
                    textOverflow: "ellipsis", width:"475px"
                  }}>Comment: {data.comment}</p>
                </div>
              ))}
              </Scrollbars>
            </div>
          </div>
          <div className="box-review" style={{width: "45%"}}>
            <p style={{fontSize: "20px", fontWeight: "bold"}}>Write a Customer Review</p>
            <form onSubmit={submitHandler} >
              <label style={{display: "block"}}>
                <select
                  name="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  style={{height:"50px", width:"450px", margin: "10px 0px",
                  borderRadius: "4px"
                }}
                >
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
                <br/>
                <textarea
                  name="comment"
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  style={{height:"150px", width:"450px", margin: "0px 0px 5px",
                  borderRadius: "4px", paddingLeft: "10px", paddingTop: "10px"}}
                />
              </label>
              <input id="btn-submit" type="submit" value="Send" />
            </form>
          </div>
          <button onClick={closeMenu} style={{width: "5%", height: "55px", border: "none"
          , backgroundColor: "white", cursor: "pointer"
        }}>X</button>
        </ul>
      </div>
    </div>
  );
}

function LowBodyBox({description}) {
  return (
    <div id="lowBodyBox">
      <Scrollbars style={{ height: 300 }}>
        <h2>Lesson description</h2>
        <p> {description}</p>
      </Scrollbars>
    </div>
  );
}

export { OutsidePage };
export default MainPage;
