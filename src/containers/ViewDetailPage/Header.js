import React from "react";
import {
  AiOutlineFullscreen,
  AiOutlineCopy,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import PropTypes from "prop-types";

function Header({ onCloseViewDetail }) {
  return (
    <header className="h-[30px] p-[14px] flex w-full justify-end">
      <AiOutlineFullscreen className="text-2xl ml-2 text-slate-700" />
      <AiOutlineCopy className="text-2xl ml-2 text-slate-700" />
      <AiOutlineCloseCircle
        onClick={() => onCloseViewDetail()}
        className="text-2xl ml-2 text-slate-700 cursor-pointer hover:text-red-600"
      />
    </header>
  );
}
Header.propTypes = {
  onCloseViewDetail: PropTypes.func,
};
export default Header;
