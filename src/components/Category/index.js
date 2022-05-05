import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import FilterByCategory from "./FilterByCategory";
import FilterByCost from "./FilterByCost";
import catelogyList from "../../data/categorys";
import costList from "../../data/costs";

function Category(props) {
  const [categorys, setCategorys] = useState([]);
  const [costs, setCosts] = useState([]);
  const isMenuShowFilter = useSelector((state) => state.showMenuFilterSlice);

  useEffect(() => {
    (async () => {
      try {
        const dataCatelogy = await catelogyList;
        const dataCost = await costList;
        setCategorys(dataCatelogy);
        setCosts(dataCost);
      } catch (error) {
        alert.error(error);
      }
    })();
  }, []);
  return (
    <>
      {isMenuShowFilter ? (
        <div className="lg:fixed lg:opacity-50 lg:top-[0] lg:left-[0] lg:bottom-[0] lg:right-[0] lg:bg-[#c2c2c2] md:fixed md:opacity-50 md:top-[0] md:left-[0] md:bottom-[0] md:right-[0] md:bg-[#c2c2c2]"></div>
      ) : (
        false
      )}
      <div className="bg-white  sm:mt-6 overflow-hidden rounded-md lg:fixed lg:right-[0] lg:top-[27%] md:fixed md:right-[0] md:top-[27%] sm:fixed sm:right-[0] sm:top-[27%] fixed z-40 max-h-[90vh] max-w-[262px] min-w-[262px] border-r-2 border-solid border-inherit">
        <div className="scroll max-h-[90vh] max-w-[262px] lg:bg-white md:bg-white sm:bg-white">
          <div className="lg:hidden md:hidden sm:hidden">
            <FilterByCategory categorys={categorys} />
            <FilterByCost costs={costs} />
          </div>
          <div className="lg:block md:block sm:block xl:hidden 2xl:hidden max-h-[70vh] pb-4">
            {isMenuShowFilter ? (
              <>
                <FilterByCategory categorys={categorys} />
                <FilterByCost costs={costs} />
              </>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </>
  );
}
Category.propTypes = {};
export default Category;
