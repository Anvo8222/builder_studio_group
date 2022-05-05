import React from "react";
import PropTypes from "prop-types";

function Panel(props) {
  return (
    <span className="md:hidden sm:hidden roundOutSide w-[100px] h-[100px] bg-[#f3ebff] rounded-[50%] relative flex items-center justify-center">
      <span className="roundCenter min-w-[70px] min-h-[70px] bg-[#b388ff] rounded-[50%] absolute flex items-center justify-center">
        <span className="roundInSide w-[40px] h-[40px] bg-[#6c00ea] rounded-[50%] absolute border-[#52238e] border-2 border-solid">
          <span className="absolute -top-[100%] -right-[100%] border-2 border-solid border-[#beb3f5] text-[9px] text-[#6045e7] bg-[#f7f5ff] rounded-2xl px-[6px] py-[2px]">
            BETA
          </span>
        </span>
      </span>
    </span>
  );
}
Panel.propTypes = {};
export default Panel;
