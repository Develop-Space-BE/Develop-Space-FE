import React from "react";
import styled from "styled-components";
import { mainLogo } from "../../asset/pic";

const AdminLogin = () => {
  return (
    <>
      <HeaderDiv>
        <img src={mainLogo} alt="메인로고" />
      </HeaderDiv>
      <Div>
        <Admin>관리자 로그인</Admin>
        <Name>이메일</Name>
        <Inp></Inp>
        <Name>비밀번호</Name>
        <Inp></Inp>
        <LoginBtn>다음</LoginBtn>
      </Div>
    </>
  );
};

export default AdminLogin;

const HeaderDiv = styled.div`
  width: 80%;
  margin: 15% auto 0;
  display: flex;
`;

const Admin = styled.div`
  width: 80%;
  margin: 10% auto 0;
  font-size: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  width: 75%;
  margin: 5% auto 3%;
  font-size: 18px;
  color: ${(props) => props.theme.color.Gray};
`;

const Inp = styled.input`
  width: 75%;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.Gray};
  border-radius: 5px;
`;

const LoginBtn = styled.button`
  width: 150px;
  height: 40px;
  margin: 8% auto 3%;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.black};
  color: white;
  font-size: 15px;
`;
