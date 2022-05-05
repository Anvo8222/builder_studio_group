import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AiFillCaretDown, AiOutlineMenuFold } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import CurrencyMenu from "./CurrencyMenu";
import Logo from "./Logo";
import Tutorial from "./Tutorial";
import currencyList from "../../data/currencys";
import Login from "../Login";

function Header({ onClickOutside }) {
  const [isShowMenuCurrency, setisShowMenuCurrency] = useState(false);
  const [currencys, setCurrencys] = useState([]);
  const [isShowNavMenu, setIsShowNavMenu] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const currency = currencyList.filter(
    (item) => item.id === useSelector((state) => state.changeCurrency)
  );
  const ref = useRef(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await currencyList;
        setCurrencys(data);
      } catch (error) {
        alert.error(error);
      }
    })();
  });
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setisShowMenuCurrency(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);
  const onShowLogin = () => {
    setIsShowLogin(true);
  };
  const onHiddenLogin = () => {
    setIsShowLogin(false);
  };

  useEffect(() => {
    const userToken = window.localStorage.getItem("userToken");
    if (userToken) {
      setIsLogin(true);
    }
  }, []);
  return (
    <>
      <header
        ref={ref}
        className="sm:justify-between items-center flex z-50 h-[64px] bg-white fixed left-[0px] right-[0px] border-b-2 border-solid border-inherit"
      >
        <Logo />
        <div
          className={`${
            isShowNavMenu ? "navMenuShow" : "navMenuHidden"
          } sm:fixed sm:left-[0] sm:right-[0] sm:bottom-[0] sm:top-[8%] sm:mx-[0] sm:bg-white flex items-center md:justify-end sm:justify-end justify-between mx-6 w-[100%]`}
        >
          <Tutorial />
          <h2 className="sm:absolute hidden sm:block sm:ml-2 sm:mt-2 sm:top-[5%] left-[0] sm:bg-slate-200 sm:w-[80px] text-center py-1 rounded cursor-pointer">
            Sign In
          </h2>
          <ul className="flex items-center sm:w-full sm:absolute top-[15%] left-0">
            <li className="sm:hidden group cursor-pointer hover:bg-neutral-100 flex items-center h-[30px] border-solid border border-inherit mx-2 rounded relative">
              <Contact />
            </li>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <li
              onClick={() => setisShowMenuCurrency(!isShowMenuCurrency)}
              className={`${
                isShowMenuCurrency ? "bg-[#ecedf0]" : false
              } relative sm:hidden cursor-pointer hover:bg-neutral-100 h-[30px] items-center border-solid border border-inherit mx-2 rounded flex`}
            >
              <span className="text-xs leading-[30px] px-4">
                {currency[0].shortName}
              </span>
              <AiFillCaretDown className="mr-2 -ml-2 text-xs" />
            </li>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <li
              onClick={() => setisShowMenuCurrency(!isShowMenuCurrency)}
              className="sm:flex hidden sm:flex sm:w-full cursor-pointer hover:bg-neutral-100 h-[30px] items-center border-solid border border-inherit mx-2 rounded flex"
            >
              <span className="text-xs sm:w-full text-center leading-[30px] px-4">
                {currency[0].shortName}
              </span>
              <AiFillCaretDown className="mr-2 -ml-2 text-xs" />
            </li>
            {isShowMenuCurrency ? (
              <CurrencyMenu currencys={currencys} />
            ) : (
              false
            )}
            <li
              role="button"
              tabIndex="0"
              onClick={() => onShowLogin()}
              className="sm:hidden cursor-pointer hover:bg-neutral-100 h-[30px] border-solid border border-inherit mx-2 rounded"
            >
              <span className="text-xs leading-[30px] px-4 sm:hidden">
                {isLogin ? "Sign out" : "Sign in"}
              </span>
            </li>
          </ul>
          <div className="sm:block sm:absolute sm:top-[25%] sm:left-2 hidden">
            {isShowMenuCurrency ? (
              false
            ) : (
              <ul>
                <li className="text-xl text-[#3c3e49] leading-[30px]">
                  Book a demo call
                </li>
                <li className="text-xl text-[#3c3e49] leading-[30px]">
                  Book a spec call
                </li>
                <li className="text-xl text-[#3c3e49] leading-[30px]">
                  Live chat
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="">
          {isShowNavMenu ? (
            <GrClose
              onClick={() => setIsShowNavMenu(false)}
              className="sm:block hidden text-3xl"
            />
          ) : (
            <AiOutlineMenuFold
              onClick={() => setIsShowNavMenu(true)}
              className="sm:block hidden text-3xl"
            />
          )}
        </div>
      </header>
      {isShowLogin ? <Login onHiddenLogin={onHiddenLogin} /> : false}
    </>
  );
}
Header.propTypes = {
  onClickOutside: PropTypes.any,
};
export default Header;
