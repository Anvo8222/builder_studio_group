import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Content from "./Content";
import { fetchItems } from "../../api/category";

function CategoryPage(props) {
  const categories = useSelector((state) => state.category.items);
  const total = useSelector((state) => state.category.total);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    setPageCount(Math.ceil(total / 8));
  }, [categories]);

  const handlePageClick = (event) => {
    dispatch(fetchItems(event.selected));
  };
  return (
    <div className="sm:mt-[100px] sm:mb-[100px] mt-[62px] w-full bg-[#111827]">
      <div className="basis-10/12 flex flex-col xl:max-w-[800px] 2xl:max-w-[800px] lg:max-w-[660px] m-auto container border-b border-gray-200 shadow">
        <Content categories={categories} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          pageClassName="px-[6px] "
          className="flex justify-center mt-2 items-center mb-2"
          pageLinkClassName="text-base bg-[#1f2937] text-gray-400 py-[4px] px-[6px]"
          activeLinkClassName="font-bold"
          previousClassName="text-gray-400 px-[4px] bg-[#1f2937] text-base py-[1px] border-sky-500"
          nextClassName="text-gray-400 px-[4px] bg-[#1f2937] text-base py-[1px] border-sky-500"
        />
      </div>
    </div>
  );
}
CategoryPage.propTypes = {};
export default CategoryPage;
