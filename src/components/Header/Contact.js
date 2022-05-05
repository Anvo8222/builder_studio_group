import React from "react";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <>
      <img
        className="w-7 sm:hidden "
        src="https://studio.builder.ai/assets/images/experticon1.png"
        alt="avatar"
      />
      <span className="text-xs leading-[30px] px-4"> Talk to our experts</span>
      <ul className="after:absolute after:-top-2 hidden after:w-[100%] after:h-4 group-hover:block shadow-[0_15px_70px_-26px_rgba(0,0,0,0.3)] rounded-md absolute bg-white top-[100%] w-[100%] mt-2 border-t border-x border-solid rounded-md">
        <li className="hover:bg-gray-50 text-xs text-slate-500 leading-10 pl-4 border-b border-solid">
          Book a demo call
        </li>
        <li className="hover:bg-gray-50 text-xs text-slate-500 leading-10 pl-4 border-b border-solid">
          Book a spec call
        </li>
        <li className="hover:bg-gray-50 text-xs text-slate-500 leading-10 pl-4 border-b border-solid">
          Live chat
        </li>
      </ul>
    </>
  );
}
Contact.propTypes = {};
export default Contact;
