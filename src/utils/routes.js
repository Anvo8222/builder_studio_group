import { Navigate } from "react-router-dom";
import HomePage from "../containers/HomePage";
import AdminPage from "../containers/AdminPage";
import LoginPage from "../containers/LoginPage";
import CategoryPage from "../containers/CategoryPage";
import ProductPage from "../containers/ProductPage";
import PageNotFound from "../components/PageNotFound";
import {
  CATEGORY_PAGE,
  HOME,
  HOME_PAGE_ADMIN,
  LOGIN_PAGE_ADMIN,
  PRODUCT_PAGE,
} from "../config";
import Appp from "../Appp";

const routes = (isLoggedIn) => [
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/test",
    element: <Appp />,
  },
  {
    path: HOME_PAGE_ADMIN,
    element: isLoggedIn ? <AdminPage /> : <Navigate to="/" />,
    children: [
      { path: CATEGORY_PAGE, element: <CategoryPage /> },
      { path: PRODUCT_PAGE, element: <ProductPage /> },
    ],
  },
  {
    path: "/",
    element: !isLoggedIn ? <LoginPage /> : <Navigate to={HOME_PAGE_ADMIN} />,
    children: [{ path: LOGIN_PAGE_ADMIN, element: <LoginPage /> }],
  },
];

export default routes;
