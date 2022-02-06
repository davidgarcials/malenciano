import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const CTextArea = () => {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  return (
    <TextArea
      showCount={true}
      maxLength={100}
      style={{ height: 120 }}
      onChange={onChange}
    />
  );
};

export default CTextArea;
