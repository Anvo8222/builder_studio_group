import { Route, Routes } from "react-router-dom";
import "./animations.css";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import SubHeader from "./components/SubHeader";
import AdminPage from "./containers/AdminPage";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import "./index.css";
import { HOME_PAGE_ADMIN, LOGIN_PAGE_ADMIN } from "./config";
import ProtectedRoute from "./config/ProtectedRouter";
import CategoryAdmin from "./containers/AdminPage/CategoryAdmin";

function App() {
  const r = [
    {
      exact: true,
      path: LOGIN_PAGE_ADMIN,
      element: <LoginPage />,
    },
    {
      exact: true,
      path: HOME_PAGE_ADMIN,
      element: (
        <ProtectedRoute pathRedirect={LOGIN_PAGE_ADMIN}>
          <AdminPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];
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
      {r.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          element={route.element}
        />
      ))}
    </Routes>
  );
}

export default App;
