/* eslint-disable indent */
import PropTypes from "prop-types";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { baseImg } from "../../config";
import { settings } from "../../utils/settingSlideShowViewDetailPage";
import productList from "../../data/products";

function ShowImage({
  productViewDetail,
  featureIndex,
  onChangeImageFeatureIndex,
}) {
  return (
    <div className="w-[300px] sm:w-[250px] basis-1/2 md:mb-4 sm:mb-4 md:m-auto sm:m-auto">
      <div className="flex justify-center relative">
        <img
          className="h-[300px] max-w-[280px] rounded-2xl border-x-2 p-2 border-solid border-[#f1f2f4]"
          src={`${baseImg}/${productViewDetail?.imgProduct[featureIndex]}`}
          alt=""
        />
      </div>
      <div className="flex justify-center my-4 items-center">
        <span className="text-[#83889e]">{featureIndex + 1}</span>
        <span className="text-[#83889e]">/</span>
        <span className="text-[#83889e]">
          {productViewDetail?.imgProduct.length}
        </span>
        &nbsp;
        <span className="text-[#3c3e49] font-bold"> feature</span>
      </div>
      <Slider className="mx-6 flex justify-between" {...settings}>
        {productViewDetail?.imgProduct.map((feature, index) => (
          <div
            key={index}
            role="button"
            tabIndex="0"
            onClick={() => onChangeImageFeatureIndex(index)}
            className={`${
              featureIndex === index
                ? "border-2 border-slate-500"
                : "border border-inherit"
            } bg-white border-solid rounded m-2`}
          >
            <img
              src={`${baseImg}/${feature}`}
              alt={feature.name}
              className="w-[96px] h-[130px] m-auto sm:h-[90px] sm:w-[60px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
ShowImage.propTypes = {
  productViewDetail: PropTypes.object,
  featureIndex: PropTypes.number,
  onChangeImageFeatureIndex: PropTypes.func,
};
export default ShowImage;
