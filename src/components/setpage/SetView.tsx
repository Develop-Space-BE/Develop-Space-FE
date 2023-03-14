import React from "react";
import styled from "styled-components";
import Hr from "../common(공통컴포넌트)/Hr";
import MiniHr from "../common(공통컴포넌트)/MiniHr";
import Profile from "../common(공통컴포넌트)/Profile";

const SetView = () => {
  return (
    <SetViewAll>
      <MyPicture>
        <Profile />
      </MyPicture>
      <Hr />
      <Box>
        <h3>정보</h3>
      </Box>
      <MiniHr />
      <Box>
        <div>이름</div>
        <div>1</div>
      </Box>
      <MiniHr />
      <Box>
        <div>생년월일</div>
        <div>1</div>
      </Box>
      <MiniHr />
      <Box>
        <div>닉네임</div>
        <div>1</div>
      </Box>
      <MiniHr />
    </SetViewAll>
  );
};

export default SetView;

const SetViewAll = styled.div`
  width: 100%;
`;

const MyPicture = styled.div`
  width: 100%;
  margin: 10% auto;
`;

const Box = styled.div`
  h3,
  div {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    height: 50px;
  }
`;
