import React from "react";
import PropTypes from "prop-types";
import Left from "./Left";
import Right from "./Right";

function SubHeader(props) {
  return (
    <div className="fixed z-30 bg-white lg:bg-white md:bg-white justify-between px-[26px] h-[120px] sm:h-[160px] w-full flex items-center border-b border-solid border-inherit">
      <Left />
      <Right />
    </div>
  );
}
SubHeader.propTypes = {};
export default SubHeader;
