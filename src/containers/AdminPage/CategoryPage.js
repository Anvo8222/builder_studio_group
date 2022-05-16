/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillDelete,
  AiOutlineFolderAdd,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useForm } from "react-hook-form";
import {
  fetchItems,
  postItem,
  patchItem,
  deleteItem,
} from "../../api/category";
import { boderInput } from "../../styles/border";
import Header from "./Header";
import SideBar from "./SideBar";

function Content(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const [isShowFormAddCategory, setIsShowFormAddCategory] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const [handleInputName, setHandleInputName] = useState("");
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(postItem(data));
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  useEffect(() => {
    setCategorys(category.items);
  }, [category]);

  const onChangeNameCategory = (e) => {
    setHandleInputName(e);
  };

  const onUpdateCategory = (item) => {
    dispatch(
      patchItem({
        _id: item._id,
        name: handleInputName,
      })
    );
  };

  const onDeleteCategory = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <>
      <Header />
      <SideBar />
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
              className={`m-auto block rounded mb-2 ${boderInput}`}
              name="name"
              {...register("name", {
                required: "This input is required.",
              })}
            />
            <input
              className="bg-[#6c00ea] m-auto block w-[100px] rounded text-white"
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
            // eslint-disable-next-line no-underscore-dangle
            <tr key={item.id} className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500">{index}</td>
              <td className="px-6 py-4">
                <input
                  className={`text-sm text-gray-900 border border-solid border-slate-300 rounded p-[2px] ${boderInput}`}
                  defaultValue={item.name}
                  onChange={(e) => onChangeNameCategory(e.target.value)}
                  type="text"
                />
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {item.createdAt}
              </td>
              <td className="px-6 py-4 cursor-pointer">
                <BiEdit
                  onClick={() => onUpdateCategory(item)}
                  className="w-6 h-6 text-green-400"
                />
              </td>
              <td className="px-6 py-4">
                <AiFillDelete
                  onClick={() => onDeleteCategory(item)}
                  className="w-6 h-6 text-red-400"
                />
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