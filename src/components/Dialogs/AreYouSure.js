/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React from "react";
import PropTypes from "prop-types";
import { AiOutlineWarning, AiOutlineCloseCircle } from "react-icons/ai";

function AreYouSure({ onCloseDialog, areUSureDelete, message, nameProduct }) {
  const onChooseNoDelete = () => {
    areUSureDelete(false);
    onCloseDialog();
  };
  const onChooseYesDelete = () => {
    areUSureDelete(true);
    onCloseDialog();
  };
  return (
    <div
      id="popup-modal"
      className="bg-[rgba(24,32,47,0.5)] overflow-x-hidden fixed top-0 bottom-0 right-0 left-0 z-50"
    >
      <div className="absolute p-4 w-full max-w-md top-[50%] left-[50%] -translate-x-[40%] -translate-y-[50%]">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-[130px] w-[300px]">
          <AiOutlineCloseCircle
            onClick={onCloseDialog}
            className="absolute top-2 right-2 text-xl text-red-300 hover:text-red-600 cursor-pointer"
          />
          <div className=" text-center">
            <h3 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
              <span className="flex items-center justify-center pt-2">
                <AiOutlineWarning className="text-xl text-yellow-300" />
                {message}
              </span>
              <span className="font-bold text-red-700">{nameProduct}</span>
            </h3>
            <span
              tabIndex={0}
              role="button"
              onClick={() => onChooseYesDelete()}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-2 py-[4px] text-center mr-2"
            >
              Yes, I'm sure
            </span>
            <span
              tabIndex={0}
              role="button"
              onClick={() => onChooseNoDelete()}
              // eslint-disable-next-line max-len
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-4 py-[6px] hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
AreYouSure.propTypes = {
  onCloseDialog: PropTypes.func,
  areUSureDelete: PropTypes.func,
  message: PropTypes.string,
  nameProduct: PropTypes.string,
};
export default AreYouSure;
