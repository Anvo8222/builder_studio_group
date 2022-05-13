import React from "react";
import { AiOutlineFolderAdd, AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

function CreateProducts({ oncloseProducts }) {
  const handleCloseProducts = () => {
    if (oncloseProducts) {
      oncloseProducts();
    }
  };

  return (
    <div>
      <div className="bg-slate-900 h-full w-full "></div>
      <form
        className="text-center w-8/12 relative m-auto rounded py-4 block bg-[#ace7e9e6] items-center justify-center"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <AiOutlineCloseCircle
          onClick={() => handleCloseProducts()}
          tabIndex="0"
          role="button"
          className="absolute right-[10px] text-xl top-[10px] text-red-700 cursor-pointer hover:text-red-300 "
        />
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            name="username"
          >
            Name!
          </label>
          <input
            className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            type="Name"
            name="Name"
            placeholder="Enter your name..."
            // {...register("email")}
          />
          <p className="my-4 text-red-500">
            {/* {errors.email && errors.email.message} */}
          </p>
        </div>
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          name="username"
        >
          Name!
        </label>
        <input
          className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="Name"
          name="Name"
          placeholder="Enter your name..."
          // {...register("email")}
        />
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          name="username"
        >
          Name!
        </label>
        <input
          className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="Name"
          name="Name"
          placeholder="Enter your name..."
          // {...register("email")}
        />
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          name="username"
        >
          Name!
        </label>
        <input
          className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="Name"
          name="Name"
          placeholder="Enter your name..."
          // {...register("email")}
        />
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          name="username"
        >
          image!
        </label>
        <input
          className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          name="picture"
          placeholder="Enter your name..."
          // {...register("email")}
        />

        <select className="m-auto block rounded mb-2">
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
        <input
          className="bg-[#6c00ea] m-auto block w-[100px] rounded text-white"
          type="submit"
          value="Create"
        />
      </form>
    </div>
  );
}
CreateProducts.propTypes = {
  oncloseProducts: PropTypes.func,
};
export default CreateProducts;
