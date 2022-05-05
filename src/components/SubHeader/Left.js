import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Panel from "../Panel";

function Left(props) {
  return (
    <div className="ml-[262px] lg:ml-[0] md:ml-[0] sm:ml-[0] flex items-center">
      <h2 className="text-3xl font-bold text-[#3c3e49] md:text-xl sm:text-xl">
        Choose a base
      </h2>
      <AiOutlineQuestionCircle className="text-3xl ml-4 mr-4 md:text-base sm:text-base" />
      <Panel />
    </div>
  );
}
Left.propTypes = {};
export default Left;
