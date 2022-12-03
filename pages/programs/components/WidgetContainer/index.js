import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

function WidgetContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default WidgetContainer;
