import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { boderInput } from "../../styles/border";

function FormUpdate({ onClose, itemUpdate, onUpdateCategory }) {
  const SignupSchema = yup.object().shape({
    name: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
    resolver: yupResolver(SignupSchema),
  });

  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-[0.5]"></div>
      <div className="fixed bg-[#11111d] w-[500px] h-[300px] top-[100px] rounded">
        <form
          className="flex bg-[#11111d] relative flex-col h-[100%] items-center justify-center rounded"
          onSubmit={handleSubmit(onUpdateCategory)}
        >
          <AiOutlineCloseCircle
            onClick={onClose}
            className="absolute top-2 right-2 text-red-400 hover:text-red-700 cursor-pointer text-2xl"
          />
          <label className="font-bold text-white mb-8">Update</label>
          <input
            defaultValue={itemUpdate.name}
            className={`${boderInput} px-2`}
            {...register("name", {
              required: "This input is required.",
            })}
          />
          {errors.name && <p className="text-red-300">{errors.name.message}</p>}
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
  itemUpdate: PropTypes.any,
  onUpdateCategory: PropTypes.func,
};
export default FormUpdate;
