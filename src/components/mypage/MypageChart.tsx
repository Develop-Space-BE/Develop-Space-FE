import React from "react";
import Charts from "react-apexcharts";
import styled from "styled-components";

const MypageChart = () => {
  let option = {
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 10,
          size: "40%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          // position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light", // 그라데이션 음영에 사용 가능한 옵션
        type: "horizontal", // 그라데이션 유형 (horizontal, vertical, diagonal1, diagonal2)
        // shadeIntensity: 0.3, //그라데이션 음영의 강도입니다. 0에서 1까지 // 변화 없어서 사용 X
        // gradientToColors: [], //그라디언트를 종료하는 선택적 색상
        // gradientFromColors: [], // end그라데이션의 색상
        inverseColors: false, // 시작 색상과 끝 색상을 반전시킵니다.
        // opacityFrom: 0, // 색상의 불투명도를 시작
        // opacityTo: 0.3, // 끝 색상의 불투명도
        // stops: [0, 100], // 그라디언트에서 사용할 색상 램프를 정의
        colorStops: [
          //무제한 색상 정지점으로 모든 것을
          [
            {
              offset: 0,
              color: "rgba(255, 126, 71, 1)",
            },
            {
              offset: 100,
              color: "rgba(251, 238, 122, 1)",
            },
          ],
          [
            {
              offset: 0,
              color: "rgba(114, 89, 154, 1)",
            },
            {
              offset: 100,
              color: "rgba(164, 203, 232, 1)",
            },
          ],
          [
            {
              offset: 0,
              color: "rgba(174, 255, 177, 1)",
            },
            {
              offset: 100,
              color: "rgba(60, 173, 255, 1)",
            },
          ],
        ],
      },
    },
    stroke: {
      lineCap: "round" as "round",
    },
    legend: {
      show: true,
      floating: true,
      fontSize: "10px",
      // position: "left",
      offsetX: 200,
      offsetY: 100,
      labels: {
        useSeriesColors: true,
      },
      // markers: {
      //   size: 0,
      // },
      formatter: function (seriesName: string, opts: any) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        horizontal: 1,
      },
    },
    labels: ["Percent", "backend", "frontend"],
    series: [75, 70, 33],
  };

  return (
    <ChartDiv>
      <h5>진도율</h5>
      <Charts
        options={option}
        series={option.series}
        type="radialBar"
        height="380"
      ></Charts>
    </ChartDiv>
  );
};

export default MypageChart;

const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    width: 90%;
    margin-top: 5%;
  }
`;
