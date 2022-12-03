import React from "react";
import styled from "styled-components";
import { BarChart, Bar, Legend, ResponsiveContainer } from "recharts";
import RightArrowLong from "@/components/SvgComponents/RightArrowLong";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const LabelWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
const Label = styled.span`
  margin-right: 0.5rem;
`;

function BarGraphWidget({ widget }) {
  const { xLabel, legend, data, background } = widget;

  return (
    <Wrapper>
      <div style={{ flex: 1, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={data.map((value) => ({ [legend]: value }))}
          >
            <Legend
              radius={[6]}
              align="left"
              verticalAlign="top"
              iconType="circle"
            />
            <Bar
              dataKey={legend}
              fill={background}
              barSize={12}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <LabelWrapper>
        <Label>{xLabel}</Label>
        <RightArrowLong />
      </LabelWrapper>
    </Wrapper>
  );
}

export default BarGraphWidget;
