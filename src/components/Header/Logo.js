import React from "react";
import PropTypes from "prop-types";
import logo from "../../images/logo.png";

function Logo(props) {
  return (
    <div className="h-[64px] sm:min-w-[200px] min-w-[262px] sm:border-r-0 border-r-2 border-solid border-inherit">
      <img className="w-[230px] ml-[30px] h-[100%]" src={logo} alt="logo" />
    </div>
  );
}
Logo.propTypes = {};
export default Logo;
