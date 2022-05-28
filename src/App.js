import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./animations.css";
import Appp from "./Appp";
import PageNotFound from "./components/PageNotFound";
import AdminPage from "./containers/AdminPage";
import CategoryPage from "./containers/CategoryPage";
import HomePage from "./containers/HomePage";
import ProductPage from "./containers/ProductPage";
import "./index.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Appp />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="category" element={<CategoryPage />} />
          <Route path="product" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
