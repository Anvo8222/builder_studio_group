import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import login from "../../api/LoginAuth";
import { HOME_PAGE_ADMIN } from "../../config";

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

  useEffect(() => {
    if (token !== null) {
      navigate(HOME_PAGE_ADMIN);
    }
  }, [token]);

  const handleLogin = (admin) => {
    const loginAdmin = async () => {
      try {
        await login.loginAdmin(admin);
        navigate("/admin");
      } catch (error) {
        console.log("Login failed, please check your email and passwords");
      }
    };
    loginAdmin();
  };

  return (
    <div className="flex justify-center pt-50">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32 pt-20"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              name="username"
            >
              Email address!
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Enter your email..."
              {...register("email")}
            />
            <p className="my-4 text-red-500">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              name="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              placeholder="Enter your password..."
              {...register("password")}
            />
            <p classNameName="my-4 text-red-500">
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue absolute top-[62%] left-[47%] border-solid border-2 border-indigo-600 rounded-md px-5"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-grey text-xs">
          ©2018 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

LoginPage.propTypes = {};
export default LoginPage;
