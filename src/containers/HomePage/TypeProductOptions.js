import React from "react";
import PropTypes from "prop-types";

function TypeProductOptions(props) {
  return (
    <ul className="flex mt-[20px] sm:block">
      <li className="hover:bg-[#f8f9fa] cursor-pointer mr-2 px-8 rounded text-sm text-[#3c3e49] py-2 border border-solid border-inherit">
        All
      </li>
      <li className="hover:bg-[#f8f9fa] cursor-pointer mr-2 px-8 rounded text-sm text-[#3c3e49] py-2 border border-solid border-inherit">
        Pro
      </li>
      <li className="hover:bg-[#f8f9fa] cursor-pointer mr-2 px-8 rounded text-sm text-[#3c3e49] py-2 border border-solid border-inherit">
        Store
      </li>
    </ul>
  );
}
TypeProductOptions.propTypes = {};
export default TypeProductOptions;
