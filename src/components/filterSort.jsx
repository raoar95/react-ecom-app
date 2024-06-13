import  React, { useState, useRef } from "react";
import { DownArrowIcon } from "./icon";
import { Checkbox } from "./formComp";
import { useProductContext } from "../state/context/AppContext";


// CHECKBOX COMPONENT

const FilterCheckboxComp = ({ labelValue, value }) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleLabelClick = () => {

    setIsChecked(prev => !prev);

    CheckboxChecked();

  };

  const filterItemContent = useRef(null);

  const { proFilter, setPrevPro } =useProductContext();

  const CheckboxChecked = () => {

   if (isChecked) {

    filterItemContent.current.style.fontWeight = "";
    setPrevPro(labelValue, value);

  } 
  
  else {

    filterItemContent.current.style.fontWeight = "bold";
    // clearBtnRef.current.style.display = "block";
    proFilter(labelValue, value);
  }

  }

  return (
  <div className="filterItemContent flex-space w-100" ref={filterItemContent}>
    <div className="filterItemLftPart">
      <Checkbox labelValue={labelValue} value={value} name="filterChkBox" checked={isChecked} changeFunc={handleLabelClick} labelClickFunc={handleLabelClick} />
    </div>
    {/* <span>[{ItemAvl}]</span> */}
  </div>
)};



// FILTER ITEM COMPONENT

const FilterItem = ({ catHead, inputData, isActive, onClick }) => {

  return (
    <div className="filterItem">
      <div
        className={`filter-section-head pointer flex-space ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {catHead}
        <DownArrowIcon />
      </div>
      <div className="filterItemCont" style={{ display: isActive ? 'block' : 'none' }}>
        {inputData}
      </div>
    </div>
  );
};


// MAIN FILTER COMPONENT

const FilterComp = () => {

  const clearFilterBtn = useRef()

  const [activeFilterHead, setActiveFilterHead] = useState(null);

  const filterHeadClick = (headName) => {

    setActiveFilterHead(headName)
    // setActiveFilterHead((prev) => (prev === headName ? null : headName));

  };

  return (
    <div className="filterColumn">
      <div className="filterColumnHead">
        <h2>FILTER PRODUCT</h2>
        {/* <button className="myBtn" ref={clearFilterBtn} onClick={clearAllFilter}>Clear x</button>  */}
      </div>
      <div className="filterItemSec">
        <FilterItem
          catHead="Price Range"
          inputData={
            <>
              <FilterCheckboxComp  value="price" labelValue="Below ₹ 10,000" ItemAvl={""} clearBtnRef={clearFilterBtn}  />
              <FilterCheckboxComp  value="price" labelValue="₹ 10,000 - ₹ 19,999" ItemAvl={""} clearBtnRef={clearFilterBtn}  />
              <FilterCheckboxComp  value="price" labelValue="₹ 20,000 - ₹ 34,999" ItemAvl={""} clearBtnRef={clearFilterBtn}  />
              <FilterCheckboxComp  value="price" labelValue="₹ 35,000 - ₹ 49,999" ItemAvl={""} clearBtnRef={clearFilterBtn}  />
              <FilterCheckboxComp  value="price" labelValue="₹ 50,000 - ₹ 99,999" ItemAvl={""} clearBtnRef={clearFilterBtn}  />
              <FilterCheckboxComp  value="price" labelValue="Above ₹ 1,00,000" ItemAvl={""} clearBtnRef={clearFilterBtn}  />
            </>
          }
          isActive={activeFilterHead === "Price Range"}
          onClick={() => filterHeadClick("Price Range")}
        />
        <FilterItem
          catHead="Brand"
          inputData={
            <>
              <FilterCheckboxComp value="brand" labelValue="MICROMAX" ItemAvl={""} clearBtnRef={clearFilterBtn}   />
              <FilterCheckboxComp value="brand" labelValue="LAVA" ItemAvl={""} clearBtnRef={clearFilterBtn}   />
              <FilterCheckboxComp value="brand" labelValue="SAMSUNG" ItemAvl={""} clearBtnRef={clearFilterBtn}   />
              <FilterCheckboxComp value="brand" labelValue="Sony" ItemAvl={""} clearBtnRef={clearFilterBtn}   />
              <FilterCheckboxComp value="brand" labelValue="Realme" ItemAvl={""} clearBtnRef={clearFilterBtn}   />
              <FilterCheckboxComp value="brand" labelValue="Mi" ItemAvl={""} clearBtnRef={clearFilterBtn}   />
              <FilterCheckboxComp value="brand" labelValue="WD" ItemAvl={""} clearBtnRef={clearFilterBtn}   />
            </>  
          }
          isActive={activeFilterHead === "Brand"}
          onClick={() => filterHeadClick("Brand")}
        />
      </div>
    </div>
  );
};

export default FilterComp;





// SORT ITEM COMPONENT

const SortItemComp = () => {

  const { proSorting, clearSortProduct } = useProductContext();

  const sortClearBtn = useRef(null);
  
  const [activeSort, setActiveSort] = useState(null);

  const handleSortItemClick = (sortType) => {
    setActiveSort(sortType);
    sortClearBtn.current.style.display = "block";
    proSorting(sortType);
  };

  const clearSort = () => {  
    setActiveSort(null);
    sortClearBtn.current.style.display = "none";
    clearSortProduct();
  }

  return (
    <div className="sortArea flex-start wrap">
      <p className="sortHead">Sort By:</p>
      <span
        className={`sortItem ${activeSort === "Discount" ? "active" : ""}`}
        onClick={() => handleSortItemClick("Discount")}
      >
        Discount
      </span>
      <span
        className={`sortItem ${activeSort === "PriceLowToHigh" ? "active" : ""}`}
        onClick={() => handleSortItemClick("PriceLowToHigh")}
      >
        Price -- Low to High
      </span>
      <span
        className={`sortItem ${activeSort === "PriceHighToLow" ? "active" : ""}`}
        onClick={() => handleSortItemClick("PriceHighToLow")}
      >
        Price -- High to Low
      </span>
        <p className="sortHead sortClearBtn pointer" onClick={clearSort} ref={sortClearBtn}>Clear x</p>
    </div>
  );
};

export { FilterComp, SortItemComp }
