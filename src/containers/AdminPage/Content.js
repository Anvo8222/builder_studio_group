import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  AiFillDelete,
  AiOutlineFolderAdd,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { fetchItems } from "../../api/category";

function Content(props) {
  const [isShowFormAddCategory, setIsShowFormAddCategory] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => data;

  const dispatch = useDispatch();
  // hook to fetch items
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  const category = useSelector((state) => state.category);
  useEffect(() => {
    setCategorys(category.items);
  }, []);
  return (
    <>
      <div className="flex items-center mb-4">
        {!isShowFormAddCategory ? (
          <button
            onClick={() => setIsShowFormAddCategory(!isShowFormAddCategory)}
            type="button"
            className="flex  max-h-[50px] items-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:opacity-80"
          >
            <AiOutlineFolderAdd className="font-bold text-xl" />
            Add new category
          </button>
        ) : (
          false
        )}
        {isShowFormAddCategory ? (
          <form
            className="w-full relative m-auto rounded py-4 block bg-[#ace7e9e6] items-center justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <AiOutlineCloseCircle
              onClick={() => setIsShowFormAddCategory(false)}
              className="absolute right-[10px] text-xl top-[10px] text-red-700 cursor-pointer hover:text-red-300 "
            />
            <input
              className="m-auto block rounded mb-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
              placeholder="enter name category"
              {...register("multipleErrorInput", {
                required: "This input is required.",
                pattern: {
                  value: /\d+/,
                  message: "This input is number only.",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="multipleErrorInput"
              // eslint-disable-next-line arrow-body-style
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      // eslint-disable-next-line react/jsx-indent
                      <p className="text-center text-red-600" key={type}>
                        {message}
                      </p>
                      // eslint-disable-next-line indent
                    ))
                  : null;
              }}
            />
            <input
              className="bg-[#6c00ea] m-auto block w-[100px] rounded text-white "
              type="submit"
              value="Create"
            />
          </form>
        ) : (
          false
        )}
      </div>
      <table className="divide-y divide-gray-300 ">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-2 text-xs text-gray-500">STT</th>
            <th className="px-6 py-2 text-xs text-gray-500">Name</th>
            <th className="px-6 py-2 text-xs text-gray-500">Created_at</th>
            <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
            <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {categorys?.map((item, index) => (
            <tr key={item.id} className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500">{index}</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{item.name}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {item.createdAt}
              </td>
              <td className="px-6 py-4">
                <BiEdit className="w-6 h-6 text-green-400" />
              </td>
              <td className="px-6 py-4">
                <AiFillDelete className="w-6 h-6 text-red-400" />
              </td>
            </tr>
          ))}
          {/* {categorys?.map((item, index) => (
          ))} */}
        </tbody>
      </table>
    </>
  );
}
Content.propTypes = {};
export default Content;
