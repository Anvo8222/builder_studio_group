import React from "react";
import PropTypes from "prop-types";
import { BiCategory } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { VscTypeHierarchy } from "react-icons/vsc";
import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <div className="space-y-2 basis-2/12 w-64 rounded-lg py-4 px-3 dark:bg-gray-800 bg-[#11111d] ml-2">
      <Link
        to="/admin/category"
        className="group flex cursor-pointer items-center p-2 text-base font-normal rounded-xl hover:bg-gray-100 "
      >
        <BiCategory className="text-white group-hover:text-[#11111d]" />
        <span className="flex-1 text-white ml-3 whitespace-nowrap group-hover:text-[#11111d]">
          Category
        </span>
      </Link>
      <Link
        to="/admin/type"
        className="flex group cursor-pointer items-center p-2 text-base font-normal text-white rounded-xl dark:text-white hover:bg-gray-100  dark:hover:bg-gray-700"
      >
        <VscTypeHierarchy className="text-white group-hover:text-[#11111d]" />
        <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-[#11111d]">
          Type
        </span>
      </Link>
      <Link
        to="/admin/product"
        className="flex group cursor-pointer items-center p-2 text-base font-normal text-white rounded-xl dark:text-white hover:bg-gray-100  dark:hover:bg-gray-700"
      >
        <MdOutlineProductionQuantityLimits className="text-white group-hover:text-[#11111d]" />
        <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-[#11111d]">
          Product
        </span>
      </Link>
    </div>
  );
}
SideBar.propTypes = {};
export default SideBar;
