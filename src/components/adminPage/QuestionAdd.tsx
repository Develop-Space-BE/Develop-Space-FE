import React from "react";
import styled from "styled-components";
import { back } from "../../asset/pic";

const QuestionAdd = () => {
  return (
    <AA>
      <Hr3 />
      <Head>
        <img src={back} alt="뒤로가기" />
        <Ad>질문 작성</Ad>
      </Head>
      <Cat>
        <option>front-end</option>
        <option>back-end</option>
        <option>attitude</option>
      </Cat>
      <QName placeholder="질문 제목"></QName>
      <QBox placeholder="입력하기"></QBox>
      <BtnBox>
        <XBtn>취소</XBtn>
        <SaveBtn>저장</SaveBtn>
      </BtnBox>
    </AA>
  );
};

export default QuestionAdd;

const AA = styled.div`
  background-color: ${(props) => props.theme.color.lightGray};
`;

const Hr3 = styled.hr`
  height: 40px;
  border: none;
`;

const Head = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-weight: 700;
  border: none;
  background-color: white;
`;

const Ad = styled.div`
  margin-right: 155px;
`;

const Cat = styled.select`
  display: flex;
  align-items: center;
  margin: 15px 35px 0px 35px;
  padding-left: 25px;
  width: 342px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.listWhite};
  border-radius: 15px;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const QName = styled.input`
  display: flex;
  align-items: center;
  margin: 15px 35px 0px 35px;
  padding-left: 25px;
  width: 342px;
  height: 40px;
  color: ${(props) => props.theme.color.Gray};
  border: 1px solid ${(props) => props.theme.color.listWhite};
  border-radius: 15px;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const QBox = styled.input`
  display: flex;
  margin: 15px 35px 0px 35px;
  padding: 25px 0px 0px 25px;
  width: 342px;
  height: 300px;
  border: 1px solid ${(props) => props.theme.color.listWhite};
  border-radius: 15px;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
`;

const BtnBox = styled.div`
  width: 90%;
  margin: 15px 0px 0px 0px;
  display: flex;
  justify-content: flex-end;
`;

const XBtn = styled.button`
  width: 70px;
  height: 30px;
  color: white;
  background-color: #999999;
  border: none;
  border-radius: 10px;
  margin-right: 15px;
`;

const SaveBtn = styled.button`
  width: 70px;
  height: 30px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 10px;
`;
