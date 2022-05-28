import React, { useState } from "react";
import PropTypes from "prop-types";

function Footer({ nextProductViewDetail, prevProductViewDetail }) {
  return (
    <div
      role="button"
      tabIndex="0"
      className="flex h-16 border-t justify-between items-center border-border border-solid cursor-pointer"
    >
      <span
        tabIndex="0"
        role="button"
        onClick={prevProductViewDetail}
        className="h-full pt-5 w-[200px] hover:bg-[#00cb54] text-center bg-[#00d659] font-bold"
      >
        Prev
      </span>
      <span
        tabIndex="0"
        role="button"
        onClick={nextProductViewDetail}
        className="h-full pt-5 w-[200px] hover:bg-[#00cb54] text-center bg-[#00d659] font-bold"
      >
        Next
      </span>
    </div>
  );
}
Footer.propTypes = {
  prevProductViewDetail: PropTypes.func,
  nextProductViewDetail: PropTypes.func,
};
export default Footer;
