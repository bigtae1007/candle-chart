import React from "react";
import styled from "styled-components";

const CustomCandle = () => {
  return (
    <WrapDiv>
      <FlexDiv>
        <div></div>
        {Array.from({ length: 6 }).map((v, l) => {
          return (
            <FlexSmallDiv>
              <LineDiv key={l}></LineDiv>
              <span>220222</span>
            </FlexSmallDiv>
          );
        })}
        <BottomDiv></BottomDiv>
      </FlexDiv>
    </WrapDiv>
  );
};

export default CustomCandle;

const WrapDiv = styled.div`
  width: 80%;
  height: 500px;
  border: 1px solid #000;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const FlexSmallDiv = styled.div`
  display: flex;
  position: relative;
  span {
    position: absolute;
    right: -80px;
    bottom: -10px;
  }
`;
const LineDiv = styled.div`
  border-top: 1px solid #ccc;
  width: 100%;
`;

const BottomDiv = styled.div`
  height: 50px;
  border: 1px solid #000;
`;
