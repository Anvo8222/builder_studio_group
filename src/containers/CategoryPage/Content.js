import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import {
  AiFillDelete,
  AiOutlineCloseCircle,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  deleteItem,
  fetchItems,
  patchItem,
  postItem,
} from "../../api/category";
import AreYouSure from "../../components/Dialogs/AreYouSure";
import { boderInput } from "../../styles/border";
import { formatDate } from "../../utils/formatDate";
import FormUpdate from "./FormUpdate";

function Content({ categories }) {
  const [isShowFormAddCategory, setIsShowFormAddCategory] = useState(false);
  const [isShowEditCategory, setIsShowEditCategory] = useState(false);
  const [itemUpdateCategory, setItemUpdateCategory] = useState(null);
  const [itemDelete, setItemDelete] = useState({});
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameItem: "",
  });

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

  const onShowUpdateCategory = (item) => {
    setIsShowEditCategory(true);
    setItemUpdateCategory(item);
  };
  const onCloseUpdateCategory = () => {
    setIsShowEditCategory(false);
  };
  const handleDialog = (message, isLoading, nameItem) => {
    setDialog({
      message,
      isLoading,
      nameItem,
    });
  };

  const onDeleteCategory = (item) => {
    handleDialog("Are you sure you want to delete?", true, item.name);
    // dispatch(deleteItem(item));
    setItemDelete(item);
  };
  const areUSureDelete = (choose) => {
    if (choose) {
      dispatch(deleteItem(itemDelete));
    }
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

  const onCloseDialog = () => {
    setDialog({
      message: "",
      isLoading: false,
      nameProduct: "",
    });
  };
  return (
    <>
      <div>
        <ToastContainer />
      </div>
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
            className="w-full bg-[#11111d] relative m-auto rounded py-4 block items-center justify-center"
            onSubmit={handleSubmit(onSubmitAddNewCategory)}
          >
            <AiOutlineCloseCircle
              onClick={() => setIsShowFormAddCategory(false)}
              className="absolute right-[10px] text-xl top-[10px] text-red-700 cursor-pointer hover:text-red-300 "
            />
            <input
              className={`m-auto px-2 block rounded mb-2 ${boderInput}`}
              name="name"
              placeholder="Add New Category"
              {...register("name", {
                required: "This input is required.",
              })}
            />
            <input
              className="bg-[#6c00ea] m-auto block w-[100px] rounded text-white cursor-pointer"
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
          <tr className="bg-[#11111d]">
            <th className="px-6 py-2 text-xs text-white">STT</th>
            <th className="px-6 py-2 text-xs text-white">Name</th>
            <th className="px-6 py-2 text-xs text-white">Created_at</th>
            <th className="px-6 py-2 text-xs text-white">Edit</th>
            <th className="px-6 py-2 text-xs text-white">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300 max-h-[200px] overflow-y-visible">
          {categories?.map((item, index) => (
            // eslint-disable-next-line no-underscore-dangle
            <tr key={item.id} className="whitespace-nowrap bg-[#e5e5e5]">
              <td className="px-6 py-4 text-sm text-center text-gray-500">
                {index}
              </td>
              <td className="px-6 py-4 text-center">
                <span>{item.name}</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 text-center">
                {formatDate(item.createdAt)}
              </td>
              <td className="px-6 py-4 cursor-pointer text-center">
                <BiEdit
                  onClick={() => onShowUpdateCategory(item)}
                  className="w-6 h-6 text-green-400 hover:text-green-600 cursor-pointer m-auto"
                />
              </td>
              <td className="px-6 py-4 text-center">
                <AiFillDelete
                  onClick={() => onDeleteCategory(item)}
                  className="w-6 h-6 text-red-400 hover:text-red-600 cursor-pointer m-auto"
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
      {dialog.isLoading && (
        <AreYouSure
          nameProduct={dialog.nameItem}
          areUSureDelete={areUSureDelete}
          message={dialog.message}
          onCloseDialog={onCloseDialog}
        />
      )}
    </>
  );
}
Content.propTypes = {
  categories: PropTypes.array,
};
export default Content;
