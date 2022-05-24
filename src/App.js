import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./animations.css";
import PageNotFound from "./components/PageNotFound";
import AdminPage from "./containers/AdminPage";
import CategoryPage from "./containers/CategoryPage";
import HomePage from "./containers/HomePage";
import ProductPage from "./containers/ProductPage";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />}>
        <Route path="category" element={<CategoryPage />} />
        <Route path="product" element={<ProductPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
