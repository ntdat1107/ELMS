import React from 'react';
import { Dropdown } from 'reactjs-dropdown-component';
import "./CSS/Dropdowns.css"

const levels = {
  level: [
    {
      label: 'Beginner',
      value: 'beginner',
    },
    {
      label: 'Intermediate',
      value: 'intermediate',
    },
    {
      label: 'Advanced',
      value: 'advanced',
    },
    {
      label: 'All levels',
      value: 'all-levels',
    },
  ]
};

const features = {
  feature: [
    {
      label: 'Quiz',
      value: 'quiz',
    },
    {
      label: 'Interactions',
      value: 'interactions',
    },
    {
      label: 'Subtitled',
      value: 'subtitled',
    },
    {
      label: 'All features',
      value: 'all-features',
    },
  ]
};

const ratings = {
  rating: [
    {
      label: 'Best courses',
      value: 'best-courses',
    },
    {
      label: '4* and above',
      value: '4-above',
    },
    {
      label: '3* and above',
      value: '3-above',
    },
    {
      label: 'All ratings',
      value: 'all-ratings',
    },
  ]
};

const sortBy = {
  sort: [
    {
      label: 'Most relevant',
      value: 'relevant',
    },
    {
      label: 'Most reviewed',
      value: 'review',
    },
    {
      label: 'Newest',
      value: 'new',
    },

  ]
};

const onChange = (item, name) => {console.log(item, name)}
const { level } = levels;
const { feature} = features;
const { sort } = sortBy;
const { rating } = ratings;

function DropdownBar() {
  return(
      <div id = "DropdownBar">
        <div className="Dropdowns">
            <Dropdown id="dropdown"
              name="Level"
              title="Level"
              list={level}
              onChange={onChange}
            />        
        </div>
        <div className="Dropdowns">
            <Dropdown
              name="Ratings"
              title="Ratings"
              list={rating}
              onChange={onChange}
            />        
        </div>
        <div className="Dropdowns">
            <Dropdown
              name="Feature"
              title="Feature"
              list={feature}
              onChange={onChange}
            />        
        </div>
        <div className="Dropdowns">
            <Dropdown
              name="Sort by"
              title="Sort by"
              list={sort}
              onChange={onChange}
            />        
        </div>
      </div>
  )
}

export default DropdownBar;