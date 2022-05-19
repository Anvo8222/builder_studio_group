import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import PropTypes from "prop-types";

function Error(props) {
  return (
    <div className="slideShow fixed w-[300px] h-[60px] top-16 bg-[rgb(248,113,113)] right-4 z-50 rounded border-t-4 border-l-4 border-r-4 border-t-red-600 border-l-red-600 flex items-center justify-center">
      <BiErrorCircle className="text-[#f87171] rounded-[50%] bg-white mr-2" />
      <span className="text-white font-bold">Update Error</span>
      <span className="absolute left-0 bottom-0 w-[0] bg-red-600 h-[4px] toast"></span>
    </div>
  );
}
Error.propTypes = {};
export default Error;
