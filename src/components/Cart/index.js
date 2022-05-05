import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { removeCart, removeCartItem } from "../../Slice/cart";

function Cart(props) {
  const itemInCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onDeleteItemInCart = (item) => {
    dispatch(removeCartItem(item));
  };
  const onDeleteAllItemInCart = () => {
    dispatch(removeCart());
  };
  return (
    <div
      className={`fixed ${
        itemInCart.length > 0 ? "flex" : "hidden"
      } justify-between h-[80px] bottom-0 right-0 left-[0] ml-[262px] lg:ml-[0] md:ml-[0] sm:ml-[0] bg-white`}
    >
      <ul className="flex items-center ml-8">
        {itemInCart.map((item) => (
          <li key={item.id} className="group p-2 relative cursor-pointer">
            <img className="w-10 h-10" src={item.logo} alt="logo" />
            <AiFillCloseCircle
              onClick={() => onDeleteItemInCart(item)}
              className="group-hover:block absolute hidden bottom-[70%] text-2xl right-[0] text-[#676363]"
            />
          </li>
        ))}
        <span
          role="button"
          tabIndex="0"
          onClick={() => onDeleteAllItemInCart()}
          className="underline text-[#3c3e49] text-sm"
        >
          {" "}
          Clear selection
        </span>
      </ul>
      <div>
        <span className="text-[#3c3e49]">
          {itemInCart.length}
          <span> templates selected</span>
        </span>
        <button
          type="button"
          className="h-full bg-[#00d659] w-[200px] ml-4 font-bold"
        >
          Build Now
        </button>
      </div>
    </div>
  );
}
Cart.propTypes = {};
export default Cart;
