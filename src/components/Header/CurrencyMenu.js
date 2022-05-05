/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AiFillCaretDown, AiFillCheckCircle } from "react-icons/ai";
import { SiAircanada } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { currencyValue } from "../../Slice/changeCurrency";

function CurrencyMenu({ currencys }) {
  const currencyId = useSelector((state) => state.changeCurrency);
  const dispatch = useDispatch();
  const onChangeCurrencyType = (currency) => {
    dispatch(currencyValue(currency.id));
  };

  return (
    <ul className="absolute w-[230px] top-[74%] bg-white mt-2 right-[100px] border-t border-x border-solid rounded-md sm:top-[100%] sm:ml-2 sm:left-[0] sm:w-[100%] sm:bg-white sm:border-x sm:border-b sm:border-solid sm:max-h-[310px] sm:overflow-y-auto">
      {currencys?.map((currency) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          onClick={() => onChangeCurrencyType(currency)}
          key={currency.id}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex="0"
          className="flex cursor-pointer items-center hover:bg-[#f8f9fa] justify-between px-2 py-2 border-b border-solid"
        >
          <div className="flex items-center">
            <currency.icon className="text-slate-400 text-xl" />
            <span className="ml-2 text-base text-slate-700 leading-10">
              {currency.name}
            </span>
          </div>
          <AiFillCheckCircle
            className={`${
              currency.id === currencyId ? "block" : "hidden"
            } text-[#6c00ea] text-xl`}
          />
        </li>
      ))}
    </ul>
  );
}
CurrencyMenu.propTypes = {
  currencys: PropTypes.array,
};
export default CurrencyMenu;
