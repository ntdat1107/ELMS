import React from 'react';
import { Dropdown } from 'reactjs-dropdown-component';

const quizCourses = {
  quizCourse: [
    {
      label: 'All course',
      value: '0',
    },
    {
      label: 'Gitting Started: Step-by-Step Git and Github Crash Course',
      value: '1',
    },
    {
      label: 'Network Administrator: Certified Wireless Network Administrator',
      value: '2',
    },
    {
      label: 'Django Web Development: To-Do App',
      value: '3',
    },
    {
      label: 'Linux System Admin: Advance Linux System Administrator',
      value: '4',
    },
    {
      label: 'Javascript Full Course: Beginner to Expert',
      value: '5',
    },
    {
      label: 'Machine Learning Full Course: for PHP & Python Devs',
      value: '6',
    },
  ]
};



const onChange = (item, name) => {console.log(item, name)}
const { quizCourse } = quizCourses;

function DropdownBar() {
  return(
      <div id = "DropdownBar">
          <div className="Dropdowns">
              <Dropdown
                name="FilterBy"
                title="All courses"
                list={quizCourse}
                onChange={onChange}
              />        
          </div>
      </div>
  )
}

export default DropdownBar;