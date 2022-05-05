import React from "react";
import PropTypes from "prop-types";

function SocialNetwork(props) {
  return (
    <div className="flex justify-between mt-2 md:block sm:block ">
      <img
        className="md:m-auto sm:m-auto md:mb-2 sm:mb-2 p-4 border border-solid border-inherit rounded cursor-pointer hover:bg-[#f8f9fa]"
        src="https://studio.builder.ai/assets/images/googlelogin.svg"
        alt=""
      />
      <img
        className="md:m-auto sm:m-auto md:mb-2 sm:mb-2 p-4 border border-solid border-inherit rounded cursor-pointer hover:bg-[#f8f9fa]"
        src="https://studio.builder.ai/assets/images/linkedinIcon.svg"
        alt=""
      />
      <img
        className="md:m-auto sm:m-auto md:mb-2 sm:mb-2 p-4 border border-solid border-inherit rounded cursor-pointer hover:bg-[#f8f9fa]"
        src="https://studio.builder.ai/assets/images/facebook_logo_signupmodal.svg"
        alt=""
      />
    </div>
  );
}
SocialNetwork.propTypes = {};
export default SocialNetwork;
