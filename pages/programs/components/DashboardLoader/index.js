import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: relative;
  height: 0.5rem;
  width: 15rem;
  border-radius: 1rem;
  background: rgba(220, 220, 220, 0.38);

  @keyframes fill {
    0% {
      width: 0%;
    }

    20% {
      width: ${(props) => props.completed}%;
    }
    100% {
      width: 100%;
    }
  }

  &::after {
    content: " ";
    position: absolute;
    height: 120%;
    background: linear-gradient(94.28deg, #4383ff -15.13%, #6a5cff 107.24%);
    margin-top: -0.05rem;
    border-radius: 1rem;

    animation: fill 30s ease forwards;
  }
`;

function Loader({ completed }) {
  return <LoaderContainer completed={completed} />;
}

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h2 {
    color: #1a3989;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 29.3px;
    letter-spacing: 2%;
    padding: 0;
    margin: 0;
  }
  h3 {
    color: #1a3989;
    font-weight: 300;
    font-size: 1rem;
    line-height: 19.34px;
    letter-spacing: 2%;
    text-align: Center;
    padding: 0;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

function DashboardLoader() {
  return (
    <LoaderWrapper>
      <h2>Decoding instructions data</h2>
      <h3>Usually takes less than 30 seconds</h3>
      <Loader completed={70} />
    </LoaderWrapper>
  );
}

export default DashboardLoader;
