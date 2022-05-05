import React from "react";
import PropTypes from "prop-types";
import { AiOutlineDesktop } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { moneyFormatter } from "../../utils/formatMoney";

function Description({ productViewDetail, newCurrency }) {
  return (
    <div className="basis-1/2 pl-2 mr-2">
      <div className="md:hidden sm:hidden border-b border-border border-solid pb-4">
        <div className="flex justify-items-center text-center">
          <img className="w-10 h-10" src={productViewDetail?.logo} alt="logo" />
          <h2 className=" text-4xl pl-4 text-[#3c3e49] sm:text-base">
            {productViewDetail?.name}
          </h2>
        </div>
        <span className="font-light my-2 block text-[#83889e] my-6">
          <span>{productViewDetail?.features.length}</span>
          <span> features included</span>
        </span>
        <p className="text-[#3c3e49] text-base pr-2 text-justify">
          {productViewDetail?.description}
        </p>
      </div>
      <div className="border-b border-border border-solid mt-4 pb-4">
        <span className="font-light text-[#9b9fb1]">FROM</span>
        <div className="flex items-center text-[#3c3e50]">
          <newCurrency.icon className="text-2xl " />
          <span className="text-3xl font-bold">
            {moneyFormatter(
              // eslint-disable-next-line no-unsafe-optional-chaining
              Number(productViewDetail?.costAfter * newCurrency.value)
            )}
          </span>
          <span className="font-light ml-2">per platform</span>
        </div>
      </div>
      {productViewDetail?.builders?.map((item, index) => (
        <div key={index} className="border-b border-border border-solid pb-4">
          <div className="flex justify-between font-light my-4">
            <h2 className="text-[#83889e] text-sm">{item.name}</h2>
            <span className="mr-6 text-sm text-[#83889e]">
              {item.rentCost ? (
                <span className="flex items-center">
                  <span>Available from </span>
                  <newCurrency.icon className="text-base " />
                  <span>{item.rentCost}</span>
                  <span> /month</span>
                </span>
              ) : (
                "Included for 12 months"
              )}
            </span>
          </div>
          <div className="flex">
            <img src={item.img} className="mr-6" alt="careinclude" />
            <p className="text-[#3c3e49]">
              {item.title}
              <span className="text-[#428bca] cursor-pointer"> Learn more</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
Description.propTypes = {
  productViewDetail: PropTypes.object,
  newCurrency: PropTypes.object,
};
export default Description;
