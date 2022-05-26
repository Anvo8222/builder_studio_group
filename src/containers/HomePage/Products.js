/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { GrAdd } from "react-icons/gr";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { moneyFormatterToK } from "../../utils/formatMoney";
import { baseImg } from "../../config";
import currencyList from "../../data/currencys";
import ViewDetailPage from "../ViewDetailPage";
import { addToCart } from "../../Slice/cart";
import MaximumProduct from "../../components/Dialogs/MaximumProduct";

function Products({ products }) {
  const [isShowViewDetail, setIsShowViewDetail] = useState(false);
  const [productViewDetail, setProductViewDetail] = useState(null);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const dispatch = useDispatch();
  const currency = currencyList.filter(
    (item) => item.id === useSelector((state) => state.changeCurrency)
  );
  const itemInCart = useSelector((state) => state.cart);
  const newCurrency = currency[0];

  const onShowViewDetail = (product) => {
    setIsShowViewDetail(true);
    setProductViewDetail(product);
  };
  const onCloseViewDetail = () => {
    setIsShowViewDetail(false);
  };
  const onCloseDialog = () => {
    setIsShowDialog(false);
  };

  // eslint-disable-next-line consistent-return
  const onAddToCart = (product) => {
    if (
      // eslint-disable-next-line operator-linebreak
      itemInCart.length >= 3 &&
      itemInCart.some((x) => x.id === product.id) !== true
    ) {
      setIsShowDialog(true);
    } else if (isShowDialog === false) {
      dispatch(addToCart(product));
    }
  };

  const onNextProduct = () => {
    if (productViewDetail.id < products.length) {
      setProductViewDetail(
        products.filter((item) => item.id === productViewDetail.id + 1)[0]
      );
    } else {
      setProductViewDetail(products.filter((item) => item.id === 1)[0]);
    }
  };
  const onPrevProduct = () => {
    if (productViewDetail.id === 1) {
      setProductViewDetail(
        products.filter((item) => item.id === products.length)[0]
      );
    } else {
      setProductViewDetail(
        products.filter((item) => item.id === productViewDetail.id - 1)[0]
      );
    }
  };
  return (
    <>
      <div className=" grid grid-cols-3 gap-8 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-2">
        {products?.map((product) => (
          <div className="relative" key={product._id}>
            <div
              role="button"
              tabIndex="0"
              onClick={() => onAddToCart(product)}
              className="h-[440px] sm:h-[500px] rounded p-6 sm:p-0 border-border border-solid border cursor-pointer hover:border-[#cccc] hover:shadow-[0_1px_40px_-20px_rgba(0,0,0,0.4)] transition hover:delay-10 ease-in-out"
            >
              <div className="flex justify-between items-center">
                <div className="flex">
                  <img
                    className="w-9 h-9 mt-2"
                    src={`${baseImg}/${product.imgLogo}`}
                    alt={`ảnh ${product.name}`}
                  />
                  <div className="ml-2">
                    <span className="text-xs text-[#83889e]">
                      {" "}
                      BUILD AN APP LIKE
                    </span>
                    <h2 className="text-[#3c3e49] text-xl font-bold">
                      {product.name}
                    </h2>
                  </div>
                </div>
                <span className="border-border border-solid border w-12 h-12 rounded-full flex justify-center items-center">
                  {itemInCart?.some((x) => x.id === product.id) ? (
                    <AiFillCheckCircle className="text-6xl text-[#6c00ea]" />
                  ) : (
                    <GrAdd className="text-3xl" />
                  )}
                </span>
              </div>
              <div className="mb-2 mt-4 border-solid border-y border-inherit">
                <img
                  className="h-[148px] m-auto"
                  alt="img"
                  src={`${baseImg}/${product.imgProduct[0]}`}
                />
              </div>
              <div>
                <span className="text-[#83889e] text-xs">
                  INCLUDED FEATURES
                </span>
                {/* <div className="block">
                  <span className="text-[#3c3e49] text-xs">
                    {product.features.slice(0, 3).map((item, index) => (
                      <span key={index}>{(index ? ", " : "") + item.name}</span>
                    ))}
                  </span>
                </div>

                <span className="text-[#3c3e49] text-xs">
                  <span>+ </span>
                  {product.features.length - 3}
                  <span> other features</span>
                </span> */}
              </div>
              <div className="flex relative justify-between items-center border-t border-solid mt-4 pt-2">
                <div className="">
                  <span className="text-[#83889e] text-xs">FROM</span>
                  <div className="flex items-center">
                    <span className="mr-2 flex items-center text-center font-bold text-[#3c3e49]">
                      <newCurrency.icon />
                      {moneyFormatterToK(
                        Number(product.price * newCurrency.value)
                      )}
                    </span>
                    <div className="block">
                      <span className="block text-[#83889e] text-xs">Per</span>
                      <span className="block text-[#83889e] text-xs">
                        platform
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              role="button"
              tabIndex="0"
              onClick={() => onShowViewDetail(product)}
              className="absolute bottom-6 right-4 hover:bg-[#f8f9fa] py-2 px-6 border-inherit rounded border-solid border text-[#3c3e49] text-xs cursor-pointer"
            >
              View Details
            </span>
          </div>
        ))}
      </div>
      {isShowViewDetail ? (
        <ViewDetailPage
          productViewDetail={productViewDetail}
          onCloseViewDetail={onCloseViewDetail}
          onNextProduct={onNextProduct}
          onPrevProduct={onPrevProduct}
        />
      ) : (
        false
      )}
      {isShowDialog ? <MaximumProduct onCloseDialog={onCloseDialog} /> : false}
    </>
  );
}
Products.propTypes = {
  products: PropTypes.array,
};
export default Products;
