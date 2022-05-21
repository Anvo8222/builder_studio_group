import { Route, Routes } from "react-router-dom";
import "./animations.css";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import SubHeader from "./components/SubHeader";
import AdminPage from "./containers/AdminPage";
import HomePage from "./containers/HomePage";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import CategoryPage from "./containers/CategoryPage";
import ProductPage from "./containers/ProductPage";

function App() {
  const home = (
    <>
      <Header />
      <div className="pt-[64px] flex">
        {/* munu left */}
        <Category />
        <SubHeader />
        <HomePage />
        <Cart />
      </div>
    </>
  );
  return (
    <Routes>
      <Route path="/" element={home} />
      <Route path="/admin" element={<AdminPage />}>
        <Route path="category" element={<CategoryPage />} />
        <Route path="product" element={<ProductPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
