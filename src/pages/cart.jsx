import React from "react";
import { CartProduct, PriceSummary, CartSecurity, CartResAdd, CartResBtn } from "../components/cartComp";
import { Link } from "react-router-dom";
import Breadcumb from "../components/breadcumb";
import { useCartContext } from "../state/context/CartContext";
import FormatPrice from "../components/format";

const Cart = () => {

  // ADD CART DATA TO CART

  const { cartData, cartTotalItems, cartTotalPrice, cartDiscPrice, ShippingFee, proceedCheckout } = useCartContext();

  let cartFinalPrice = (cartTotalPrice - cartDiscPrice) + ShippingFee;

  // SHOW IF CART EMPTY

  if (cartData.length === 0) {

    return (

      <div className="myCartRow cartdarkBg">

        <Breadcumb brdClass="breadcumb-row flex-start" mainText="Cart" />

        <div className="emptyCart breadcumb-row text-center">

          <h1>Your Cart is Empty ... 😊</h1>
          <Link to="/">
            <h3>Start Shopping</h3>
          </Link>

        </div>

      </div>

    );

  } 

  // SHOW CART PRODUCT IF NOT EMPTY
  
  else 
  
  {
    return (

/* ....... CATEGORY BACKGROUND CONTAINER START HERE ....... */

<div className="myCartRow cartdarkBg">

{/* ....... BREADCRUMB SECTION START HERE ....... */}

<Breadcumb brdClass="breadcumb-row flex-start" mainText="Cart" />

{/* ....... BREADCRUMB SECTION END HERE  ....... */}

{/* ....... CART MAIN CONTAINER START HERE ....... */}

<div className="myCartBttmRow flex-space">

  {/* ....... CART FLEXBOX 1 START HERE ....... */}

  <div className="cartFlexBox1 cartdarkBg w-100 flow-hidden">

    <CartResAdd />

    {/* ....... CART PRODUCT SECTION START HERE ....... */}

    <div className="cartProductSec">

      {/* ....... CART HEAD START HERE ....... */}

      <div className="cartHead crtHeadMain flex-space">
        <h2>Shopping Cart ({cartTotalItems} Items)</h2>
        <h2>Cart Total ({<FormatPrice price={cartFinalPrice} />})</h2>
      </div>

      {/* ....... CART HEAD MAIN END HERE  ....... */}

      {cartData.map((curElem) => {
        return (
          <CartProduct
            key={curElem.singleProduct.id}
            productID={curElem.singleProduct.id}
            imgLink={curElem.singleProduct.image}
            imgClickId={curElem.singleProduct.id}
            title={curElem.singleProduct.title}
            discPrice={curElem.singleProduct.price}
            price={curElem.singleProduct.price + 500}
            qtyState={curElem.reqQty}
            sellerName="National Electronics"
          />
        ); // console.log(curElem.reqQty);
      })}

    </div>

    {/* ....... CART PRODUCT SECTION END HERE  ....... */}

  </div>

  {/* ....... CART FLEXBOX 1 END HERE  ....... */}

  {/* ....... CART FLEXBOX 2 START HERE ....... */}

  <div className="cartFlexBox2">

    {/* ....... CARD ADDRESS SECTION START HERE ....... */}

    <div className="cardAddressSec">

      {/* ....... CART HEAD START HERE ....... */}

      <div className="cartHead flex-space wrap">
        <h2>Delivery Details</h2>
        {/* <Link to="/" className="addAddrBtn">
          ADD NEW ADDRESS
        </Link> */}
      </div>

      {/* ....... CART HEAD END HERE  ....... */}

      {/* ....... CART ADDRESS START HERE ....... */}

      <div className="cartAddress">
        <p>
          <span>Arun Rao</span>
        </p>
        <p>
          Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri,
          Jamshedpur, Jharkhand 831003
        </p>
        <p>
          <span>Contact No:</span> 9999999999
        </p>
        <p>
          <span>Address Type:</span> Home (10 A.M to 9 P.M)
        </p>
        {/* <p className="editAdd">
          <span>EDIT ADDRESS</span>
        </p> */}
      </div>

      {/* ....... CART ADDRESS END HERE  ....... */}

    </div>

    {/* ....... CARD ADDRESS SECTION END HERE  ....... */}

    {/* ....... CARD SUMMARY SECTION START HERE ....... */}

    <div className="cardSumSec">

      {/* ....... CART HEAD SUMMARY START HERE ....... */}

      <div className="cartHead flex-space" id="cartSummary">
        <h2>Cart Summary</h2>
      </div>

      {/* ....... CART HEAD SUMMARY END HERE  ....... */}

      <PriceSummary
        totalAmt={cartTotalPrice}
        discAmt={cartDiscPrice}
        deliveryAmt={ShippingFee}
        finalAmt={cartFinalPrice}
        savingAmt={cartDiscPrice}
      />

      <CartSecurity />

      {/* ....... CART PAYMENT SECTION START HERE ....... */}

      <div className="cartPaymentSec">
        
        <p>Subtotal ({cartTotalItems} Items)</p>
        <span>{<FormatPrice price={cartFinalPrice} />}</span>

        {/* ....... CART ACTION BUTTONS START HERE ....... */}

        <div className="cart-action-buttons">

          <Link to="/checkout" className="cartBtn cartPayBtn ellipsis" onClick={proceedCheckout}>
            PROCEED FOR PAYMENT
          </Link>
          <br />
          <Link to="/" className="cartBtn cartMoreBtn ellipsis">
            SHOP MORE PRODUCTS
          </Link>

        </div>

        {/* ....... CART ACTION BUTTONS END HERE  ....... */}

      </div>

      {/* ....... CART PAYMENT SECTION END HERE  ....... */}

    </div>

    {/* ....... CARD SUMMARY SECTION END HERE  ....... */}

  </div>

  {/* ....... CART FLEXBOX 2 END HERE  ....... */}

</div>

{/* ....... CART MAIN CONTAINER END HERE  ....... */}

<CartResBtn 
  cartPrice={cartFinalPrice}
  btnText="PROCEED FOR PAYMENT"
  btnLink="/checkout"
  btnClick={proceedCheckout}
/>

</div>

/* ....... CATEGORY BACKGROUND CONTAINER END HERE  ....... */

    );
  }
};

export default Cart;
