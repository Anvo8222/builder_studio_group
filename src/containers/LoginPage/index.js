/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import login from "../../api/LoginAuth";
import { HOME_PAGE_ADMIN, LOGIN_PAGE_ADMIN } from "../../config";

const schema = yup.object().shape({
  email: yup.string().email().required("Please enter your email !"),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required("Please enter your password !")
    .matches(
      "(?=.*[0-9])(?=.*?[A-Z])",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case CharacterPassword should include at least one uppercase, one numeric value !"
    ),
});

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN") ?? null;
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleLogin = (admin) => {
    const loginAdmin = async () => {
      try {
        await login.loginAdmin(admin);
        navigate(HOME_PAGE_ADMIN);
      } catch (error) {
        toast.error("Login Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    };
    loginAdmin();
  };

  const handleShowPass = () => {
    if (isPasswordShown) {
      setIsPasswordShown(false);
    } else {
      setIsPasswordShown(true);
    }
  };

  return (
    <div className="login-page <lg:px-2">
      <div className="absolute mx-auto items-center justify-center w-150 min-h-110  max-w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%]">
        <form
          className="w-full h-full bg-white p-4 form-signIn bg-opacity-80"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="font-bold text-center flex justify-center text-2xl">
            SIGN IN
          </div>
          <div className="relative">
            <div className="mt-4 pl-3 pb-2">
              <div>* Email:</div>
            </div>
            <div className="shadow-xl w-full rounded-lg h-12 border border-blue-gray-200 relative overflow-hidden">
              <input
                id="email"
                className="bg-white outline-none border-none w-full h-full pl-5"
                type="email"
                name="email"
                placeholder="Enter email..."
                {...register('email')}
              />
            </div>

            <span className="text-red-500/100 ml-3">
              {errors.email && errors.email.message}
            </span>

            <div className="mt-4 pl-3 pb-2">
              <div>* Password:</div>
            </div>
            <div className="shadow-xl w-full rounded-lg h-12 border border-blue-gray-200 relative overflow-hidden">
              <div
                onClick={handleShowPass}
                className="absolute cursor-pointer none-select right-0 h-full w-16 bg-blue-gray-200 flex items-center justify-center top-[25%]"
              >
                <div className="text-gray-500 text-2xl">
                  {isPasswordShown ? (
                    <FaEye className="absolute bottom-6 right-5" />
                  ) : (
                    <FaEyeSlash className="absolute bottom-6 right-5" />
                  )}
                </div>
              </div>
              <input
                className="bg-white outline-none border-none w-full h-full pl-5"
                name="password"
                type={isPasswordShown ? 'hide' : 'password'}
                placeholder="Enter password..."
                {...register('password')}
              />
            </div>

            <span className="text-red-500/100 ml-3">
              {errors.password && errors.password.message}
            </span>

            <div className="text-right">
              <button
                className="text-white rounded-lg w-28 mt-7 h-10 overflow-hidden hover:bg-opacity-90 bg-green-600"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

LoginPage.propTypes = {};
export default LoginPage;
