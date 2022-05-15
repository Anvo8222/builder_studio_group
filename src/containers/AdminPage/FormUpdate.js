import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { boderInput } from "../../styles/border";

import { patchItem } from "../../api/category";

function FormUpdate({ onClose, idUpdate }) {
  const [handleInputName, setHandleInputName] = useState("");
  console.log("onClose", onClose);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const dispatch = useDispatch();
  const onUpdateCategory = (item) => {
    dispatch(
      patchItem({
        // eslint-disable-next-line no-underscore-dangle
        _id: item._id,
        name: handleInputName,
      })
    );
  };
  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-[0.5]"></div>
      <div className="fixed bg-[#11111d] w-[500px] h-[300px] top-[100px] rounded">
        <form
          className="flex relative flex-col h-[100%] items-center justify-center rounded"
          onSubmit={() => onUpdateCategory()}
        >
          <AiOutlineCloseCircle
            onClick={onClose}
            className="absolute top-2 right-2 text-red-400 hover:text-red-700 cursor-pointer text-2xl"
          />
          <label className="font-bold text-white mb-8">Update</label>
          <input
            className={`${boderInput} px-2`}
            {...register("firstName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.firstName?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <input
            value="Save"
            className="bg-[#3b82f6] hover:bg-[#7fabf3] w-[40%] rounded mt-[40px] cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
FormUpdate.propTypes = {
  onClose: PropTypes.func,
  idUpdate: PropTypes.any,
};
export default FormUpdate;
