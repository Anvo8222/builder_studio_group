/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { useEffect, useState } from "react";
import { AiOutlineFolderAdd, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { boderInput } from "../../styles/border";
import {
  createProduct,
  uploadImageLogo,
  uploadImageProducts,
} from "../../api/productsAuth";

function CreateProduct({ oncloseProducts, categories }) {
  const dispatch = useDispatch();
  const [pictureLogo, setPictureLogo] = useState(null);
  const [pictureProducts, setPictureProducts] = useState([]);

  const SignupSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required().positive().integer(),
    description: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const handleCloseProducts = () => {
    if (oncloseProducts) {
      oncloseProducts();
    }
  };

  const onChangeImageLogo = (e) => {
    const formData = new FormData();
    setPictureLogo(e.target.files[0].name);
    formData.append("imgUrl", e.target.files[0]);
    // console.table(Object.fromEntries(formData));
    dispatch(uploadImageLogo(formData));
  };

  const onChangeImgProducts = (e) => {
    const newArr = [];
    const imgproducts = e.target.files;
    const formData = new FormData();
    Object.keys(imgproducts).map((item, i) => {
      return (
        newArr.push(imgproducts[item].name),
        formData.append("imgStudioUrl", imgproducts[item])
      );
    });
    setPictureProducts(newArr);
    dispatch(uploadImageProducts(formData));
  };

  const handleCreateProducts = (value) => {
    const newValue = {
      ...value,
      imgLogo: pictureLogo,
      imgProduct: pictureProducts,
    };
    dispatch(createProduct(newValue));
  };

  return (
    <div className="absolute top-[10%] left-[30%] w-[50%]">
      <form
        className="pt-30 bg-[#ace7e9e6] "
        onSubmit={handleSubmit(handleCreateProducts)}
      >
        <AiOutlineCloseCircle
          onClick={() => handleCloseProducts()}
          tabIndex="0"
          role="button"
          className="absolute right-[10px] text-xl top-[10px] text-red-700 cursor-pointer hover:text-red-300 "
        />
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Text input"
            {...register("name")}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Text input"
            {...register("price")}
          />
          {errors.price && (
            <p className="text-red-600">{errors.price.message}</p>
          )}
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Text input"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Category
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register("categoryId")}
            >
              {categories?.map((item, index) => (
                <option value={item._id}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ImageLogo
          </label>
          <input
            id="profilePic"
            type="file"
            accept=".jpg, .png , .jpeg"
            name="imgUrl"
            onChange={onChangeImageLogo}
          />
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ImageProducts
          </label>
          <input
            type="file"
            id="files-upload"
            name="files[]"
            accept=".jpg, .png , .jpeg"
            onChange={onChangeImgProducts}
            multiple="multiple"
          />
        </div>
        <div className="flex items-center justify-between pl-[40%]">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
}
CreateProduct.propTypes = {
  oncloseProducts: PropTypes.func,
  categories: PropTypes.array,
};
export default CreateProduct;
