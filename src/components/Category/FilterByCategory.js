/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByCategory } from "../../api/productsAuth";
import { addId } from "../../Slice/filterByCategory";

function FilterByCategory({ onChooseFilterCategory }) {
  const categories = useSelector((state) => state.category.items);
  // const categoryIdList = useSelector((state) => state.filterByCategory.items);
  // const dispatch = useDispatch();
  // const onFilterByCategory = (category) => {
  //   dispatch(addId(category._id));
  // };
  // useEffect(() => {
  //   dispatch(fetchProductByCategory(categoryIdList));
  // }, [categoryIdList]);
  return (
    <>
      <div className="pl-[30px] flex items-end min-h-[120px] border-b border-solid border-inherit">
        <h2 className="font-semibold text-xs">Filter by category</h2>
      </div>
      <ul>
        {categories?.map((category) => (
          <li
            key={category.id}
            className="cursor-pointer hover:bg-[#f8f9fa] border-b border-solid border-inherit"
          >
            <label
              className="relative pl-[30px] text-[#676b7e] font-light text-sm flex items-center leading-[50px]  w-[100%] cursor-pointer"
              htmlFor={category.name}
            >
              {category.name}
              <input
                onClick={() => onChooseFilterCategory(category._id)}
                className="absolute right-[6px] appearance-none w-[16px] h-[16px] border border-inherit checked:bg-[#6c00ea] checked:border-blue-600 focus:outline-none transition duration-200 "
                type="checkbox"
                id={category.name}
                name={category.name}
              />
              <AiOutlineCheck className="absolute right-[6px] text-white" />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
FilterByCategory.propTypes = {
  onChooseFilterCategory: PropTypes.func,
};
export default FilterByCategory;
