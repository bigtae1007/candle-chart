import React from "react";
import styled from "styled-components";
import CustomCandle from "./CustomCandle";

const CustomChart = () => {
  const SVG_CHART_WIDTH = 1200;
  const SVG_CHART_HEIGHT = 400;
  // const SVG_VOLUME_WIDTH = 1600;
  // const SVG_VOLUME_HEIGHT = 400;

  const x0 = 50;
  const xAxisLength = SVG_CHART_WIDTH - x0 * 2;
  const y0 = 50;
  const yAxisLength = SVG_CHART_HEIGHT - y0 * 2;

  const xAxisY = y0 + yAxisLength;

  return (
    <MainDiv>
      <CustomCandle />
    </MainDiv>
  );
};
export default CustomChart;

const MainDiv = styled.div`
  border: 1px solid;
  padding: 50px;
`;
