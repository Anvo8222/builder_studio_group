import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBarAdmin from "../../components/SideBarAdmin";
import { fetchItems } from "../../api/category";

function AdminPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchItems({
        page: 1,
        limit: 8,
      })
    );
  }, [dispatch]);

  return (
    <>
      <HeaderAdmin />
      <div className="flex sm:flex-col flex-row">
        <SideBarAdmin />
        <Outlet />
      </div>
    </>
  );
}
AdminPage.propTypes = {};
export default AdminPage;
