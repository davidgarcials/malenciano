import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useDebounce from "../hooks/useDebounce";
import CTextArea from "./CTextArea";

const Wrapper = styled.div`
  display: flex;
`;

const CForm = () => {
  const [malencianoValue, setMalencianoValue] = useState("");
  const debouncedMalencianoValue = useDebounce(malencianoValue, 1000);

  useEffect(() => {
    // TODO - translate to malenciano
    console.log(`debouncedMalencianoValue - ${debouncedMalencianoValue}`);
  }, [debouncedMalencianoValue]);

  const handleOnChange = (value) => {
    setMalencianoValue(value);
  };

  return (
    <Wrapper>
      <CTextArea placeholder={"castellano"} onChange={handleOnChange} />
      <CTextArea
        placeholder={"malenciano"}
        readOnly={true}
        value={debouncedMalencianoValue}
      />
    </Wrapper>
  );
};

export default CForm;
