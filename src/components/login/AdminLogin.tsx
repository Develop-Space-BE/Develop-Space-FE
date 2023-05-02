import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instanceAxios } from "../../api/apiConfig";
import { setCookies } from "../../api/cookie";
import { mainLogo } from "../../asset/pic";
import { Contain } from "../../pages/Home";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postLogin = async (post: object) => {
    try {
      const data = await instanceAxios.post(`/member/login`, post);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  //  ID: test01@test.com
  //  PW: qwe123!@#

  const onLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("아이디, 비밀번호를 확인해주세요");
    } else {
      postLogin({ email, password }).then((res) => {
        if (res?.data.customHttpStatus === 2000) {
          setCookies("authorization", res.headers.authorization, {
            path: "/",
            maxAge: 3000,
          });
          navigate("/mainlist");
        } else {
          alert("로그인 실패");
        }
      });
    }
  };

  return (
    <Contain>
      <HeaderDiv>
        <img src={mainLogo} alt="메인로고" />
      </HeaderDiv>
      <Div>
        <Admin>관리자 로그인</Admin>
        <Name>이메일</Name>
        <Inp
          name="adminEmail"
          type="text"
          onChange={(e) => {
            const { value } = e.target;
            setEmail(value);
          }}
        />
        <Name>비밀번호</Name>
        <Inp
          name="password"
          type="password"
          onChange={(e) => {
            const { value } = e.target;
            setPassword(value);
          }}
        />
        <LoginBtn
          onClick={(e) => {
            onLogin(e);
          }}
        >
          다음
        </LoginBtn>
      </Div>
    </Contain>
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
