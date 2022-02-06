import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const CTextArea = ({ onChange = undefined, placeholder, readOnly = false, value = undefined }) => {
  const handleOnChange = (e) => {
    onChange(e.target.value)
  };

  return (
    <TextArea
      showCount
      placeholder={placeholder}
      maxLength={100}
      onChange={handleOnChange}
      disabled={readOnly}
      rows={10}
      autoSize={true}
      {...(value && { value })}
    />
  );
};

export default CTextArea;
