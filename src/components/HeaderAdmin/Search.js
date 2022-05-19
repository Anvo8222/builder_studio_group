import React from "react";
import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";

function Search(props) {
  return (
    <div className="flex relative flex-1 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 justify-center md:justify-start text-white px-2">
      <input
        placeholder="Search"
        className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10"
      />
      <div className="absolute top-[18px] left-[25px]">
        <AiOutlineSearch className="text-white w-4 h-4" />
      </div>
    </div>
  );
}
Search.propTypes = {};
export default Search;
