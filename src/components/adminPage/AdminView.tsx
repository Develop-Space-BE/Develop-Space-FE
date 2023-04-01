import React from "react";
import styled from "styled-components";
import { back } from "../../asset/pic";

const AdminView = () => {
  return (
    <>
      <Hr3 />
      <Admin>
        <img src={back} alt="뒤로가기" />
        <Ad>관리자</Ad>
      </Admin>
      <Hr2 />
      <Info>정보</Info>
      <Hr />
      <Info2>
        <div>이름</div>
        <div>김개발</div>
      </Info2>
      <Hr />
      <Info2>
        <div>계정</div>
        <div>이메일 주소</div>
      </Info2>
      <Hr />
      <Info2>
        <div>닉네임</div>
        <EditBtn>변경하기</EditBtn>
        <div>관리자</div>
      </Info2>
      <Hr2 />
      <Info>관리</Info>
      <Hr />
      <Info2>
        <div>질문 관리</div>
      </Info2>
      <Hr />
      <Info2>
        <div>질문 작성</div>
      </Info2>
      <Hr />
      <Info2>
        <div>답변 관리</div>
      </Info2>
    </>
  );
};

export default AdminView;

const Hr = styled.hr`
  border: 1px solid ${(props) => props.theme.color.lightGray};
`;

const Hr2 = styled.hr`
  height: 20px;
  border: none;
  background-color: ${(props) => props.theme.color.lightGray};
`;

const Hr3 = styled.hr`
  height: 40px;
  border: none;
  background-color: ${(props) => props.theme.color.lightGray};
`;

const Admin = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px 0 20px;
  font-weight: 700;
  border: none;
`;

const Ad = styled.div`
  margin-right: 155px;
`;

const Info = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  font-size: 17px;
  font-weight: 700;
`;

const Info2 = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 40px 0 40px;
  font-weight: 500;
`;

const EditBtn = styled.button`
  margin-right: 180px;
  font-size: 12px;
  background-color: white;
  color: ${(props) => props.theme.color.Grey};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.Grey};
`;
