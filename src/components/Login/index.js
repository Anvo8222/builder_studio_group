import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import user from "../../api/auth";
import Header from "./Header";
import SocialNetwork from "./SocialNetwork";
import Form from "./Form";

function Login({ onHiddenLogin }) {
  return (
    <div className="fixed z-50 top-[0] left-[0] right-[0] bottom-[0] bg-[rgba(0,0,0,0.5)] ">
      <div className="absolute flex flex-row min-w-[90%] h-[90vh] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded overflow-hidden">
        <div className=" flex flex-row min-w-[100%] h-[100%] loginAnimation">
          <div className=" md:hidden sm:hidden bg-[url('https://studio.builder.ai/commonModal.610bedfe407c044e882f.png')] bg-no-repeat bg-cover basis-1/2"></div>
          <div className="md:basis-full sm:basis-full basis-1/2 bg-white relative">
            <AiOutlineCloseCircle
              tabIndex="0"
              role="button"
              onClick={onHiddenLogin}
              className="absolute top-[20px] right-[20px] text-4xl text-slate-400 cursor-pointer"
            />
            <div className="m-16 sm:m-0 md:m-0">
              <Header />
              <SocialNetwork />
              <div className="relative h-6 mt-8">
                <span className="bg-white md:w-full sm:w-full text-center h-full z-20 px-2 text-[#9b9fb1] right-[50%] -translate-x-[-50%]  absolute">
                  Sign in with email
                </span>
                <div className="h-[1px] bg-[#ccc] z-10 w-full absolute top-[50%] md:hidden sm:hidden"></div>
              </div>
              <Form user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  onHiddenLogin: PropTypes.func,
};
export default Login;
