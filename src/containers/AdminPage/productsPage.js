import React, { useState, useEffect } from "react";
import { AiOutlineFolderAdd, AiOutlineCloseCircle } from "react-icons/ai";
import CreateProducts from "./CreateProducts";

function ProductsPage(props) {
  const [isShowAddNewProducts, setsShowAddNewProducts] = useState(false);

  const isModelAddProducts = () => {
    setsShowAddNewProducts(true);
  };
  const oncloseProducts = () => {
    setsShowAddNewProducts(false);
  };

  // useEffect(() => {
  //   if (isShowAddNewProducts) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [isShowAddNewProducts]);

  return (
    <div>
      <div className="basis-10/12 flex justify-center container border-b border-gray-200 shadow">
        <button
          onClick={() => isModelAddProducts()}
          type="button"
          className="flex  max-h-[50px] items-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:opacity-80"
        >
          <AiOutlineFolderAdd className="font-bold text-xl" />
          Add new category
        </button>
      </div>
      <table className="divide-y divide-gray-300 ">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-2 text-xs text-gray-500">STT</th>
            <th className="px-6 py-2 text-xs text-gray-500">Name</th>
            <th className="px-6 py-2 text-xs text-gray-500">Image</th>
            <th className="px-6 py-2 text-xs text-gray-500">Created_at</th>
            <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
            <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
          </tr>
        </thead>
        {/* <tbody className="bg-white divide-y divide-gray-300">
          {categorys?.map((item, index) => (
            // eslint-disable-next-line no-underscore-dangle
            <tr key={item._id} className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500">{index}</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{item.name}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {item.createdAt}
              </td>
              <td
                onClick={() => handleEditCategory(item)}
                role="button"
                tabIndex="0"
                className="px-6 py-4"
              >
                <BiEdit className="w-6 h-6 text-green-400" />
              </td>
              <td
                className="px-6 py-4"
                onClick={() => handleDeleteCategory(item)}
                role="button"
                tabIndex="0"
              >
                <AiFillDelete className="w-6 h-6 text-red-400" />
              </td>
            </tr>
          ))} */}

        {/* </tbody> */}
      </table>
      {isShowAddNewProducts && (
        <CreateProducts oncloseProducts={oncloseProducts} />
      )}
    </div>
  );
}

ProductsPage.propTypes = {};
export default ProductsPage;
