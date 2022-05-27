/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { useEffect, useState } from "react";
import { AiOutlineFolderAdd, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { boderInput } from "../../styles/border";
import {
  createProduct,
  uploadImageLogo,
  uploadImageProducts,
  updateProductId,
} from "../../api/productsAuth";
import { SUPPORTED_FORMATS } from "../../utils/supportFormats";
import { baseImg } from "../../config";

function CreateProduct({ oncloseProducts, categories, currentId }) {
  const dispatch = useDispatch();
  const [pictureLogo, setPictureLogo] = useState(null);
  const [pictureProducts, setPictureProducts] = useState([]);
  const [formatterValue, setFormatterValue] = useState("");
  const [previewLogo, setPreviewLogo] = useState();
  const [previewSlide, setPreviewSlide] = useState([]);
  const currentProductId = useSelector((state) => state.products.productId);

  const defaultValues = {
    name: currentProductId ? currentProductId?.name : "",
    price: currentProductId ? currentProductId?.price : "",
    description: currentProductId ? currentProductId?.description : "",
    categoryId: currentProductId ? currentProductId?.categoryId : "",
    imgLogo: currentProductId ? currentProductId?.imgLogo : "",
    imgProduct: currentProductId ? currentProductId?.imgProduct : "",
  };

  const createSchema = yup.object().shape({
    name: yup.string().required("Please enter name !"),
    price: yup
      .string()
      .required("Please enter price !")
      .min(1, "Price must be more than 1 $ !"),
    categoryId: yup.string().required("Please choice your category !"),
    description: yup.string().required("Please enter description !"),
    imgUrl: yup
      .mixed()
      .test("required", "Image not be empty", (value) => value && value.length)
      .test(
        "type",
        "Unsupported",
        (value) =>
          value && value[0] && SUPPORTED_FORMATS.includes(value[0].type)
      )
      .test("size", "Size too big", (value) => {
        if (value && value[0]) {
          return value[0].size < 5 * 1024 * 1024;
        }
        return true;
      }),
  });

  const updateSchema = yup.object().shape({
    name: yup.string().required("Please enter name !"),
    price: yup
      .string()
      .required("Please enter price !")
      .min(1, "Price must be more than 1 $ !"),
    categoryId: yup.string().required("Please choice your category !"),
    description: yup.string().required("Please enter description !"),
    imgUrl: yup
      .mixed()
      .test("type", "Unsupported", (value) => {
        if (value && value[0]) {
          return SUPPORTED_FORMATS.includes(value[0].type);
        }
        return true;
      })
      .test("size", "Size too big", (value) => {
        if (value && value[0]) {
          return value[0].size < 10 * 1024 * 1024;
        }
        return true;
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(
      Object.keys(currentProductId).length > 0 ? updateSchema : createSchema
    ),
    defaultValues,
    criteriaMode: "all",
  });

  const handleCloseProducts = () => {
    if (oncloseProducts) {
      oncloseProducts();
      reset(defaultValues);
      setPreviewLogo(null);
      setPreviewSlide(null);
    }
  };

  const onChangeImageLogo = (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    if (file === undefined) {
      setPreviewLogo(null);
    }
    file.preview = URL.createObjectURL(file);
    setPreviewLogo(file);
    setPictureLogo(e.target.files[0].name);
    formData.append("imgUrl", e.target.files[0]);
    // console.table(Object.fromEntries(formData));
    dispatch(uploadImageLogo(formData));
  };

  const onChangeImgProducts = (e) => {
    const newArrPicture = [];
    const newArrPreview = [];
    const formData = new FormData();
    const imgProducts = e.target.files;
    if (imgProducts.length === 0) {
      setPreviewSlide([]);
    }
    Object.keys(imgProducts).map((item, i) => {
      return (
        (imgProducts[item].preview = URL.createObjectURL(imgProducts[item])),
        newArrPreview.push(imgProducts[item]),
        setPreviewSlide([...newArrPreview]),
        newArrPicture.push(imgProducts[item].name),
        formData.append("imgStudioUrl", imgProducts[item])
      );
    });
    setPictureProducts(newArrPicture);
    dispatch(uploadImageProducts(formData));
  };

  const handleChangeCurrency = (e) => {
    const num = e.target.value.toString();
    const format = num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setFormatterValue(format);
  };

  const handleCreateProducts = (value) => {
    if (currentId) {
      const newValue = {
        _id: currentId,
        name: value.name,
        imgLogo: pictureLogo || currentProductId.imgLogo,
        imgProduct:
          pictureProducts.length > 0
            ? pictureProducts
            : currentProductId.imgProduct,
        categoryId: value.categoryId,
        description: value.description,
        price: value.price,
      };
      dispatch(updateProductId(newValue));
    } else {
      const newPrice = value.price.split(".").join("");
      const newValue = {
        name: value.name,
        imgLogo: pictureLogo,
        imgProduct: pictureProducts,
        categoryId: value.categoryId,
        description: value.description,
        price: Number(newPrice),
      };
      dispatch(createProduct(newValue));
    }
    handleCloseProducts();
    reset(defaultValues);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [currentProductId]);

  return (
    <div className="absolute top-[10%] left-[30%] w-[50%]">
      {/* <h3>Create Products</h3> */}
      <form
        className="pt-12 bg-[#ace7e9e6] overflow-y-auto h-[550px]"
        onSubmit={handleSubmit(handleCreateProducts)}
      >
        <AiOutlineCloseCircle
          onClick={() => handleCloseProducts()}
          tabIndex="0"
          role="button"
          className="absolute right-[25px] text-xl top-[20px] text-red-700 cursor-pointer hover:text-red-300 "
        />
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            * Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter name..."
            {...register("name")}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            * Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="$1"
            type="text"
            value={formatterValue}
            defaultValue={currentProductId.price}
            {...register("price", {
              onChange: (e) => handleChangeCurrency(e),
              onBlur: (e) => handleChangeCurrency(e),
            })}
          />
          {errors.price && (
            <p className="text-red-600">{errors.price.message}</p>
          )}
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            * description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter description..."
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            * Category
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register("categoryId")}
            >
              <option value="">--Vui lòng chọn--</option>
              {categories?.map((item) => (
                <option value={item._id}>{item.name}</option>
              ))}
            </select>
            {errors.categoryId && (
              <p className="text-red-600">{errors.categoryId.message}</p>
            )}
          </div>
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            * Logo
          </label>
          <input
            id="profilePic"
            type="file"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            name="imgUrl"
            {...register("imgUrl", {
              onChange: (e) => onChangeImageLogo(e),
              onBlur: (e) => onChangeImageLogo(e),
            })}
          />
          {previewLogo && previewLogo !== undefined ? (
            <img
              src={previewLogo.preview}
              alt=""
              width="90px"
              className="mt-2"
            />
          ) : (
            <img
              src={
                Object.keys(currentProductId).length > 0
                  ? `${baseImg}/${currentProductId.imgLogo}`
                  : ""
              }
              alt=""
              width="90px"
              className="mt-2"
            />
          )}
          {errors.imgUrl && (
            <p className="text-red-600">{errors.imgUrl.message}</p>
          )}
        </div>
        <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            * Slide Image
          </label>
          <input
            type="file"
            id="files-upload"
            name="imgStudioUrl"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            multiple="multiple"
            {...register("imgStudioUrl", {
              onChange: (e) => onChangeImgProducts(e),
              onBlur: (e) => onChangeImgProducts(e),
            })}
          />
          <div className="flex w-full overflow-auto">
            {previewSlide.length > 0
              ? previewSlide.map((item) => (
                  <img src={item.preview} alt="" className="mt-3 mr-2 w-1/3" />
                ))
              : Array.isArray(currentProductId?.imgProduct) &&
                currentProductId?.imgProduct.length > 0 &&
                currentProductId?.imgProduct.map((item) => (
                  <img
                    src={
                      Object.keys(currentProductId).length > 0
                        ? `${baseImg}/${item}`
                        : ""
                    }
                    alt=""
                    className="mt-3 mr-2 w-1/3"
                  />
                ))}
          </div>
          {errors.imgStudioUrl && (
            <p className="text-red-600">{errors.imgStudioUrl.message}</p>
          )}
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
  currentId: PropTypes.any,
};
export default CreateProduct;
