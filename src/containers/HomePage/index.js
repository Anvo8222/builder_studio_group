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

function HomePage(props) {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.products.products);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const dataProduct = await productList;
  //       setProducts(dataProduct);
  //     } catch (error) {
  //       alert.error(error);
  //     }
  //   })();
  // }, []);
  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchProducs());
  }, []);

  return (
    <>
      <Header />
      <div className="pt-[64px] flex">
        <Category />
        <SubHeader />
        <div className="ml-[262px] lg:ml-[0] md:ml-[0] sm:ml-[0] sm:mt-[160px] mt-[120px] px-[26px] w-full">
          <TypeProductOptions />
          <h2 className="text-[#3c3e49] my-[30px] text-lg">
            Choose up to 3 templates (apps similar to your idea) to use as a
            base.
          </h2>
          <Products products={products} />
        </div>
        <Cart />
      </div>
    </>
  );
}
HomePage.propTypes = {};
export default HomePage;
