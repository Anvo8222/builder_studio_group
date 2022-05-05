import React from "react";
import PropTypes from "prop-types";

function Tutorial(props) {
  return (
    <ul className="md:hidden sm:hidden flex sm:absolute sm:pb-2 sm:px-2 sm:top-[0] sm:left-[0] sm:border-b sm:justify-between sm:flex sm:w-[100%]">
      <li className="mr-2">
        <span className="select-none text-xs ">1. </span>
        <span className=" text-xs ">Choose a base</span>
      </li>
      <li className="mr-2">
        <span className="select-none text-xs text-slate-400">2. </span>
        <span className=" text-xs text-slate-400">Refine features</span>
      </li>
      <li className="mr-2">
        <span className="select-none text-xs text-slate-400">3. </span>
        <span className=" text-xs text-slate-400">Plan delivery</span>
      </li>
    </ul>
  );
}
Tutorial.propTypes = {};
export default Tutorial;
