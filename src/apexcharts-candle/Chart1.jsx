import React from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";
import { useState } from "react";
import { dataa1 } from "../dummyData";
const Chart1 = () => {
  const [count, setCount] = useState(1);
  const dataa = dataa1;

  const dState = {
    theme: {
      mode: "light",
    },

    title: { text: "stock", align: "left" },
    chart: {
      zoom: false,
      type: "candlestick",
      height: 350,
      width: 500,
      toolbar: {
        // 상단 툴바
        show: false,
        reset: false,
      },
      // 차트 배경색
      background: "white",
    },
    stroke: {
      // 선 두깨 및 옵션
      curve: "smooth",
      width: 2,
    },
    yaxis: {
      // y 툴 보이기 opposite >> 왼쪽 오른쪽 위치 조정
      show: false,
      opposite: true,
      // 포인터에서 가로선
      tooltip: {
        enabled: true,
      },
    },

    yaxis: {
      // y 축 보이기
      show: true,
      showAlways: true,
      showForNullSeries: true,
      seriesName: "undefined",
      // 왼쪽 오른쪽
      opposite: true,

      reversed: false,
      logarithmic: false,
      tickAmount: 5,
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
        show: true,
        align: "center",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#FF607C", "#54BA7D"],
          fontSize: "12px",
          fontWeight: 400,
          cssClass: "apexcharts-yaxis-label",
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
        // y축 원하는데로 변경하기 , 찍어서 가독성을 높여보자
        formatter: (value) => {
          console.log(value);
          return parseInt(value);
        },
      },
      axisBorder: {
        // y축 마지막 선 색
        show: true,
        color: "#78909C",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        // 표 끝 금액으로 연결되는 선
        show: true,
        borderType: "solid",
        color: "#f00",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      title: {
        text: undefined,
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
          cssClass: "apexcharts-yaxis-title",
        },
      },
      // 가로선 색 위로 보일지 선 색 두께
      crosshairs: {
        show: true,
        position: "front",
        stroke: {
          color: "#b6b6b6",
          width: 1,
          dashArray: 0,
        },
      },
      // 선색 보일지
      tooltip: {
        enabled: true,
        offsetX: 0,
      },
    },
    xaxis: {
      // type에 따라 그래프가 약간씩 달라짐, date는 축소도 되고 확대하면 넓게
      type: "category",
      //하단 갯수
      tickAmount: 6,
      labels: {
        show: true,
        // 1자로만 보이게
        rotate: 0,

        formatter: function (val, l) {
          // x축 원하는데로 조작하기
          console.log(dayjs(val).format("MM DD"));
          return dayjs(val).format("MM DD");
        },
        style: {
          // 하단 날짜 색
          colors: "#000",
        },
      },
      // {
      //   show: false,
      //   //   formatter: function (val, l) {
      //   //     // x축 원하는데로 조작하기
      //   //     console.log(val);
      //   //     return dayjs(val).format("MM DD");
      //   //   },
      //   //   style: {
      //   //     // 하단 날짜 색
      //   //     colors: "#9c88ff",
      //   //   },
      // },
    },
    plotOptions: {
      candlestick: {
        colors: {
          // 선 색 #으로 표시해야 배경색도 변경
          upward: "#FF607C",
          downward: "#54BA7D",
        },
        wick: {
          // 선 색 채울건지
          useFillColor: true,
        },
      },
    },
    tooltip: {
      // 마우스 올리면 커스텀 할 수 있는 것
      enabled: true,
      shared: true,
      followCursor: true,
      intersect: false,
      inverseOrder: false,
      // undefined면 제목이 나타낸다 쓰레기
      // 툴 커스텀해서 사용하기
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          "<div>" +
          "<span>" +
          dataa[dataPointIndex].y[0] +
          "</span>" +
          "<span>" +
          "<br></br>" +
          dataa[dataPointIndex].y[1] +
          "</span>" +
          "<span>" +
          "<br></br>" +
          dataa[dataPointIndex].y[2] +
          "</span>" +
          "<span>" +
          "<br></br>" +
          dataa[dataPointIndex].y[3] +
          "</span>" +
          "</div>"
        );
      },
      fillSeriesColor: false,
      theme: "light",
      style: {
        fontSize: "12px",
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },

      y: {
        formatter: undefined,
        title: {
          formatter: (v) => v,
        },
      },
      z: {
        formatter: undefined,
        title: "Size: ",
      },
      marker: {
        show: true,
      },
      items: {
        display: "flex",
      },
      // 고정할 때
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
  };
  return (
    <div style={{ width: "400px" }} id="chart">
      <div>asdasd</div>
      <ReactApexChart
        options={dState}
        series={[
          {
            // 툴팁 이름 호버했을 때 보이는
            name: ["price", "gey"],
            data: dataa,
          },
        ]}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default Chart1;
