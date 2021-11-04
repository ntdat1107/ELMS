import React from 'react';
import { Dropdown } from 'reactjs-dropdown-component';

const choiceSBs = {
  choiceSB: [
    {
      label: 'Recently Accessed',
      value: 'recentlyAccessed',
    },
    {
      label: 'Recently Enrolled',
      value: 'recentlyEnrolled',
    },
    {
      label: 'Title: A to Z',
      value: 'aToZ',
    },
    {
      label: 'Title: Z to A',
      value: 'zToA',
    },
  ]
};

const choiceFT1s = {
  choiceFT1: [
    {
      label: 'Favorites',
      value: 'favorites',
    },
    {
      label: 'Archived',
      value: 'archived',
    },
    {
      label: 'All Categories',
      value: 'allCategories',
    },
    {
      label: 'Development',
      value: 'devepolment',
    },
    {
      label: 'Design',
      value: 'design',
    }
  ]
};

const choiceFT2s = {
  choiceFT2: [
    {
      label: 'Not Started',
      value: 'notStarted',
    },
    {
      label: 'In Progress',
      value: 'inProgress',
    },
  ]
};

const choiceFT3s = {
  choiceFT3: [
    {
      label: 'Trần Hoàng Duy',
      value: 'tranHoangDuy',
    },
    {
      label: 'Lâm Thành Dương',
      value: 'lamThanhDuong',
    },
    {
      label: 'Nguyễn Tấn Đạt',
      value: 'nguyenTanDat',
    },
    {
      label: 'Ngọ Tiến Đạt',
      value: 'ngoTienDat',
    },
    {
      label: 'Mai Đức Long',
      value: 'maiDucLong',
    },

  ]
};

const onChange = (item, name) => {console.log(item, name)}
const { choiceSB } = choiceSBs;
const { choiceFT1} = choiceFT1s;
const { choiceFT2 } = choiceFT2s;
const { choiceFT3 } = choiceFT3s;

function DropdownBar() {
  return(
      <div id = "DropdownBar">
          <div className="Dropdowns">
              <Dropdown
                name="SortBy"
                title="Recently Accessed"
                list={choiceSB}
                onChange={onChange}
              />        
          </div>
        <div className="Dropdowns">
            <Dropdown
              name="Filter1"
              title="Categories"
              list={choiceFT1}
              onChange={onChange}
            />        
        </div>
        <div className="Dropdowns">
            <Dropdown
              name="Filter2"
              title="Progress"
              list={choiceFT2}
              onChange={onChange}
            />        
        </div>
        <div className="Dropdowns">
            <Dropdown
              name="Filter3"
              title="Instructor"
              list={choiceFT3}
              onChange={onChange}
            />        
        </div>
      </div>
  )
}

export default DropdownBar;