import React from "react";
import { AiOutlineFilter, AiOutlineSearch } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { isShowMenuFilter } from "../../Slice/toggleMenuFilter";

function Right(props) {
  const isMenuShowFilter = useSelector((state) => state.showMenuFilterSlice);
  const dispatch = useDispatch();
  const onToggleMenuFilter = () => {
    const action = isShowMenuFilter(!isMenuShowFilter);
    dispatch(action);
  };
  return (
    <ul className="flex items-center sm:flex flex-wrap z-50 sm:justify-end sm:h-[140px]">
      <li className=" rounded p-2 border border-solid border-inherit mr-4 cursor-pointer hover:bg-[#f8f9fa]">
        <AiOutlineSearch className="text-xl text-[#3c3e49]" />
      </li>
      <li className=" rounded p-2 border border-solid border-inherit flex items-center mr-4 cursor-pointer hover:bg-[#f8f9fa]">
        <GrAdd className="text-xl text-[#9f9fa6]" />
        <span className="text-sm text-[#3c3e49] ml-2">Custom Template</span>
      </li>
      <li className=" rounded p-2 border border-solid border-inherit mr-4 cursor-pointer hover:bg-[#f8f9fa]">
        <BiSortAlt2 className="text-xl text-[#3c3e49]" />
      </li>
      <li
        role="presentation"
        className={`${
          isMenuShowFilter ? "bg-[#ecedf0]" : false
        } hidden rounded lg:block md:block sm:block p-2 border border-solid border-inherit mr-4 cursor-pointer hover:bg-[#f8f9fa]`}
        onClick={() => onToggleMenuFilter()}
      >
        <AiOutlineFilter />
      </li>
    </ul>
  );
}
Right.propTypes = {};
export default Right;
