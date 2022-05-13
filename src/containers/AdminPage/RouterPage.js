import React, { useState, useEffect } from "react";
import Content from "./Content";
import ProductsPage from "./productsPage";

function RouterPage(props) {
  const [pageURL, setPageURL] = useState(0);
  console.log(pageURL);
  useEffect(() => {
    setPageURL(window.location.href);
  });

  return (
    <div>
      {pageURL === "http://localhost:3000/admin/product" ? (
        <ProductsPage />
      ) : (
        <Content />
      )}
    </div>
  );
}

RouterPage.propTypes = {};
export default RouterPage;
