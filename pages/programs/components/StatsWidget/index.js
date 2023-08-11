import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Value = styled.span`
  font-weight: 500;
  font-size: 32px;
  line-height: 38.4px;
  letter-spacing: 4%;
  color: rgba(106, 92, 255, 1);
`;
const Title = styled.span`
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: 0.04em;
  color: #1a3989;
  margin-top: 0.25rem;
`;
const Change = styled.span`
  margin-top: 0.5rem;
`;
const ChangeValue = styled.span`
  font-size: 1rem;
  line-height: 120%;
  line-height: 120%;
  text-align: right;
  letter-spacing: 0.04em;
  color: #42ae00;
  margin-right: 0.25rem;
`;
const SubTitle = styled.span`
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 120%;
  letter-spacing: 0.04em;
  color: #1a3989;
`;

function StatsWidget({ widget }) {
  const { value, change, title, subTitle } = widget;
  return (
    <Wrapper>
      <Value>{value}</Value>
      <Title>{title}</Title>
      <Change>
        <ChangeValue>
          {change > 0 ? "+" : change < 0 ? "-" : ""}
          {change}
        </ChangeValue>
        <SubTitle>{subTitle}</SubTitle>
      </Change>
    </Wrapper>
  );
}

export default StatsWidget;
