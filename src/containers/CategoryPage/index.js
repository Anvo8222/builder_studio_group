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
    <div className="sm:mt-[100px] mt-[70px] w-full">
      <div className="basis-10/12 flex flex-col xl:max-w-[800px] 2xl:max-w-[800px] lg:max-w-[600px] m-auto  container border-b border-gray-200 shadow">
        <Content categories={categories} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageClassName="px-2 "
          className="flex justify-center"
          pageLinkClassName="text-base text-[#3b82f6]"
          activeLinkClassName="font-bold"
        />
      </div>
    </div>
  );
}
CategoryPage.propTypes = {};
export default CategoryPage;
