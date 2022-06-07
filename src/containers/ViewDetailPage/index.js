/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { addToCart } from "../../Slice/cart";
import { getIndexProduct } from "../../Slice/products";
import { currency } from "../../utils/selectCurrency";
import Description from "./Description";
import Footer from "./Footer";
import Header from "./Header";
import ShowImage from "./ShowImage";

function ViewDetailPage({
  product,
  onCloseViewDetail,
  nameCategoryViewDetail,
}) {
  const [featureIndex, setFeatureIndex] = useState(0);
  const [productViewDetail, setProductViewDetail] = useState(product);
  const [nameCategory, setNameCategory] = useState(nameCategoryViewDetail);
  const itemInCart = useSelector((state) => state.cart);
  const idCurrency = useSelector((state) => state.changeCurrency);
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const newCurrency = currency(idCurrency)[0];
  const onChangeImageFeatureIndex = (index) => {
    setFeatureIndex(index);
  };
  const onAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const products = useSelector((state) => state.products.products);
  const indexProduct = useSelector((state) => state.products.indexProduct);
  useEffect(() => {
    setProductViewDetail(products[indexProduct]);
    setNameCategory(
      categories.items.filter(
        (item) => item._id === products[indexProduct].categoryId
      )
    );
  }, [indexProduct]);

  const nextProductViewDetail = () => {
    if (indexProduct === products.length - 1) {
      dispatch(getIndexProduct(0));
    } else {
      dispatch(getIndexProduct(indexProduct + 1));
    }
  };
  const prevProductViewDetail = () => {
    if (indexProduct === 0) {
      dispatch(getIndexProduct(products.length - 1));
    } else {
      dispatch(getIndexProduct(indexProduct - 1));
    }
  };
  return (
    <div className="fixed justify-center items-center flex inset-0 z-50">
      <div className="fixed bg-[#ccc] inset-0 opacity-40"></div>
      <div className="fixed bg-white w-[90%] max-w-[90%] 2xl:w-[70%] viewDetail rounded ">
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
              nameCategory={nameCategory}
            />
          </div>
        </div>
        <Footer
          onAddToCart={onAddToCart}
          productViewDetail={productViewDetail}
          itemInCart={itemInCart}
          nextProductViewDetail={nextProductViewDetail}
          prevProductViewDetail={prevProductViewDetail}
        />
      </div>
    </div>
  );
}
ViewDetailPage.propTypes = {
  onCloseViewDetail: PropTypes.func,
  product: PropTypes.object,
  nameCategoryViewDetail: PropTypes.array,
};
export default ViewDetailPage;
