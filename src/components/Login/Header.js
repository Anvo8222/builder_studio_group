import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <>
      <h2 className="text-[#3c3e49] text-xl font-bold">Sign In</h2>
      <div className="relative h-6 my-6 md:w-full sm:w-full">
        <span className="bg-white h-full md:w-full sm:w-full text-center z-20 px-2 text-[#9b9fb1] right-[50%] -translate-x-[-50%] text-muted absolute">
          Sign in using
        </span>
        <div className="h-[1px] bg-[#ccc] z-10 w-full absolute top-[50%] sm:hidden md:hidden"></div>
      </div>
    </>
  );
}
Header.propTypes = {};
export default Header;
