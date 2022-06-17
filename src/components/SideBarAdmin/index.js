/* eslint-disable no-constant-condition */
import React from "react";
import PropTypes from "prop-types";
import { Nav, NavLink } from "react-router-dom";

function SideBarAdmin(props) {
  return (
    <div className="bg-gray-800 mt-[58px] shadow-xl h-20 fixed bottom-0 md:relative lg:relative xl:relative 2xl:relative md:h-screen lg:h-screen xl:h-screen 2xl:h-screen z-10 sm:w-full min-w-[200px] content-center">
      <div className="md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12 contents md:w-48 lg:w-48 xl:w-48 2xl:w-48 left-0 top-0 sm:content-center content-start text-left justify-between">
        <ul className="list-reset w-full flex sm:flex-row flex-col pt-3 sm:py-[0] py-3 sm:px-1 px-2 sm:text-center text-left">
          <li className="mr-3 flex-1">
            <NavLink
              to="category"
              className={`${
                "active" ? "border-pink-500" : false
              } block sm:py-1 py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500`}
            >
              <i className="fas fa-tasks sm:pr-0 pr-3" />
              <span className="sm:pb-1 pb-0 sm:text-xs text-base sm:text-gray-400 text-gray-200 sm:block inline-block">
                Category
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1">
            <NavLink
              to="product"
              className={`${
                "active" ? "border-pink-500" : false
              } block sm:py-1 py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500`}
            >
              <i className="fa fa-envelope sm:pr-0 pr-3" />
              <span className="sm:pb-1 pb-0 sm:text-xs text-base sm:text-gray-400 text-gray-200 sm:block inline-block">
                Products
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1">
            <NavLink
              to="#"
              className={`${
                "active" ? "border-pink-500" : false
              } block sm:py-1 py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500`}
            >
              <i className="fas fa-chart-area sm:pr-0 pr-3 text-blue-600" />
              <span className="sm:pb-1 pb-0 sm:text-xs text-base text-white  sm:block inline-block">
                Analytics
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1">
            <NavLink
              to="#"
              className={`${
                "active" ? "border-pink-500" : false
              } block sm:py-1 py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500`}
            >
              <i className="fa fa-wallet sm:pr-0 pr-3" />
              <span className="sm:pb-1 pb-0 sm:text-xs text-base sm:text-gray-400 text-gray-200 sm:block inline-block">
                Payments
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

SideBarAdmin.propTypes = {};
export default SideBarAdmin;
