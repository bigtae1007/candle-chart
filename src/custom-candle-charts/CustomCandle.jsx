import React from "react";
import styled from "styled-components";
import { dataa1 } from "../dummyData";

const CustomCandle = () => {
  const height = 500;
  const data = dataa1.reverse().slice(0, 1000).reverse();
  // 구조 변경
  const dataArr = [];
  data.forEach((v, l) => {
    dataArr.push([v.x, v.y[0], v.y[1], v.y[2], v.y[3]]);
  });
  const dataYMax = dataArr.reduce(
    (max, [_, a, b, c, d]) => Math.max(max, d),
    -Infinity
  );
  const dataYMin = dataArr.reduce(
    (min, [_, a, b, c, d]) => Math.min(min, a),
    +Infinity
  );
  const minusDataY = dataYMax - dataYMin;
  return (
    <WrapDiv height={height}>
      <FlexDiv>
        {Array.from({ length: 6 }).map((v, l) => {
          return (
            <FlexSmallDiv>
              <LineDiv key={l}></LineDiv>
              <span>{parseInt(dataYMin + (minusDataY / 6) * (6 - l))}</span>
            </FlexSmallDiv>
          );
        })}
      </FlexDiv>
      <Aaa>
        {dataArr.map((v, l) => {
          return <UpStick></UpStick>;
        })}
      </Aaa>
    </WrapDiv>
  );
};

export default CustomCandle;

const UpStick = styled.div`
  height: 100px;
  border: 1px solid red;
  color: red;
  background-color: red;
  width: 100%;
`;
const Aaa = styled.div`
  border: 1px solid #000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  gap: 1px;
  justify-content: space-between;
`;
const WrapDiv = styled.div`
  position: relative;
  width: 80%;
  height: ${({ height }) => height + "px"};
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
