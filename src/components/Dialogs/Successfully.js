import React from "react";
import { MdDoneOutline } from "react-icons/md";
import PropTypes from "prop-types";

function Successfully(props) {
  return (
    <div className="slideShow fixed w-[300px] h-[60px] top-16 bg-[rgb(89,233,89)] right-4 z-50 rounded border-t-4 border-l-4 border-r-4 border-t-green-600 border-l-green-600 flex items-center justify-center">
      <MdDoneOutline className="text-[#3ce43c] rounded-[50%] bg-white mr-2" />
      <span className="text-white font-bold">Update Successfully</span>
      <span className="absolute left-0 bottom-0 w-[0] bg-green-600 h-[4px] toast"></span>
    </div>
  );
}
Successfully.propTypes = {};
export default Successfully;
