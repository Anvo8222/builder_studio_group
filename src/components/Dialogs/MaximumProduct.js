import React from "react";
import PropTypes from "prop-types";
import Panel from "../Panel";

function MaximumProduct({ onCloseDialog }) {
  return (
    <div className="fixed z-50 top-[0] left-[0] right-[0] bottom-[0] bg-[rgba(0,0,0,0.5)]">
      <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]  ">
        <div className="dialog flex flex-col items-center justify-center bg-white p-[20px] rounded-[10px]">
          <Panel />
          <div className="flex flex-col  items-center justify-center bg-white p-[20px] rounded-[10px]">
            <h3 className="text-[#3c3e49] text-lg text-justify">
              Maximum of 3 template selections are allowed
            </h3>
            <span className="text-justify my-2 text-base text-[#3c3e49]">
              This is to optimise feature recommendation on our end
            </span>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => onCloseDialog()}
                tabIndex="0"
                className="bg-red-400 text-white m-4 p-[10px] mr-[4px] border-0 cursor-pointer"
              >
                Ok. got it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
MaximumProduct.propTypes = {
  onCloseDialog: PropTypes.func,
};
export default MaximumProduct;
