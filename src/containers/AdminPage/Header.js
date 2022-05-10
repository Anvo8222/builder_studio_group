import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { BsChevronDown } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import login from "../../api/LoginAuth";
import { LOGIN_PAGE_ADMIN } from "../../config";

function Header({ onClickOutside }) {
  const [isShowOptionUser, setIsShowOptionUser] = useState(false);
  const refreshToken = localStorage.getItem("REFRESHTOKEN");
  const navigate = useNavigate();
  const onToggleOptionUser = () => {
    setIsShowOptionUser(!isShowOptionUser);
  };
  const ref = useRef(null);

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
    <div
      id="header"
      className="bg-[#3b7977] fixe max-h-[100px] w-full z-10 top-0 shadow"
    >
      <div className="w-full container mx-auto flex  flex-wrap items-center mt-0 pt-3 pb-3 ">
        <div className="w-1/2 pl-2 md:pl-0">
          <Link
            to="/"
            className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold"
          >
            <i className="fas fa-moon text-blue-400 pr-3" />
            Home
          </Link>
        </div>
        <div className="w-1/2 pr-4">
          <div className="flex relative inline-block float-right">
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
        </div>
      </div>
    </div>
  );
}

Header.propTypes = { onClickOutside: PropTypes.any };
export default Header;
