import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = function ({ children }) {
  const token = localStorage.getItem("TOKEN") ?? null;

  if (token === null) {
    return <Navigate to="/" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.func,
};

export default ProtectedRoute;
