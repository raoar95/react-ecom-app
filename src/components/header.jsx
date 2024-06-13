import React, { useEffect, useRef } from "react";
import "../css/localshopApp.css";
import "../css/responsive.css";
import PopupModal from "./popup";
import { Link } from "react-router-dom";
import { FaLocationCrosshairs, FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart, FaUser, FaSearch, FaArrowCircleLeft } from "react-icons/fa";
import { DownArrowIcon } from "./icon";
import Sidepanel from "./sidepanel";
import { useCartContext } from "../state/context/CartContext";
import { InputNoLabel } from "../components/formComp";
import { useProductContext } from "../state/context/AppContext";
import  logoFile from "../assets/Images/logo.png"
import googlePlayImg from "../assets/Images/google-play-badge.png"
import appStoreImg from "../assets/Images/app-store-badge.png"

// SIDE PANEL CONTENT COMPONENT

const SidePanlContent = () => {
  return (
    <div className="menu-head-top">
      <div className="top-p">
        <div className="head-top">
          <FaUser />
          <div className="first-t">
            Hello
            <br />
            <Link to="#">
              Login to Store
            </Link>
          </div>
        </div>
        <div className="head-bottom">
          <Link to="#">
            My Account
          </Link>
          <Link to="#">My Order</Link>
        </div>
      </div>
      <div className="side-sec">
        <div className="side-box">
          <h5>
            <Link to="#">Home</Link>
          </h5>
        </div>
        <div className="side-box">
          <h4>
            <span>Featured Department</span>
          </h4>
          <ul>
            <li>
              <Link to="#">Smartphones</Link>
            </li>
            <li>
              <Link to="#">Keypad / Featured phone</Link>
            </li>
            <li>
              <Link to="#">Mobile Accessories</Link>
            </li>
            <li>
              <Link to="#">Smart Watch</Link>
            </li>
            <li>
              <Link to="#">Headphone & Earphone</Link>
            </li>
            <li>
              <Link to="#">Speakers</Link>
            </li>
            <li>
              <Link to="#">Explore Laptop</Link>
            </li>
            <li>
              <Link to="#">Smart T.V’s</Link>
            </li>
          </ul>
        </div>
        <div className="side-box">
          <h4>
            <span>Highlighted Categories</span>
          </h4>
          <ul>
            <li>
              <Link to="#">Mobile</Link>
            </li>
            <li>
              <Link to="#">Laptop</Link>
            </li>
            <li>
              <Link to="#">Television</Link>
            </li>
            <li>
              <Link to="#">Refurbished / Used Products</Link>
            </li>
          </ul>
        </div>
        <div className="side-box">
          <h4>
            <span>Need help</span>
          </h4>
          <ul>
            <li>
              <Link to="#">Guide</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <Link to="#">Find Service Center</Link>
            </li>
          </ul>
        </div>
        <div className="side-box">
          <h4>
            <span>Know Us & Our Policies</span>
          </h4>
          <ul>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Terms of Services</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Return & Replacement Policy</Link>
            </li>
            <li>
              <Link to="#">Cancellation Policy</Link>
            </li>
          </ul>
        </div>
        <div className="side-box">
          <h4>
            <span>Get it On</span>
          </h4>
          <div className="appSecSidebar">
            <Link to="#">
              <img src={googlePlayImg} />
            </Link>
            <Link to="#">
              <img src={appStoreImg} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


// NAV SEARCH INPUT COMPONENT

const NavSearch = (props) => {

  return (
    <div className={props.searchClass}>
      { props.modalInput ? props.modalCont : (

      <InputNoLabel
        type="search"
        id="modalSearch"
        class="ellipsis"
        placeholder="Search for Product, Categories, Seller &amp; more ..."
        autoComplete="off"
        autoFocus={true}
        chngFunc={props.chngFunc}
      />

      ) }
      <div className="serchIcon pointer flex-center">
        <FaSearch />
      </div>
    </div>
  );
};


// NAV SEARCH MODAL CONTENT COMPONENT

const SearchModal = () => {

  const { searchQuery, queryErrorMSg, GoToPage } = useProductContext();

  const searchModalNavigate = (id) => {

    let myModal = document.querySelector(".searchModal");

    GoToPage(id);
    document.body.style.overflow = "";
    myModal.style.display = "none";

  };

  return (

  <div className="searchResultSec">

    { queryErrorMSg ? <p className="searchModalError">{queryErrorMSg}</p> : null }

    {searchQuery.map((curElem) => { 
      
      return (
    
    <div className="proResult flex-start w-100 pointer" onClick={() => searchModalNavigate(curElem.id)}>
      <div className="proResImg flex-center">
        <img src={curElem.image} className="img-res" />
      </div>
      <p className="prorescont twoLineElipsis">{curElem.title}</p>
    </div>

    )
  
  })}
    
  </div>

    )

}


// NAV COMPONENT

const Nav = () => {

  const { getSearchQuery } = useProductContext();

  const { cartTotalItems } = useCartContext();


  // NAV STICKY ON SCROLL JS

  const myNav = useRef(null);

  const navStickonScroll = () => {
    
    let offset = window.scrollY;

    if (offset > 0) {
      myNav.current.classList.add("sticky");
    } else {
      myNav.current.classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navStickonScroll);
  }, []);


  return (

    <header className="nav flow-hidden" ref={myNav}>
      <div className="flex-space">

        {/*....... HEADER LEFT SEC START HERE.......*/}

        <div className="headerLeftSec flex-space w-100">

          {/*....... NAV FLEX ITEM 1 START HERE.......*/}

          <div className="navFlexItem1 flex-center">
            <Sidepanel
              openBtn={true}
              panelClass="sidepanel"
              panelContent={<SidePanlContent />}
            />

            <Link to="/">
              <img src={logoFile} />
            </Link>
          </div>

          {/*....... NAV FLEX ITEM 1 END HERE.......*/}


          {/*....... NAV FLEX ITEM 2 START HERE.......*/}

          <div className="navFlexItem2 flex-space">
            <PopupModal
              modalClass="popupModal" 
              navAddrBtn={true}
              navAddrClass="navAddress flex-space"
              navAddrCont={
                <>
                  <FaLocationDot />
                  <span className="ellipsis">Jamshedpur</span>
                  <DownArrowIcon />
                </>
              }
              conBoxClass="modalContentBox center"
              conBoxHeadClass="modalHeadSec flex-space"
              head="Select Your Address"
              headDes="Select location to check delivery avaibility 😊"
              conBoxContClass="modalContentSec"
              modalContent={
                <>
                  <p className="flex-start">
                    <FaLocationDot /> <span>Enter a Pincode</span>
                  </p>
                  <br />
                  <p className="flex-start">
                    <FaLocationCrosshairs /> <span>Detect My Location</span>
                  </p>
                </>
              }
            />
            <NavSearch
             searchClass="navSearchBar flex-center w-100"
             modalInput={true}
             modalCont={
            <PopupModal
              modalClass="popupModal searchModal" 
              modalSearch={true}
              conBoxClass="modalContentBox searchModalBox"
              conBoxHeadClass="modalHeadSec searchHeadSec flex-space"
              headContent={<NavSearch searchClass="navSearchBar flex-center w-100" chngFunc={getSearchQuery}/>}
              chngCloseBtn={true}
              chngCloseCont={<FaArrowCircleLeft />}
              conBoxContClass="modalContentSec searchModalContBox"
              modalContent={<SearchModal />}
              />} 
            />
          

          </div>

          {/*....... NAV FLEX ITEM 2 START HERE.......*/}

        </div>

        {/*....... HEADER LEFT SEC END HERE.......*/}


        {/*....... HEADER RIGHT SEC START HERE.......*/}

        <div className="navFlexItem3 flex-end">

        <Link to="/cart">
          <div className="navCart flex-space pointer ellipsis">
            
              <FaShoppingCart />
              <span>CART</span>
              {cartTotalItems === 0 ? null : <span className="cartCircle">{cartTotalItems}</span>}
            
          </div>
          </Link>

          <Link to="/login">
          <div className="navLogReg flex-space pointer ellipsis">
            <FaUser />
            
              <span>LOGIN / REGISTER</span>

          </div>
          </Link>
        </div>

        {/*....... HEADER RIGHT SEC END HERE.......*/}

      </div>


      {/* ADDRESS MODAL START HERE */}

      <PopupModal
        modalClass="popupModal" 
        navAddrBtn={true}
        navAddrClass="resAddSec navAddress flex-space"
        navAddrCont={
          <>
            <FaLocationDot />
            <span className="ellipsis">Jamshedpur</span>
            <DownArrowIcon />
          </>
        }
        conBoxClass="modalContentBox center"
        conBoxHeadClass="modalHeadSec flex-space"
        head="Select Your Address"
        headDes="Select location to check delivery avaibility 😊"
        conBoxContClass="modalContentSec"
        modalContent={
          <>
            <p className="flex-start">
              <FaLocationDot /> <span>Enter a Pincode</span>
            </p>
            <br />
            <p className="flex-start">
              <FaLocationCrosshairs /> <span>Detect My Location</span>
            </p>
          </>
        }
      />

    </header>
  );
  
}

export default Nav;
