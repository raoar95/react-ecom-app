import React, { useEffect, useState } from "react";
import Breadcumb from "../components/breadcumb";
import { ProductBox, RespBar } from "../components/productComp";
import { useParams } from "react-router-dom";
import { FilterComp, SortItemComp } from "../components/filterSort";
import PopupModal from "../components/popup";
import { useProductContext } from "../state/context/AppContext";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";


//....ELECTRONIC CATEGORY PAGE COMPONENT....//

const Category = () => {

// GETTING SINGLE PRODUCT URL FOR PRODUCT DETAIL PAGE

  const { category } = useParams();

  const catProApiUrl = "https://fakestoreapi.com/products/category";

  const { isLoading, isError, getProductCategory, catProducts, GoToPage } = useProductContext();

  useEffect(() => {

    if (category) {
      getProductCategory(`${catProApiUrl}/${category}`, category);
    }

  }, [category]);




// FILTER PRODUCT

const [filterMsg, setFilterMsg] = useState("")

useEffect(() => {

  if (catProducts.length === 0 ) {

    setFilterMsg("Sorry Not Found Any Products ...")

  }

  else {

    setFilterMsg(""); 

  }

}, [catProducts])


  

// API CALL STATE

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products...</div>;
  }


  return (

/* ....... CATEGORY BACKGROUND CONTAINER START HERE  ....... */

<div className="myCartRow cartdarkBg flow-hidden">

{/* ....... BREADCRUMB SEC START HERE  ....... */}

<Breadcumb brdClass="breadcumb-row" mainText={category} />

{/* ....... BREADCRUMB SEC END HERE   ....... */}

{/* ....... CATEGORY MAIN CONTAINER START HERE  ....... */}

<div className="catRow flex-space">

  {/* ....... CATEGORY FILTER CONTAINER (FLEXBOX ROW 1) START HERE  ....... */}

  <FilterComp />

  {/* ....... CATEGORY FILTER CONTAINER (FLEXBOX ROW 1) END HERE  ....... */}

  {/* ....... CATEGORY PRODUCT CONTAINER (FLEXBOX ROW 2) START HERE  ....... */}

  <div className="myStoreRow catProRow flow-hidden w-100">

    {/* ....... CATEGORY HEAD SECTION START HERE  ....... */}

    <div className="catHead">
      <h1>ALL PRODUCTS</h1>
      <p>Showing {catProducts.length} out of {catProducts.length} results for {category}</p>
      <SortItemComp />
    </div>

    {/* ....... CATEGORY HEAD SECTION END HERE  ....... */}


    {/* ....... CATEGORY PRODUCT LIST START HERE  ....... */}

    <div className="myStoreFlex flex-space wrap">

      { filterMsg ? <p className="filterMsg">{filterMsg} 😊</p> : "" }

      {catProducts.map((curElem) => (
        <ProductBox
          key={curElem.id}
          onClick={() => GoToPage(curElem.id)}
          id={curElem.id}
          category={curElem.category}
          proImgLink={curElem.image}
          proName={curElem.title}
          proSalePrice={curElem.price}
          proPrice={curElem.price + 500}
          proSellName="Seller Name"
        />
      ))}
    </div>

    {/* ....... CATEGORY PRODUCT LIST END HERE  ....... */}
    
  </div>

  {/* ....... CATEGORY PRODUCT CONTAINER (FLEXBOX ROW 2) END HERE  ....... */}

</div>

{/* ....... CATEGORY MAIN CONTAINER END HERE  ....... */}

{/* ....... RESPONSIVE BAR START HERE  ....... */}

<RespBar 
  Btn1={
    <>
      <PopupModal
        modalClass="popupModal" 
        RespBar={true}
        btnClass="resCatBt1 pointer flex-center"
        respBtnTxt={<><FaSortAmountDownAlt /> SORT</>}
        sepClass="resBtnSeprator flex-center"
        conBoxClass="modalContentBox sortModalContBox center"
        conBoxHeadClass="modalHeadSec flex-space"
        head="SORT BY"
        conBoxContClass="modalContentSec sortModalContSec"
        modalContent={<SortItemComp />}
      />
    </>
  }
  Btn2={
    <>
      <PopupModal
        modalClass="popupModal" 
        RespBar={true}
        btnClass="resCatBt2 pointer flex-center"
        respBtnTxt={<><FaSliders /> FILTER</>}
        sepClass="resBtnSeprator flex-center"
        conBoxClass="modalContentBox filterModalContBox center"
        conBoxHeadClass="modalHeadSec flex-space"
        head="FILTER PRODUCT"
        conBoxContClass="modalContentSec filterModalContSec"
        modalContent={<FilterComp />}
        modalBtn={true}
        modalClsBtnTxt="Apply"
      />
    </>
  }
/>

{/* ....... RESPONSIVE BAR END HERE  ....... */}

</div>

/* ....... CATEGORY BACKGROUND CONTAINER END HERE  ....... */

  );
};

export default Category;
