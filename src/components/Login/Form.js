import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

function Form({ user }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    user.getUser(data);
  };
  const onToggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-bold">Company email</h2>
      <input
        placeholder="Company email"
        className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
        {...register("email", {
          required: "This input is required.",
          pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "This input is email only.",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        // eslint-disable-next-line arrow-body-style
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                // eslint-disable-next-line react/jsx-indent
                <p className="text-red-700" key={type}>
                  {message}
                </p>
                // eslint-disable-next-line indent
              ))
            : null;
        }}
      />
      <div className="flex justify-between sm:block md:block">
        <h2 className="font-bold">Password</h2>
        <span className="">Forgot your password?</span>
      </div>
      <div className="flex relative">
        <input
          placeholder="Company email"
          type={isShowPassword ? "text" : "password"}
          className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
          {...register("password", {
            required: "This input is required.",
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /(?=.*[a-z])(?=.*[A-Z])/,
              message: "a password no validate",
            },
          })}
        />
        <AiOutlineEye
          onClick={() => onToggleShowPassword()}
          className="absolute right-[0] top-[50%] -translate-y-[50%] right-2 cursor-pointer"
        />
      </div>

      <ErrorMessage
        errors={errors}
        name="password"
        // eslint-disable-next-line arrow-body-style
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                // eslint-disable-next-line react/jsx-indent
                <p className="text-red-700" key={type}>
                  {message}
                </p>
                // eslint-disable-next-line indent
              ))
            : null;
        }}
      />
      <input
        type="submit"
        value="Sign in"
        className="text-center w-full mt-4 bg-[#00d659] py-[10px] rounded font-bold cursor-pointer hover:bg-[#08ae4d]"
      />
    </form>
  );
}
Form.propTypes = {
  user: PropTypes.any,
};

export default Form;
