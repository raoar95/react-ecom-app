import React, { useRef } from "react";
import { CartProduct, PriceSummary, CartSecurity, CartResAdd, CartResBtn } from "../components/cartComp";
import { Link } from "react-router-dom";
import Breadcumb from "../components/breadcumb";
import { FaChevronRight } from "react-icons/fa";
import { useCartContext } from "../state/context/CartContext";
import Sidepanel from "../components/sidepanel";

// PROMOCODE PANEL COMPONENT

const PromoPanelContent = () => {

const { applyPromo } = useCartContext(); 


// PROMODE CODE APPLY FUNCTION

const promoInput = useRef();

const errorMsg = useRef();

const promoFunc = () => {
  
applyPromo(promoInput.current.value, errorMsg.current);

}

  return (

    <>
      <h1>Enter Promocode to Apply Discount 😊</h1>
        <br />
        <input type="text" placeholder="Enter Promocode Here ..." required ref={promoInput}/>
       <br />
      <br />
       <p className="error-msg" ref={errorMsg}>Error...</p>
        <br />
      <input type="submit" className="myBtn" value="Apply" onClick={promoFunc}/>
       <br />
        <br />
      <p>Promocode: flat500<br /><br /> (Check By Entering Different Promocode)</p>
    </>

  );

};



// CHECKOUT PAGE COMPONENT

const Checkout = () => {

  const { checkoutData, ShippingFee, checkoutPrice, chkDiscPrice } = useCartContext();

  const { promoAmount } = useCartContext();

  let checkoutFinalPrice = ((checkoutPrice - chkDiscPrice) - promoAmount) + ShippingFee;

  let chkSaving = chkDiscPrice + promoAmount;

  return (

 /* ....... CHECKOUT BACKGROUND CONTAINER START HERE ....... */

  <div className="myCartRow checkoutRow cartdarkBg">

{/* ....... BREADCRUMB SECTION START HERE ....... */}

<Breadcumb
  brdClass="breadcumb-row flex-start"
  extraBrd={
    <>
      <FaChevronRight />
      <Link to="/cart">Cart</Link>
    </>
  }
  mainText="Checkout"
/>

{/* ....... BREADCRUMB SECTION END HERE  ....... */}

{/* ....... CHECKOUT MAIN CONTAINER START HERE ....... */}

<div className="myCartBttmRow flex-start">

  {/* ....... CHECKOUT FLEXBOX 1 START HERE ....... */}

  <div className="cartFlexBox1 checkoutFb1 flow-hidden w-100">

    <CartResAdd />

    {/* ....... CHECKOUT PRODUCT SECTION START HERE ....... */}

    <div className="checkoutProductSec">
      {checkoutData.map((curElem) => {
        return (
          <CartProduct
            key={curElem.singleProduct.id}
            productID={curElem.singleProduct.id}
            imgLink={curElem.singleProduct.image}
            title={curElem.singleProduct.title}
            chkDiscPrice={curElem.singleProduct.price}
            chkPrice={curElem.singleProduct.price + 500}
            chkQty={curElem.reqQty}
            sellerName="National Electronics"
          />
        );
      })}
    </div>

    {/* ....... CHECKOUT PRODUCT SECTION END HERE  ....... */}

  </div>

  {/* ....... CHECKOUT FLEXBOX 1 END HERE  ....... */}

  {/* ....... CHECKOUT FLEXBOX 2 START HERE ....... */}

  <div className="cartFlexBox2 checkoutFb2">

    {/* ....... CART HEAD START HERE ....... */}

    <div className="cartHead myflex">
      <h2>Order Summary</h2>
    </div>

    {/* ....... CART HEAD END HERE  ....... */}

    <PriceSummary
      totalAmt={checkoutPrice}
      discAmt={chkDiscPrice}
      promoAmt={promoAmount}
      deliveryAmt={ShippingFee}
      finalAmt={checkoutFinalPrice}
      savingAmt={chkSaving}
    />

    <Link to="/" className="cartBtn checkoutBtn">
      CONFIRM ORDER
    </Link>

    <Sidepanel
      openLink={true}
      panelClass="sidepanel promoModal text-center"
      panelContent={<PromoPanelContent />}
    />

    {/* ....... SIDE PANEL END HERE  ....... */}

    <CartSecurity />

  </div>

  {/* ....... CHECKOUT FLEXBOX 2 END HERE  ....... */}

</div>

{/* ....... CHECKOUT MAIN CONTAINER END HERE  ....... */}

<CartResBtn 
  btnText="CONFIRM ORDER"
  btnLink="/"
/>

</div>

/* ....... CHECKOUT BACKGROUND CONTAINER END HERE  ....... */

);

};

export default Checkout;
