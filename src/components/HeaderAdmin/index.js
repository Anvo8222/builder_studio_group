/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import LeftHeader from "./LeftHeader";
import Search from "./Search";
import RightHeader from "./RightHeader";

function HeaderAdmin({ onClickOutside }) {
  const [isShowOptionUser, setIsShowOptionUser] = useState(false);
  const onToggleOptionUser = () => {
    setIsShowOptionUser(!isShowOptionUser);
  };

  return (
    <header>
      <nav
        aria-label="menu nav"
        className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
      >
        <div className="flex flex-wrap items-center">
          <LeftHeader />
          <Search />
          <RightHeader
            isShowOptionUser={isShowOptionUser}
            onToggleOptionUser={onToggleOptionUser}
            setIsShowOptionUser={setIsShowOptionUser}
          />
        </div>
      </nav>
    </header>
  );
}
HeaderAdmin.propTypes = { onClickOutside: PropTypes.any };
export default HeaderAdmin;
