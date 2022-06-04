import React, { useState } from "react";
import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Appp(props) {
  const [addData, setAddData] = useState("");
  const [addEdData, setAddEdData] = useState(0);
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setAddData(data);
  };
  return (
    <div className="">
      <div className="w-[50%]">
        <CKEditor
          editor={ClassicEditor}
          data={addData}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

Appp.propTypes = {};

export default Appp;
