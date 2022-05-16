import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiFillDelete,
  AiOutlineCloseCircle,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  fetchItems,
  // fetchItemUpdate,
  patchItem,
  postItem,
} from "../../api/category";
// import { getItemUpdate } from "../../Slice/category";
import { boderInput } from "../../styles/border";
import { formatDate } from "../../utils/formatDate";
import FormUpdate from "./FormUpdate";

function Content(props) {
  const [isShowFormAddCategory, setIsShowFormAddCategory] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const [isShowEditCategory, setIsShowEditCategory] = useState(false);
  const [itemUpdateCategory, setItemUpdateCategory] = useState(null);
  const category = useSelector((state) => state.category);
  useEffect(() => {
    setCategorys(category.items);
  }, [category]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    criteriaMode: "all",
  });
  const dispatch = useDispatch();
  const onSubmitAddNewCategory = (data) => {
    dispatch(postItem(data));
    reset();
  };
  // hook to fetch items
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  const onShowUpdateCategory = (item) => {
    setIsShowEditCategory(true);
    setItemUpdateCategory(item);
  };
  const onCloseUpdateCategory = () => {
    setIsShowEditCategory(false);
  };

  const onDeleteCategory = (item) => {
    // eslint-disable-next-line no-underscore-dangle
    dispatch(deleteItem(item));
  };

  const onUpdateCategory = (data) => {
    dispatch(
      patchItem({
        // eslint-disable-next-line no-underscore-dangle
        _id: itemUpdateCategory._id,
        name: data.name,
      })
    );
  };

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
            onSubmit={handleSubmit(onSubmitAddNewCategory)}
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
                <span>{item.name}</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {formatDate(item.createdAt)}
              </td>
              <td className="px-6 py-4 cursor-pointer">
                <BiEdit
                  onClick={() => onShowUpdateCategory(item)}
                  className="w-6 h-6 text-green-400 hover:text-green-600 cursor-pointer"
                />
              </td>
              <td className="px-6 py-4">
                <AiFillDelete
                  onClick={() => onDeleteCategory(item)}
                  className="w-6 h-6 text-red-400 hover:text-red-600 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isShowEditCategory ? (
        <FormUpdate
          onClose={onCloseUpdateCategory}
          itemUpdate={itemUpdateCategory}
          onUpdateCategory={onUpdateCategory}
        />
      ) : (
        false
      )}
    </>
  );
}
Content.propTypes = {};
export default Content;
