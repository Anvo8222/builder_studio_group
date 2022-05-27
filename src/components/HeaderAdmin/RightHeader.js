import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import login from "../../api/LoginAuth";
import { LOGIN_PAGE_ADMIN } from "../../config";

function RightHeader({
  isShowOptionUser,
  onToggleOptionUser,
  onClickOutside,
  setIsShowOptionUser,
}) {
  const ref = useRef(null);
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem("REFRESHTOKEN");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsShowOptionUser(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  const handleLogout = () => {
    const logoutAdmin = async () => {
      try {
        await login.logoutAdmin(refreshToken);
        navigate(LOGIN_PAGE_ADMIN);
      } catch (error) {
        console.log("logout fails");
      }
    };
    logoutAdmin();
  };
  return (
    <div className="flex w-full pt-2  md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 2xl:justify-end">
      <ul className="list-reset flex flex-1 justify-end md:justify-between sm:justify-between items-center">
        <li className="">
          <Link className=" py-2 px-4 text-white no-underline" to="#">
            Active
          </Link>
        </li>
        <li className="">
          <div className="flex relative float-right">
            <div
              ref={ref}
              className="relative flex items-center text-sm text-gray-100"
            >
              <img
                className="w-8 h-8 rounded-full mr-4"
                src="http://i.pravatar.cc/300"
                alt="Avatar of User"
              />
              <span
                tabIndex="0"
                role="button"
                onClick={() => onToggleOptionUser()}
                className=" text-gray-100 cursor-pointer"
              >
                Hi, User
              </span>
              <BsChevronDown className="ml-[2px]" />
              {isShowOptionUser ? (
                <ul className="bg-gray-900 rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30">
                  <li>
                    <div
                      onClick={() => handleLogout()}
                      role="button"
                      tabIndex="0"
                      className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline"
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              ) : (
                false
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
RightHeader.propTypes = {
  isShowOptionUser: PropTypes.bool,
  onToggleOptionUser: PropTypes.func,
  onClickOutside: PropTypes.any,
  setIsShowOptionUser: PropTypes.any,
};
export default RightHeader;
