import React, { useState } from "react";
import PropTypes from "prop-types";

function Footer({
  onAddToCart,
  productViewDetail,
  itemInCart,
  onNextProduct,
  onPrevProduct,
}) {
  return (
    <div
      role="button"
      tabIndex="0"
      className="flex h-16 border-t justify-between items-center border-border border-solid cursor-pointer"
    >
      <span
        tabIndex="0"
        role="button"
        onClick={onPrevProduct}
        className="h-full pt-5 w-[200px] hover:bg-[#00cb54] text-center bg-[#00d659] font-bold"
      >
        Prev
      </span>
      <span
        tabIndex="0"
        role="button"
        onClick={onNextProduct}
        className="h-full pt-5 w-[200px] hover:bg-[#00cb54] text-center bg-[#00d659] font-bold"
      >
        Next
      </span>
    </div>
  );
}
Footer.propTypes = {
  onAddToCart: PropTypes.func,
  productViewDetail: PropTypes.object,
  itemInCart: PropTypes.array,
  onNextProduct: PropTypes.func,
  onPrevProduct: PropTypes.func,
};
export default Footer;
