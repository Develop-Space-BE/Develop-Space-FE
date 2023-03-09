import React from "react";
import styled from "styled-components";
import Header from "../components/common(공통컴포넌트)/Header";
import MyView from "../components/mypage/MyView";

const Mypage = () => {
  return (
    <div>
      <Head />
      <MyView />
    </div>
  );
};

export default Mypage;

const Head = styled(Header)`
  margin: 10% auto 5%;
  background-color: ${(props) => props.theme.color.mypageBackGround};
`;
