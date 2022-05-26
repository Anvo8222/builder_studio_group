import PropTypes from "prop-types";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { baseImg } from "../../config";

function Content({ products }) {
  return (
    <table className="divide-y divide-gray-300">
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
            <td className="px-6 py-4 text-sm text-white">{item.createdAt}</td>
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
  );
}
Content.propTypes = {
  products: PropTypes.array,
};

export default Content;
