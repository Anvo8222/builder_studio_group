import { Route, Routes, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./animations.css";
import PageNotFound from "./components/PageNotFound";
import { LOGIN_PAGE_ADMIN } from "./config";
import AdminPage from "./containers/AdminPage";
import CategoryPage from "./containers/CategoryPage";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import ProductPage from "./containers/ProductPage";
import "./index.css";
import routes from "./utils/routes";

function App() {
  const isLoggedIn = localStorage.getItem("TOKEN") ?? null;
  const routing = useRoutes(routes(isLoggedIn));
  return (
    <>
      {/* <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={LOGIN_PAGE_ADMIN} element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="category" element={<CategoryPage />} />
          <Route path="product" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
      {routing}
    </>
  );
}

export default App;
