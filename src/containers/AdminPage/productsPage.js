import React, { useState, useEffect } from "react";
import { AiOutlineFolderAdd, AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../api/category";
import { deleteProduct, fetchProducs } from "../../api/productsAuth";
import { baseImg } from "../../config";
import { removeProduct } from "../../Slice/products";
import CreateProducts from "./CreateProducts";
import Header from "./Header";
import SideBar from "./SideBar";

function ProductsPage(props) {
  const [isShowAddNewProducts, setsShowAddNewProducts] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const category = useSelector((state) => state.category.items);

  const isModelAddProducts = () => {
    setsShowAddNewProducts(true);
  };
  const oncloseProducts = () => {
    setsShowAddNewProducts(false);
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  useEffect(() => {
    dispatch(fetchProducs());
  }, []);

  const handleDeleteProduct = (item) => {
    dispatch(deleteProduct(item));
  };

  return (
    <div>
      <Header />
      <div className="inline-block w-full items-center mb-4">
        <SideBar />
        <div>
          <button
            onClick={() => isModelAddProducts()}
            type="button"
            className="flex  max-h-[50px] items-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:opacity-80"
          >
            <AiOutlineFolderAdd className="font-bold text-xl" />
            Add new prodcrs
          </button>
        </div>
        <table className="divide-y divide-gray-300 ">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500">STT</th>
              <th className="px-6 py-2 text-xs text-gray-500">Name</th>
              <th className="px-6 py-2 text-xs text-gray-500">Image</th>
              <th className="px-6 py-2 text-xs text-gray-500">Created_at</th>
              <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
              <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {products?.map((item, index) => (
              // eslint-disable-next-line no-underscore-dangle
              <tr key={item._id} className="whitespace-nowrap">
                <td className="px-6 py-4 text-sm text-gray-500">{index}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.name}</td>
                <td className="px-6 py-4">
                  <img alt="" src={`${baseImg}/${item.imgLogo}`} width="50px" />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.createdAt}
                </td>
                <td
                  // onClick={() => handleEditCategory(item)}
                  role="button"
                  tabIndex="0"
                  className="px-6 py-4"
                >
                  <BiEdit className="w-6 h-6 text-green-400" />
                </td>
                <td
                  className="px-6 py-4"
                  onClick={() => handleDeleteProduct(item)}
                  role="button"
                  tabIndex="0"
                >
                  <AiFillDelete className="w-6 h-6 text-red-400" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isShowAddNewProducts && (
        <CreateProducts
          oncloseProducts={oncloseProducts}
          categories={category}
        />
      )}
    </div>
  );
}

ProductsPage.propTypes = {};
export default ProductsPage;
