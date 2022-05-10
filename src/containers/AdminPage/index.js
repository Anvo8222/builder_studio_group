import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { fetchItems } from "../../api/category";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import category, { fetchItems } from "../../api/category";

function AdminPage(props) {
  return (
    <>
      <Header />
      <div className="flex mt-[50px]">
        <SideBar />
        <div className="basis-10/12 flex justify-center container border-b border-gray-200 shadow">
          <div>
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}
AdminPage.propTypes = {};
export default AdminPage;
