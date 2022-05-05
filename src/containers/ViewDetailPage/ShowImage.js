/* eslint-disable indent */
import PropTypes from "prop-types";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { settings } from "../../utils/settingSlideShowViewDetailPage";

function ShowImage({
  productViewDetail,
  featureIndex,
  onChangeImageFeatureIndex,
}) {
  return (
    <>
      <div className="md:block p-2 sm:block hidden border-b border-border border-solid pb-4">
        <div className="flex justify-items-center text-center">
          <img className="w-10 h-10" src={productViewDetail?.logo} alt="logo" />
          <h2 className="text-4xl pl-4 text-[#3c3e49] sm:text-xl">
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
      <div className="w-[300px] sm:w-[250px] basis-1/2 md:mb-4 sm:mb-4 md:m-auto sm:m-auto">
        <div className="flex justify-center relative">
          <img
            className="h-[300px] max-w-[280px] rounded-2xl border-x-2 p-2 border-solid border-[#f1f2f4]"
            src={productViewDetail?.features[featureIndex].image}
            alt={productViewDetail?.features[featureIndex].name}
          />
        </div>
        <div className="flex justify-center my-4 items-center">
          <span className="text-[#83889e]">{featureIndex + 1}</span>
          <span className="text-[#83889e]">/</span>
          <span className="text-[#83889e]">
            {productViewDetail.features.length}
          </span>
          &nbsp;
          <span className="text-[#3c3e49] font-bold">
            {" "}
            {productViewDetail.features[featureIndex].name}
          </span>
          &nbsp;
          <div className="relative group">
            <AiOutlineInfoCircle className="text-[#3c3e49] cursor-pointer" />
            <p className="absolute text-justify indent-8 group-hover:block hidden -left-[200px] bottom-[120%] w-[300px] left-[0] bg-white text-[#3c3e49] border border-solid border-[#dfe0e6] p-4 rounded shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              {productViewDetail.features[featureIndex].description}
            </p>
          </div>
        </div>
        <Slider className="mx-6 flex justify-between" {...settings}>
          {productViewDetail?.features.map((feature, index) => (
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
                src={feature.image}
                alt={feature.name}
                className="h-[130px] m-auto sm:h-[90px] sm:w-[60px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
ShowImage.propTypes = {
  productViewDetail: PropTypes.object,
  featureIndex: PropTypes.number,
  onChangeImageFeatureIndex: PropTypes.func,
};
export default ShowImage;
