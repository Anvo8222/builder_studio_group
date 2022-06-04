import { Markup } from "interweave";
import PropTypes from "prop-types";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { baseImg } from "../../config";
import { moneyFormatter } from "../../utils/formatMoney";
import formatDescription from "../../utils/fortmatDescription";

function Description({ productViewDetail, newCurrency, nameCategory }) {
  return (
    <div className="basis-1/2 pl-2 mr-2">
      <div className="md:hidden sm:hidden border-b border-border border-solid pb-4">
        <div className="flex justify-items-center text-center">
          <img
            className="w-10 h-10"
            src={`${baseImg}/${productViewDetail?.imgLogo}`}
            alt="logo"
          />
          <h2 className=" text-4xl pl-4 text-[#3c3e49] sm:text-base">
            {productViewDetail?.name}
          </h2>
        </div>
        <span className="font-light my-2 block  my-6">
          <span className="text-[#83889e]"> Category</span>
          <span className="ml-2 text-3xl font-bold">
            {nameCategory[0]?.name}
          </span>
        </span>
        <p className="text-[#3c3e49] text-base pr-2 text-justify">
          <Markup content={formatDescription(productViewDetail?.description)} />
        </p>
      </div>
      <div className="border-b border-border border-solid mt-4 pb-4">
        <span className="font-light text-[#9b9fb1]">FROM</span>
        <div className="flex items-center text-[#3c3e50]">
          <newCurrency.icon className="text-2xl " />
          <span className="text-3xl font-bold">
            {moneyFormatter(
              // eslint-disable-next-line no-unsafe-optional-chaining
              Number(productViewDetail?.price * newCurrency.value)
            )}
          </span>
          <span className="font-light ml-2">per platform</span>
        </div>
      </div>
    </div>
  );
}
Description.propTypes = {
  productViewDetail: PropTypes.object,
  newCurrency: PropTypes.object,
  nameCategory: PropTypes.array,
};
export default Description;
