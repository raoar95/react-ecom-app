import React from 'react';

const FormatPrice = ({ price }) => {
   
  // CHECK IF PRICE IS NEGATIVE THEN DISPLAY IT 0
  
   const formattedPrice = price < 0 ? 0 : Number(price);

    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(formattedPrice)

};

export default FormatPrice;
