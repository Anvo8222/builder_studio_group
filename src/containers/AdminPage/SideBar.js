import React from "react";
import PropTypes from "prop-types";
import { BiCategory } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { VscTypeHierarchy } from "react-icons/vsc";
import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <nav className="w-1/4 float-left">
      <div className="space-y-2 basis-2/12 w-64 rounded py-4 px-3 dark:bg-gray-800 bg-[#9adad8]">
        <Link
          to="/admin/category"
          className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <BiCategory />
          <span className="flex-1 ml-3 whitespace-nowrap">Category</span>
        </Link>
        <Link
          to="/admin/type"
          className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <VscTypeHierarchy />
          <span className="flex-1 ml-3 whitespace-nowrap">Type</span>
        </Link>
        <Link
          to="/admin/product"
          className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <MdOutlineProductionQuantityLimits />
          <span className="flex-1 ml-3 whitespace-nowrap">Product</span>
        </Link>
      </div>
    </nav>
  );
}
SideBar.propTypes = {};
export default SideBar;
