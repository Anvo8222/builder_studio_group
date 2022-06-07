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

function Header(props) {
  return (
    <header className="sm:justify-between items-center flex z-50 h-[64px] bg-white fixed left-[0px] right-[0px] border-b-2 border-solid border-inherit">
      <Logo />
    </header>
  );
}
Header.propTypes = {};
export default Header;
