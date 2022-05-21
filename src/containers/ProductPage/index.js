import React, { useState, useEffect } from "react";
import { AiOutlineFolderAdd, AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../api/category";
import { fetchProducs } from "../../api/productsAuth";
import { baseImg } from "../../config";
import CreateProduct from "./CreateProduct";

function ProductPage(props) {
  const [isShowAddNewProducts, setShowAddNewProducts] = useState(false);
  const products = useSelector((state) => state.products.products);
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
  }, []);

  useEffect(() => {
    dispatch(fetchProducs());
  }, []);
  return (
    <>
      <div className="sm:mt-[100px] sm:mb-[100px] mt-[62px] w-full bg-[#111827]">
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
          <table className="divide-y divide-gray-300 ">
            <thead className="bg-gray-50">
              <tr className="bg-[#11111d]">
                <th className="px-6 py-2 text-xs text-white">STT</th>
                <th className="px-6 py-2 text-xs text-white">Name</th>
                <th className="px-6 py-2 text-xs text-white">Image</th>
                <th className="px-6 py-2 text-xs text-white">Created_at</th>
                <th className="px-6 py-2 text-xs text-white">Edit</th>
                <th className="px-6 py-2 text-xs text-white">Delete</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300 max-h-[200px] overflow-y-visible">
              {products?.map((item, index) => (
                // eslint-disable-next-line no-underscore-dangle
                <tr key={item._id} className="bg-[#1f2937]">
                  <td className="px-6 py-4 text-sm text-white">{index}</td>
                  <td className="px-6 py-4 text-sm text-white">{item.name}</td>
                  <td className="px-6 py-4">
                    <img
                      className="text-sm text-gray-900"
                      width="50px"
                      alt=""
                      src={`${baseImg}/${item.imgLogo}`}
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    {item.createdAt}
                  </td>
                  <td
                    // onClick={() => handleEditCategory(item)}
                    role="button"
                    tabIndex="0"
                    className="px-6 py-4"
                  >
                    <BiEdit className="w-6 h-6 text-green-400" />
                  </td>
                  <td
                    className="px-6 py-4"
                    // onClick={() => handleDeleteCategory(item)}
                    role="button"
                    tabIndex="0"
                  >
                    <AiFillDelete className="w-6 h-6 text-red-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
