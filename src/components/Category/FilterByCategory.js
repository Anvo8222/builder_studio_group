import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";

function FilterByCategory({ categorys }) {
  return (
    <>
      <div className="pl-[30px] flex items-end min-h-[120px] border-b border-solid border-inherit">
        <h2 className="font-semibold leading-[50px] text-xs">
          Filter by category
        </h2>
      </div>
      <ul>
        {categorys?.map((category) => (
          <li
            key={category.id}
            className="cursor-pointer hover:bg-[#f8f9fa] border-b border-solid border-inherit"
          >
            {/*  eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <label
              className="relative pl-[30px] text-[#676b7e] font-light text-sm flex items-center leading-[50px] block w-[100%] cursor-pointer"
              htmlFor={category.name}
            >
              {category.name}
              <input
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
  categorys: PropTypes.array,
};
export default FilterByCategory;
