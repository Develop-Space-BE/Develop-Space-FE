import React from "react";
import Charts from "react-apexcharts";
import styled from "styled-components";

const MypageChart = () => {
  const option = {
    series: [44, 55, 67],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "10%",
          },
          track: {
            strokeWidth: 12,
          },
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              // formatter: function (w) {
              //   // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              //   return 249;
              // },
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Apples", "Oranges", "Bananas"],
    },
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
