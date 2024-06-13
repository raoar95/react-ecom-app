import React, { useEffect, useRef, useState } from "react";
import Breadcumb from "../components/breadcumb";
import { Link, useParams } from "react-router-dom";
import { ProductBox, PriceBox, RespBar } from "../components/productComp";
import FormatPrice from "../components/format";
import { CartResAdd, QtyCounter } from "../components/cartComp";
import { useProductContext } from "../state/context/AppContext";
import { AiOutlineFileProtect } from "react-icons/ai";
import { TbTruckDelivery, TbReplaceFilled, TbCoinRupee } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { useCartContext } from "../state/context/CartContext";
import ProductSlider from "../components/productSlider";


// PRODUCT PAGE MAIN COMPONENT

const ProductPage = () => {

  // GETTING SINGLE PRODUCT ID 
  
  const { id } = useParams();



  // ADD TO CART CONTEXT & STATE
  
  const { addToCart, buyNow } = useCartContext();

  const [reqQty, setReqQty] = useState(1);



  // SINGLE PRODUCT PAGE

  const { isLoading, isError, getSingleProductData, singleProduct, products, GoToPage } = useProductContext();

  const SinProApiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {

    getSingleProductData(`${SinProApiUrl}/${id}`, id);

  }, [id]);



  // SET SINGLE PRODUCT IMAGE

  const [ mainImg, setMainImg] = useState(null);

  useEffect(() => {
    if (singleProduct && singleProduct.image) {
      setMainImg(singleProduct.image);
    }
  }, [singleProduct]);



  // COUNTER ERRO MSG DIPLAY REFERENCE

  const errorMsg = useRef();



  // LOADING & ERROR STATE

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products...</div>;
  }


  return (

/* ....... PRODUCT PAGE BACKGROUND CONTAINER START HERE ....... */

<div className="myCartRow cartdarkBg flow-hidden">

{/* ....... BREADCRUMB SECTION START HERE ....... */}

<Breadcumb
  brdclassName="breadcumb-row cartBRow"
  firstIconclassName="fas fa-home"
  link="/"
  linkText="Home"
  extraBrd={
    <>
      <FaChevronRight />
      <Link to={`/category/${singleProduct.category}`}>
        {singleProduct.category}
      </Link>
    </>
  }
  mainText={singleProduct.title}
/>

{/* ....... BREADCRUMB SECTION END HERE  ....... */}

{/* ....... PRODUCT MAIN CONTAINER START HERE ....... */}

<div className="myProductRow flow-hidden">

  {/* ....... PRODUCT IMAGE ROW START HERE ....... */}

  <div className="proImgRow flex-start">

    {/* ....... PRODUCT IMAGE SECTION START HERE ....... */}

    <div className="proImageSec flex-center flow-hidden">

    {/* ....... PRODUCT IMAGE SECTION 1 START HERE ....... */}

      <div className="proSec1">

        <div className="proBox flow-hidden flex-center pointer" onClick={() => setMainImg(singleProduct.image)}>
          <img src={singleProduct.image} className="img-res" />
        </div>

        <div className="proBox flow-hidden flex-center pointer" onClick={() => setMainImg("https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/m/n/m/-original-imagt4qpby4t6gze.jpeg?q=70")}>
          <img
            src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/m/n/m/-original-imagt4qpby4t6gze.jpeg?q=70"
            className="img-res"
          />
        </div>

        <div className="proBox flow-hidden flex-center pointer" onClick={() => setMainImg("https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/t/r/i/-original-imagt4qp6vrmeshg.jpeg?q=70")}>
          <img
            src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/t/r/i/-original-imagt4qp6vrmeshg.jpeg?q=70"
            className="img-res"
          />
        </div>

        <div className="proBox flow-hidden flex-center pointer" onClick={() => setMainImg("https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/e/r/-original-imagt4qzyydjs5tq.jpeg?q=70")}>
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/e/r/-original-imagt4qzyydjs5tq.jpeg?q=70"
            className="img-res"
          />
        </div>

      </div>

      {/* ....... PRODUCT IMAGE SECTION 1 END HERE ....... */}

      {/* ....... PRODUCT IMAGE SECTION 2 START HERE ....... */}

      <div className="proSec2">
        <div className="proBox flow-hidden flex-center">
          <img src={mainImg} className="img-res" />
        </div>
      </div>

    {/* ....... PRODUCT IMAGE SECTION 2 END HERE ....... */}

    </div>

    {/* ....... PRODUCT IMAGE SECTION END HERE  ....... */}

    {/* ....... PRODUCT DETAILS SECTION START HERE ....... */}

    <div className="proDetailSec flow-hidden">

      {/* ....... PRODUCT TEXT BOX START HERE ....... */}

      <div className="proTextBox">

        <h1 className="twoLineElipsis">{singleProduct.title}</h1>

        <PriceBox
          salePrice={singleProduct.price}
          proPrice={singleProduct.price + 500}
        />
        <p>+ ₹40 seller delivery charges</p>
        <div className="proSaveRs">
          Save{" "}
          {
            <FormatPrice
              price={Math.ceil(
                singleProduct.price + 500 - singleProduct.price
              )}
            />
          }
        </div>

        <div className="stock">In Stock</div>

        <div className="actionButton flex-start wrap">
          <QtyCounter qtyState={reqQty} isCartPage={false} setReqQty={setReqQty} errorMsgRef={errorMsg}/>
          <Link to="/cart">
            <button type="button" className="myBtn proCrtBtn" onClick={() => addToCart({singleProduct, reqQty})}>
              <FaCartPlus /> ADD TO CART
            </button>
          </Link>
          <Link to="/checkout">
            <button type="button" className="myBtn proBuyBtn" onClick={() => buyNow({singleProduct, reqQty})}>
              <HiMiniShoppingBag /> BUY NOW
            </button>
          </Link>
        </div>
        <br />

        <p className="error-msg" ref={errorMsg}>Error...</p>

      </div>

      {/* ....... PRODUCT TEXT BOX END HERE  ....... */}

      {/* ....... PRODUCT ICON SECTION START HERE ....... */}

      <div className="proIconSec flex-space">
        <div className="icon-area">
          <AiOutlineFileProtect />
          <p>1 Year Warranty</p>
        </div>
        <div className="icon-area">
          <TbCoinRupee />
          <p>Cash On Delivery Available</p>
        </div>
        <div className="icon-area rp">
          <TbReplaceFilled />
          <p>7 Day Easy Replacement</p>
        </div>
        <div className="icon-area">
          <TbTruckDelivery />
          <p>Fast Delivery</p>
        </div>
      </div>

      {/* ....... PRODUCT ICON SECTION END HERE  ....... */}

      <CartResAdd />

      {/* ....... PRODUCT SELLER BOX START HERE ....... */}

      <div className="proSellerBox soldBySec">
        <h4 className="proSellerHead">Sold By</h4>
        <div className="proSelData myflex ellipsis">
          <div className="seller-left">
            <img src="" />
            <span>National Electronics</span>
          </div>
          {/* <Link to="#" className="seller-right"> View Store</Link> */}
        </div>
      </div>

      {/* ....... PRODUCT SELLER BOX END HERE  ....... */}

    </div>

    {/* ....... PRODUCT DETAILS SECTION END HERE  ....... */}

  </div>

  {/* ....... PRODUCT IMAGE ROW END HERE  ....... */}

  {/* ....... PRODUCT SPECIFICATION ROW START HERE ....... */}

  <div className="proSpecRow">
    <h4>PRODUCT DETAILS:</h4>
    <div className="pro-tab-content">
      <table className="pro-table">
        <tbody>
          <tr>
            <th>Brand Name</th>
            <td>Input</td>
          </tr>
          <tr>
            <th>Condition</th>
            <td>New</td>
          </tr>
          <tr>
            <th>Warranty</th>
            <td>Input</td>
          </tr>
          <tr>
            <th>Made In</th>
            <td>India</td>
          </tr>
          <tr>
            <th>In Sales Package</th>
            <td>Input</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4>PRODUCT SPECIFICATION:</h4>
    <div className="pro-tab-content">
      <div className="pro-inner">
        <h5>Highlight Features</h5>
        <ul>
          <li>Android Smart TV</li>
          <li>43 Inch</li>
          <li>Full HD+ [2560x1440 Pixel]</li>
          <li>20 W Speaker Output</li>
          <li>3 x HDMI | 2 x USB</li>
          <li>1 Year Warranty</li>
        </ul>
      </div>

      <div className="pro-inner">
        <h5>General Details</h5>
        <table className="pro-table">
          <tbody>
            <tr>
              <th>Product Name</th>
              <td>Input</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>Input</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>Input</td>
            </tr>
            <tr>
              <th>Shape</th>
              <td>Input</td>
            </tr>
            <tr>
              <th>Screen Type</th>
              <td>Input</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pro-inner">
        <h5>Operating System</h5>
        <table className="pro-table">
          <tbody>
            <tr>
              <th>Operating System</th>
              <td>Input</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pro-inner">
        <h5>Usage & Suitability</h5>
        <table className="pro-table">
          <tbody>
            <tr>
              <th>Usage</th>
              <td>Input</td>
            </tr>
            <tr>
              <th>Suitable For</th>
              <td>Input</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pro-inner">
        <h5>Body</h5>
        <table className="pro-table">
          <tbody>
            <tr>
              <th>Body Material</th>
              <td>Input</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pro-inner">
        <h5>Other Features</h5>
        <table className="pro-table">
          <tbody>
            <tr>
              <th>Features</th>
              <td>Input</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h4>RETURN / REPLACEMENT POLICY:</h4>

    <div className="pro-tab-content">
      <p>
        Our website offers a 7 days replacement policy in case of any
        damaged product. To know more check our{" "}
        <a
          href="https://localscart.com/host/views/users/return-policy.php"
          target="_blank"
        >
          <strong>Return & Replacement Policy</strong>
        </a>
        .
      </p>
    </div>
  </div>

  {/* ....... PRODUCT SPECIFICATION ROW END HERE  ....... */}

  {/* ....... SIMILAR PRODUCTS SECTION START HERE ....... */}

  <div className="proSellerBox proRelSec proSellerSec">

    <h4 className="proSellerHead">SIMILAR PRODUCTS:</h4>
    <div className="proSelData proRelRow proSlider flex-start">  

      <ProductSlider 
        slideContent={
          products.filter((curElem) => {
            return curElem.category === singleProduct.category && curElem.id !== singleProduct.id 
          }).map((curElem) => {
            return (
              <ProductBox
                onClick={() => GoToPage(curElem.id)}
                proImgLink={curElem.image}
                proName={curElem.title}
                proSalePrice={curElem.price}
                proPrice={curElem.price + 500}
                proSellName="Seller Name"
              />
            )
          })
        } 
      />

    </div>

  </div>

  {/* ....... SIMILAR PRODUCTS SECTION END HERE  ....... */}

  {/* ....... RESPONSIVE BUTTONS START HERE ....... */}
  
  <RespBar
    sepClass="resBtnProSep flex-center" 
    Btn1={
      <>
        <Link to="/cart" className="myBtn proCrtBtn flex-center" onClick={() => addToCart({singleProduct, reqQty})}>
          <FaCartPlus /> ADD TO CART
        </Link>
      </>
    } 
    
    Btn2={
      <>
        <Link to="/checkout" className="myBtn proBuyBtn flex-center" onClick={() => buyNow({singleProduct, reqQty})}>
          <HiMiniShoppingBag /> BUY NOW
        </Link>
      </>
    }
  />

  {/* ....... RESPONSIVE BUTTONS END HERE  ....... */}

</div>

{/* ....... PRODUCT MAIN CONTAINER END HERE  ....... */}

</div>

/* ....... PRODUCT PAGE BACKGROUND CONTAINER END HERE  ....... */

);

};

export default ProductPage;
