import { Route, Routes } from "react-router-dom";
import "./animations.css";
import PageNotFound from "./components/PageNotFound";
import AdminPage from "./containers/AdminPage";
import HomePage from "./containers/HomePage";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import CategoryPage from "./containers/CategoryPage";
import ProductPage from "./containers/ProductPage";

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
