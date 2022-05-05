import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TypeProductOptions from "./TypeProductOptions";
import Products from "./Products";
import productList from "../../data/products";

function HomePage(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataProduct = await productList;
        setProducts(dataProduct);
      } catch (error) {
        alert.error(error);
      }
    })();
  }, []);

  return (
    <div className="ml-[262px] lg:ml-[0] md:ml-[0] sm:ml-[0] sm:mt-[160px] mt-[120px] px-[26px] w-full">
      <TypeProductOptions />
      <h2 className="text-[#3c3e49] my-[30px] text-lg">
        Choose up to 3 templates (apps similar to your idea) to use as a base.
      </h2>
      <Products products={products} />
    </div>
  );
}
HomePage.propTypes = {};
export default HomePage;
