/* eslint-disable import/no-relative-packages */
/* eslint-disable import/no-duplicates */
/* eslint-disable prefer-const */
/* eslint-disable operator-linebreak */
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import uploadImageCallBack from "../../utils/uploadImageCallBack";
import { baseImg } from "../../config";
import { boderInput } from "../../styles/border";

function Content({
  handleCreateProducts,
  handleSubmit,
  handleCloseProducts,
  register,
  errors,
  currentProductId,
  editorState,
  onEditorStateChange,
  categories,
  onChangeImageLogo,
  previewLogo,
  onChangeImgProducts,
  previewSlide,
}) {
  const [uploadImage, setUploadImage] = useState([]);
  const uploadImageCallBack = (file) => {
    const uploadedImages = uploadImage;

    const imageObject = {
      // eslint-disable-next-line object-shorthand
      file: file,
      localSrc: URL.createObjectURL(file),
    };

    uploadedImages.push(imageObject);

    setUploadImage(uploadedImages);
    return new Promise((resolve, reject) => {
      resolve({ data: { link: imageObject.localSrc } });
    });
  };
  return (
    <form
      className="pt-12 bg-[#11111d] scroll h-[550px]"
      onSubmit={handleSubmit(handleCreateProducts)}
    >
      <AiOutlineCloseCircle
        onClick={() => handleCloseProducts()}
        tabIndex="0"
        role="button"
        className="absolute right-[25px] text-xl top-[20px] text-red-700 cursor-pointer hover:text-red-300 "
      />
      <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
        <label className="block text-white text-sm font-bold mb-2">Name</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter name..."
          {...register("name")}
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>
      <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
        <label className="block text-white text-sm font-bold mb-2">
          * Price
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="$1"
          type="text"
          defaultValue={currentProductId.price}
          {...register("price")}
        />
        {errors.price && <p className="text-red-600">{errors.price.message}</p>}
      </div>
      <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
        <label className="block text-white text-sm font-bold mb-2">
          * description
        </label>

        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper bg-white"
          editorClassName="demo-editor"
          toolbarClassName="toolbarClassName"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: uploadImageCallBack,
              alt: { present: true, mandatory: true },
            },
            inputAccept:
              "application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel",
          }}
        />
      </div>

      <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
          * Category
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            {...register("categoryId")}
          >
            <option value="">--Choose--</option>
            {categories?.map((item) => (
              // eslint-disable-next-line no-underscore-dangle
              <option value={item._id}>{item.name}</option>
            ))}
          </select>
          {errors.categoryId && (
            <p className="text-red-600">{errors.categoryId.message}</p>
          )}
        </div>
      </div>
      <div className={`mb-4 w-2/4 m-auto block rounded mb-2 ${boderInput}`}>
        <label className="block text-white text-sm font-bold mb-2">
          * Logo
        </label>
        <input
          id="profilePic"
          type="file"
          accept="image/png, image/gif, image/jpeg, image/jpg"
          name="imgUrl"
          className="text-red-600"
          {...register("imgUrl", {
            onChange: (e) => onChangeImageLogo(e),
            onBlur: (e) => onChangeImageLogo(e),
          })}
        />
        {previewLogo && previewLogo !== undefined ? (
          <img src={previewLogo.preview} alt="" width="90px" className="mt-2" />
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
        <label className="block text-white text-sm font-bold mb-2">
          * Slide Image
        </label>
        <input
          type="file"
          id="files-upload"
          name="imgStudioUrl"
          className="text-red-600"
          accept="image/png, image/gif, image/jpeg, image/jpg"
          multiple="multiple"
          {...register("imgStudioUrl", {
            onChange: (e) => onChangeImgProducts(e),
            onBlur: (e) => onChangeImgProducts(e),
          })}
        />
        <div className="flex w-full overflow-auto scroll">
          {previewSlide.length > 0
            ? previewSlide.map((item) => (
                // eslint-disable-next-line react/jsx-indent
                <img src={item.preview} alt="" className="mt-3 mr-2 w-1/3" />
                // eslint-disable-next-line indent
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
          className="bg-blue-500 w-[50%] mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          type="submit"
          value="submit"
        />
      </div>
    </form>
  );
}
Content.propTypes = {
  handleCreateProducts: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCloseProducts: PropTypes.func,
  register: PropTypes.any,
  errors: PropTypes.any,
  currentProductId: PropTypes.any,
  editorState: PropTypes.func,
  onEditorStateChange: PropTypes.func,
  categories: PropTypes.array,
  onChangeImageLogo: PropTypes.func,
  previewLogo: PropTypes.any,
  onChangeImgProducts: PropTypes.func,
  previewSlide: PropTypes.array,
};

export default Content;
