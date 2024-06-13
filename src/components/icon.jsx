import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

// DOWN ARROW COMPONENT

const DownArrowIcon = () => {
    return (
      <IconContext.Provider value={{ className: "addressArrow" }}>
        <IoIosArrowDown />
      </IconContext.Provider>
    );
  };



// ICON BTN SEC COMPONENT

const IconBtnSec = (props) => {

    return (

        <div class="iconBttnSec myflex">
           <p><i class={props.iconClass}></i> {props.iconText}</p>
           <i class="fas fa-chevron-right"></i>
        </div>

    )

}

export {IconBtnSec, DownArrowIcon };