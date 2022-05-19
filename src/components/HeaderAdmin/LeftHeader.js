import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LeftHeader(props) {
  return (
    <div className="flex flex-shrink lg:w-1/3 xl:w-1/3 2xl:w-1/3 md:w-1/3 justify-start md:justify-start sm:justify-start text-white">
      <Link
        to="/"
        className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold"
      >
        <i className="fas fa-moon text-blue-400 pr-3" />
        Home
      </Link>
    </div>
  );
}
LeftHeader.propTypes = {};
export default LeftHeader;
