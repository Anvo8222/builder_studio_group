import React from "react";
import PropTypes from "prop-types";
import { BiEdit } from "react-icons/bi";
import { useForm } from "react-hook-form";

function ProductsPage(props) {
  return (
    <div>
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
        <tbody className="bg-white divide-y divide-gray-300">
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
          {/* {categorys?.map((item, index) => (
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

ProductsPage.propTypes = {};
export default ProductsPage;
