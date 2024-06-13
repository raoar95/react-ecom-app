import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Breadcumb = (props) => {
  return (
    <div className="breadcumb-row cartBRow flex-start ellipsis">
      <IconContext.Provider value={{ className: "homeIcon" }}>
        <FaHome />
      </IconContext.Provider>
      <Link to="/">Home</Link>
      {props.extraBrd}
      <FaChevronRight />
      <span>{props.mainText}</span>
    </div>
  );
};

export default Breadcumb;
