import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";

function FilterByCost({ costs }) {
  return (
    <>
      <h2 className="font-semibold leading-[50px] text-xs pl-[30px] flex items-end min-h-[80px] border-b border-solid border-inherit">
        Filter by cost
      </h2>
      <ul className="pl-[30px]">
        {costs?.map((cost) => (
          <li
            key={cost.id}
            className="cursor-pointer hover:bg-[#f8f9fa] border-b border-solid border-inherit"
          >
            <label
              className="relative  text-[#676b7e] font-light text-sm flex items-center leading-[50px] block w-[100%] cursor-pointer"
              htmlFor={cost.name}
            >
              {cost.name}
              <input
                className="absolute right-[6px] appearance-none w-[16px] h-[16px] border border-inherit checked:bg-[#6c00ea] checked:border-blue-600 focus:outline-none transition duration-200"
                type="checkbox"
                id={cost.name}
              />
              <AiOutlineCheck className="absolute right-[6px] text-white" />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

FilterByCost.propTypes = {
  costs: PropTypes.array,
};
export default FilterByCost;
