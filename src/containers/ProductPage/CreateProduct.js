/* eslint-disable no-useless-escape */
/* eslint-disable object-shorthand */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import { yupResolver } from "@hookform/resolvers/yup";
import { convertToRaw, EditorState } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import draftToHtml from "draftjs-to-html";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  updateProductId,
  uploadImageLogo,
  uploadImageProducts,
} from "../../api/productsAuth";
import formatDescription from "../../utils/fortmatDescription";
import { createSchema, updateSchema } from "../../utils/validateForm";
import Content from "./Content";

function CreateProduct({ oncloseProducts, categories, currentId }) {
  console.log(categories);
  const dispatch = useDispatch();
  const [pictureLogo, setPictureLogo] = useState(null);
  const [pictureProducts, setPictureProducts] = useState([]);
  const [previewLogo, setPreviewLogo] = useState();
  const [previewSlide, setPreviewSlide] = useState([]);
  const currentProductId = useSelector((state) => state.products.productId);

  const [editDescription, setEditDescription] = useState(
    currentProductId ? currentProductId.description : undefined
  );
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
    //
  );
  const defaultValues = {
    name: currentProductId ? currentProductId?.name : "",
    price: currentProductId ? currentProductId?.price : "",
    description: currentProductId ? currentProductId?.description : "",
    categoryId: currentProductId ? currentProductId?.categoryId : "",
    imgLogo: currentProductId ? currentProductId?.imgLogo : "",
    imgProduct: currentProductId ? currentProductId?.imgProduct : "",
  };

  useEffect(() => {
    const isDescription = defaultValues.description;

    if (currentProductId) {
      setEditorState(
        EditorState.createWithContent(
          stateFromHTML(isDescription ? formatDescription(isDescription) : "")
        )
      );
      setEditDescription(currentProductId.description);
    }
  }, [currentProductId]);
  // eslint-disable-next-line no-shadow
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setEditDescription(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

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
        description: editDescription,
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
        description: editDescription,
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
    <>
      <div className="fixed top-0 bottom-0 z-20 right-0 left-0 bg-black opacity-[0.5]"></div>
      <div className="fixed top-[50%] z-20 rounded -translate-y-2/4 -translate-x-2/4 left-[50%] w-[80%] ">
        {/* <h3>Create Products</h3> */}
        <Content
          handleCreateProducts={handleCreateProducts}
          handleSubmit={handleSubmit}
          handleCloseProducts={handleCloseProducts}
          register={register}
          errors={errors}
          currentProductId={currentProductId}
          editorState={editorState}
          categories={categories}
          onChangeImageLogo={onChangeImageLogo}
          previewLogo={previewLogo}
          onChangeImgProducts={onChangeImgProducts}
          previewSlide={previewSlide}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </>
  );
}
CreateProduct.propTypes = {
  oncloseProducts: PropTypes.func,
  categories: PropTypes.array,
  currentId: PropTypes.any,
};
export default CreateProduct;
