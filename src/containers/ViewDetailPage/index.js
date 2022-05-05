/* eslint-disable indent */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { addToCart } from "../../Slice/cart";
import { currency } from "../../utils/selectCurrency";
import Description from "./Description";
import Footer from "./Footer";
import Header from "./Header";
import ShowImage from "./ShowImage";

function ViewDetailPage({
  productViewDetail,
  onCloseViewDetail,
  onNextProduct,
  onPrevProduct,
}) {
  const [featureIndex, setFeatureIndex] = useState(0);
  const itemInCart = useSelector((state) => state.cart);
  const idCurrency = useSelector((state) => state.changeCurrency);
  const dispatch = useDispatch();
  const newCurrency = currency(idCurrency)[0];

  const onChangeImageFeatureIndex = (index) => {
    setFeatureIndex(index);
  };
  const onAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="fixed justify-center items-center flex inset-0 z-50">
      <div className="fixed bg-[#ccc] inset-0 opacity-40"></div>
      <div className="fixed bg-white w-[90%] max-w-[90%] viewDetail rounded ">
        <div className="relative max-h-[550px] scroll">
          <Header onCloseViewDetail={onCloseViewDetail} />
          <div className="w-full md:block sm:block flex h-full mt-4">
            <ShowImage
              featureIndex={featureIndex}
              productViewDetail={productViewDetail}
              onChangeImageFeatureIndex={onChangeImageFeatureIndex}
            />
            <Description
              productViewDetail={productViewDetail}
              newCurrency={newCurrency}
            />
          </div>
        </div>
        <Footer
          onAddToCart={onAddToCart}
          productViewDetail={productViewDetail}
          itemInCart={itemInCart}
          onNextProduct={onNextProduct}
          onPrevProduct={onPrevProduct}
        />
      </div>
    </div>
  );
}
ViewDetailPage.propTypes = {
  productViewDetail: PropTypes.object,
  onCloseViewDetail: PropTypes.func,
  onNextProduct: PropTypes.func,
  onPrevProduct: PropTypes.func,
};
export default ViewDetailPage;
