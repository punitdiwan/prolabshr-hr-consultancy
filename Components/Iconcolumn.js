import React from "react";
import {
  FaBook,
  FaPeopleArrows,
  FaRegBuilding,
  FaRegClock,
} from "react-icons/fa";

const Iconcolumn = () => {
  return (
    <>
      <div className="row-icon">
        <div className="row-icon-1">
          <span>
            <FaBook />
          </span>
          <p>17</p>
          <h4>Years of market Leadership</h4>
        </div>
        <div className="row-icon-1">
          <span><FaPeopleArrows /></span>
          <p>2000</p>
          <h4>Consultant</h4>
        </div>
        <div className="row-icon-1">
          <span><FaRegClock /></span>
          <p>5000</p>
          <h4>Career made till date</h4>
        </div>
        <div className="row-icon-1">
          <span><FaRegBuilding /></span>
          <p>100</p>
          <h4>Industries Covered</h4>
        </div>
      </div>
    </>
  );
};

export default Iconcolumn;
