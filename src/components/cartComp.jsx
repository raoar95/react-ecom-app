import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import FormatPrice from "./format";
import { useCartContext } from "../state/context/CartContext";
import { useProductContext } from "../state/context/AppContext";

// CART QUANTITY COUNTER COMPONENT

const QtyCounter = (props) => {

  const { cartCounterIncUpdate, cartCounterDecUpdate } = useCartContext();

  const [qty, setQty] = useState(props.qtyState);

  const qtyIncrement = () => {

    if (qty < 5) {

      setQty((prev) => prev + 1);

      props.errorMsgRef.current.style.display = "none";

      {
        !props.isCartPage && props.setReqQty(qty + 1);
      }

      if (props.isCartPage) {
        props.setQtyState(qty + 1);

        cartCounterIncUpdate(props.productId, qty);
      }
    } 
    
    else {
      props.errorMsgRef.current.style.display = "block";
      props.errorMsgRef.current.innerHTML = "You can only Order a maximum of 5 Qty of a single product!";
    }

  };

  const qtyDecrement = () => {

    if (qty > 1) {

      setQty((prev) => prev - 1);

      props.errorMsgRef.current.style.display = "none";

      {
        !props.isCartPage && props.setReqQty(qty - 1);
      }

      if (props.isCartPage) {
        props.setQtyState(qty - 1);
        cartCounterDecUpdate(props.productId, qty);
      }
    } 
    
    else {
      props.errorMsgRef.current.style.display = "block";
      props.errorMsgRef.current.innerHTML = "Qty cannot be 0!";
    }

  };

  return (
    <div className="counter" id="mycounter">
      <span className="down" onClick={() => qtyDecrement()}>
        -
      </span>
      <input type="text" value={qty} readonly />
      <span className="up" onClick={qtyIncrement}>
        +
      </span>
    </div>
  );
};


// CART PRODUCT COMPONENT

const CartProduct = (props) => {
  
  const errorMsg = useRef(null);

  const { GoToPage } = useProductContext();

  const { removeItem } = useCartContext();

  const [newQty, setNewQty] = useState(props.qtyState);

  return (
    <div className="cartInnerArea flow-hidden">
      <div className="cartImgSec flex-center" onClick={() => GoToPage(props.imgClickId)}>
        <img className="img-res" src={props.imgLink} alt="cart image" />
      </div>
      <div className="cartTextSec">
        <div className="cartTitleSec flex-space">
          <p className="cartTitle ellipsis">{props.title}</p>
          <p className="cartDiscPrice ellipsis">
            {props.discPrice ? (<FormatPrice price={props.discPrice * newQty} />) : null} 
            {props.chkDiscPrice ? (<FormatPrice price={props.chkDiscPrice * props.chkQty} />) : null}     
            <span className="cartPrice ellipsis">
              {props.price ? (<FormatPrice price={props.price * newQty} />) : null}
              {props.chkPrice ? (<FormatPrice price={props.chkPrice * props.chkQty} />) : null}
            </span>
          </p>
        </div>
        <p className="cartBottomTextBox ellipsis">
          <span className="cartTextHead">Qty:</span> {props.chkQty ? props.chkQty : newQty } 
          <br />
          {props.price ? (
            <span className="save-rs">
              You Save{" "}
              {<FormatPrice price={(props.price - props.discPrice) * newQty} />}
              !
            </span>
          ) : null}
          {props.chkPrice ? (
            <span className="save-rs">
              You Save{" "}
              {<FormatPrice price={(props.chkPrice - props.chkDiscPrice) * props.chkQty} />}
              !
            </span>
          ) : null}
        </p>
        <p className="cartBottomTextBox ellipsis">
          <span className="cartTextHead">Seller:</span> {props.sellerName}
        </p>
        <p className="error-msg" ref={errorMsg}>Error...</p>
        <div className="cartCounterSec flex-space">
          <QtyCounter
            qtyState={props.qtyState}
            productId={props.productID}
            isCartPage={true}
            setQtyState={setNewQty}
            errorMsgRef={errorMsg}
          />
          <div className="cartTagSec">
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                removeItem(props.productID);
              }}
            >
              <FaTrashAlt /> REMOVE
            </Link>
            {/* <span>|</span>
            <Link to="#" onClick={props.clickFunc}>
              <FaTags /> APPLY PROMOCODE
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};


// CART PRICE SUMMARY COMPONENT

const PriceSummary = (props) => {
  return (
    <div className="cartSumRowSec ellipsis">
      <div className="cartSumRow flex-space">
        <span>ORDER TOTAL</span>
        <span>{<FormatPrice price={props.totalAmt} />}</span>
      </div>
      <div className="cartSumRow flex-space">
        <span>DISCOUNT ON PRODUCT</span>
        <span>- {<FormatPrice price={props.discAmt} />}</span>
      </div>
      {(props.promoAmt > 1) ? (
        <div className="cartSumRow flex-space">
          <span>PROMOCODE DISCOUNT</span>
          <span>- {<FormatPrice price={props.promoAmt} />}</span>
        </div>
      ) : null}
      <div className="cartSumRow flex-space">
        <span>SELLER DELIVERY CHARGES</span>
        <span>{<FormatPrice price={props.deliveryAmt} />}</span>
      </div>
      {props.morePriceRows}
      <div className="cartSumRow flex-space crtBestPrice">
        <span>BEST PRICE</span>
        <span>{<FormatPrice price={props.finalAmt} />}</span>
      </div>
      <div className="cartSumRow flex-space crtSavingPrice">
        <span>Overall Saving</span>
        <span>{<FormatPrice price={props.savingAmt} />}</span>
      </div>
    </div>
  );
};


// CART SECURITY COMPONENT

const CartSecurity = () => {
  return (
    <div class="cartSecurity">
      <AiFillSafetyCertificate />
       <br />
       <p> SAFE & SECURE PAYMENTS. 100% GENEUINE PRODUCTS AND EASY REPLACEMENTS</p>
    </div>
  );
};


// CART RESPONSIVE ADDRESS COMPONENT

const CartResAdd = () => {
  return (
    <>
      <div className="cartResAddRow flex-space">
        <div className="cartReAddsec ellipsis">
          <span>Deliver to - Arun Rao</span>
          <p>
            Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri,
            Jamshedpur, Jharkhand 831003
          </p>
        </div>
        {/* <a href="#" className="cartResAddBtn">
          CHANGE
        </a> */}
      </div>
    </>
  );
};


// CART RESPONSIVE BUTTON COMPONENT

const CartResBtn = ({btnText, btnLink, cartPrice, btnClick}) => {

  return (

    <div className="cartResBtn">
    <div className="cartResTotalSec flex-space">
     <span><a href="#cartSummary">CART TOTAL</a></span>
     <span>{<FormatPrice price={cartPrice} />}</span>
    </div> 
 
     <div className="cartResBtnSec text-center"> 
       <Link to={btnLink} className="myBtn w-100" onClick={btnClick}>{btnText}</Link>
     </div>
   </div>

  )

}

export { CartProduct, PriceSummary, CartSecurity, CartResAdd, CartResBtn, QtyCounter };
