import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const ProductSlider = ({ slideContent }) => {

  const slideCont = useRef(null);

  let scrollWidth;

  const slideNext = () => {

    scrollWidth = slideCont.current.clientWidth;

    slideCont.current.scrollLeft += scrollWidth;

  };

  const slidePrev = () => {

    scrollWidth = slideCont.current.clientWidth;

    slideCont.current.scrollLeft -= scrollWidth;

  };

  return (

    <div className="slideContainer flex-space" ref={slideCont}>

      {slideContent}

      {/* SLIDE ARROW ICONS  */}

      <div className="slideIcon prev" onClick={slidePrev}>

        <FaChevronLeft />

      </div>
      <div className="slideIcon next" onClick={slideNext}>

        <FaChevronRight />

      </div>

    </div>
  );
};

export default ProductSlider;
