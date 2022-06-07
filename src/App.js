import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./animations.css";
import "./index.css";
import routes from "./utils/routes";

function App() {
  const isLoggedIn = localStorage.getItem("TOKEN") ?? null;
  const routing = useRoutes(routes(isLoggedIn));
  return (
    <>
      <ToastContainer />
      {routing}
    </>
  );
}

export default App;
