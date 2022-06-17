import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import FilterByCategory from "./FilterByCategory";
import { isShowMenuFilter } from "../../Slice/toggleMenuFilter";
import catelogyList from "../../data/categorys";

function Category({ onChooseFilterCategory }) {
  const [categorys, setCategorys] = useState([]);
  const isMenuShowFilter = useSelector((state) => state.showMenuFilterSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const dataCatelogy = await catelogyList;
        setCategorys(dataCatelogy);
      } catch (error) {
        alert.error(error);
      }
    })();
  }, []);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1279) {
      dispatch(isShowMenuFilter(false));
    }
  });

  return (
    <>
      {isMenuShowFilter && (
        <>
          <div className="lg:fixed lg:opacity-50 lg:top-[0] lg:left-[0] lg:bottom-[0] lg:right-[0] lg:bg-[#c2c2c2] md:fixed md:opacity-50 md:top-[0] md:left-[0] md:bottom-[0] md:right-[0] md:bg-[#c2c2c2]"></div>
          <div className="bg-white w-[250px] z-50 xl:hidden 2xl:hidden lg:fixed lg:right-[10px] lg:top-[27%] md:fixed md:right-[10px] md:top-[27%] sm:fixed sm:right-[10px] sm:top-[27%] ">
            <div className="lg:block md:block sm:block xl:hidden 2xl:hidden max-h-[70vh] pb-4">
              <FilterByCategory
                onChooseFilterCategory={onChooseFilterCategory}
                categorys={categorys}
              />
            </div>
          </div>
        </>
      )}
      <div className="sm:mt-6 overflow-hidden rounded-md lg:hidden md:hidden sm:hidden fixed z-40 max-h-[90vh] max-w-[262px] min-w-[262px] border-r-2 border-solid border-inherit ">
        <div className="scroll h-[100vh] max-w-[262px] lg:bg-white md:bg-white sm:bg-white">
          <FilterByCategory
            onChooseFilterCategory={onChooseFilterCategory}
            categorys={categorys}
          />
        </div>
      </div>
    </>
  );
}
Category.propTypes = {
  onChooseFilterCategory: PropTypes.func,
};
export default Category;
