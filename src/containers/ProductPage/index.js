import React, { useState, useEffect } from "react";
import { AiOutlineFolderAdd, AiFillDelete } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../api/category";
import { fetchProducs } from "../../api/productsAuth";
import Content from "./Content";
import CreateProduct from "./CreateProduct";

function ProductPage(props) {
  const [isShowAddNewProducts, setShowAddNewProducts] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const products = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const isModelAddProducts = () => {
    setShowAddNewProducts(true);
  };
  const oncloseProducts = () => {
    setShowAddNewProducts(false);
  };
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.items);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchProducs());
  }, []);
  useEffect(() => {
    setPageCount(Math.ceil(total / 8));
  }, [products]);
  const handlePageClick = (event) => {
    dispatch(fetchProducs(event.selected));
  };
  return (
    <>
      <div className="sm:mt-[100px] sm:mb-[100px] mt-[58px] w-full bg-[#111827]">
        <div className="basis-10/12 flex flex-col xl:max-w-[800px] 2xl:max-w-[800px] lg:max-w-[660px] m-auto container border-b border-gray-200 shadow">
          <div className="flex items-center mb-4">
            <button
              onClick={() => isModelAddProducts()}
              type="button"
              className="flex max-h-[50px] items-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:opacity-80"
            >
              <AiOutlineFolderAdd className="font-bold text-xl" />
              Add new prodcrs
            </button>
          </div>
          <Content products={products} />
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          pageClassName="px-[6px]"
          className="flex justify-center mt-2 items-center mb-2"
          pageLinkClassName="text-base bg-[#1f2937] text-gray-400 py-[4px] px-[6px]"
          activeLinkClassName="font-bold"
          previousClassName="text-gray-400 px-[4px] bg-[#1f2937] text-base py-[1px] border-sky-500"
          nextClassName="text-gray-400 px-[4px] bg-[#1f2937] text-base py-[1px] border-sky-500"
        />
      </div>
      {isShowAddNewProducts && (
        <CreateProduct
          oncloseProducts={oncloseProducts}
          categories={category}
        />
      )}
    </>
  );
}
ProductPage.propTypes = {};
export default ProductPage;
