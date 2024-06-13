import React from "react";
import FormatPrice from "./format";

// PRODUCT PRICE BOX COMPONENT

const PriceBox = (props) => {
  const discountRate =
    ((props.proPrice - props.salePrice) / props.proPrice) * 100;

  return (
    <div className="priceBox ellipsis">
      <span className="sale-price">
        <FormatPrice price={props.salePrice} />
      </span>
      <span className="price">
        <FormatPrice price={props.proPrice} />
      </span>
      <span className="percentage-off">{Math.ceil(discountRate)}%</span>
    </div>
  );
};


// PRODUCT BOX COMPONENT

const ProductBox = (props) => {
  return (
    <div key={props.id} className="productBox" onClick={props.onClick}>
      <div className="proBoxImg">
        <img className="img-res" src={props.proImgLink} href="" />
      </div>
      <div className="proTextBox">
        <h4 className="twoLineElipsis w-100">{props.proName}</h4>
        <PriceBox salePrice={props.proSalePrice} proPrice={props.proPrice} />
        <span className="save-rs ellipsis">
          Save
          {
            <FormatPrice
              price={Math.ceil(props.proPrice - props.proSalePrice)}
            />
          }
        </span>{" "}
        <br />
        <p className="seller ellipsis">
          Seller: <span className="seller-name">{props.proSellName}</span>
        </p>
        <a className="btn proBoxBtn" href="">
          View Details
        </a>
      </div>
    </div>
  );
};


// RESPONSIVE BUTTON BAR COMPONENT

const RespBar = (props) => {
  return(
    <div className="resBar flex-start">
      {props.Btn1}
      <span className={props.sepClass}>|</span>
      {props.Btn2}
      { props.Btn3 ?  <><span>|</span>{props.Btn3}</> : null }
    </div>
  );
};


export { ProductBox, PriceBox, RespBar };