/* eslint-disable consistent-return */
/* eslint-disable no-bitwise */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import TypeProductOptions from "./TypeProductOptions";
import Products from "./Products";
import productList from "../../data/products";
import Header from "../../components/Header";
import { fetchItems } from "../../api/category";
import Category from "../../components/Category";
import SubHeader from "../../components/SubHeader";
import Cart from "../../components/Cart";
import { fetchProducs } from "../../api/productsAuth";
import { isLoading } from "../../Slice/loading";

function HomePage(props) {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const [countProducts, setCountProducts] = useState({
    page: 1,
    limit: 6,
  });
  const categoryIdList = useSelector((state) => state.filterByCategory.items);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchProducs(countProducts));
  }, [countProducts]);
  // eslint-disable-next-line consistent-return
  const handleScrollPage = (e) => {
    if (categoryIdList.length > 0) return false;
    if (categoryIdList.length <= 0) {
      if (total !== 0 && countProducts.limit >= total) {
        dispatch(isLoading(false));
        return false;
      }
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.scrollHeight &&
        countProducts.limit < total
      ) {
        setCountProducts({
          page: 1,
          limit: countProducts.limit + 6,
        });
        dispatch(isLoading(true));
      }
    }
  };
  if (categoryIdList.length <= 0) {
    window.addEventListener("scroll", () => handleScrollPage());
  }
  return (
    <>
      <Header />
      <div className="pt-[64px] flex">
        <Category />
        <SubHeader />
        <div className="ml-[262px] mb-[100px] lg:ml-[0] md:ml-[0] sm:ml-[0] sm:mt-[160px] mt-[120px] px-[26px] w-full">
          {/* <TypeProductOptions /> */}
          <h2 className="text-[#3c3e49] my-[30px] text-lg">
            These are our products and services.Our products and services will
            bring satisfaction to our customers.Thank you for your interest in
            the company is products and services.
          </h2>
          <Products products={products} />
        </div>
      </div>
    </>
  );
}
HomePage.propTypes = {};
export default HomePage;
