import React, { useState } from "react";
import styled from "styled-components";
import {
  bookmark,
  differntcomment,
  leftArrow,
  mycomment,
  nobookmark,
  nodifferntcomment,
  nomycomment,
  rightArrow,
} from "../../asset/pic";
import Header from "../common(공통컴포넌트)/Header";
import ListBox from "../common(공통컴포넌트)/ListBox";
//import Hr from "../common(공통컴포넌트)/Hr";

const Detail = () => {
  const [BookMark, setBookMark] = useState<boolean>(false);
  const [Mycomment, setMyComment] = useState<boolean>(true);
  const [DifferntComment, setDifferntComment] = useState<boolean>(false);

  const onClickBookmark2 = () => {
    setBookMark(!BookMark);
  };

  const onCliMycomment2 = () => {
    setMyComment(true);
    setDifferntComment(false);
  };
  const onClickNocomment2 = () => {
    setDifferntComment(true);
    setMyComment(false);
  };
  return (
    <>
      <Header />
      <MinHead>
        <img src={leftArrow} alt="이전 질문" />
        <h3>Question #1</h3>
        <img src={rightArrow} alt="다음 질문" />
      </MinHead>
      <ListBox>
        <MainList>
          <img
            src={BookMark ? bookmark : nobookmark}
            alt="북마크"
            onClick={() => onClickBookmark2()}
          />
          <div>Q. 질문이다 임마</div>
        </MainList>
      </ListBox>
      <CommentsBox>
        <img
          src={Mycomment ? mycomment : nomycomment}
          alt="내답변"
          onClick={() => onCliMycomment2()}
        />
        <img
          src={DifferntComment ? differntcomment : nodifferntcomment}
          alt="다른답변"
          onClick={() => onClickNocomment2()}
        />
      </CommentsBox>
      <hr />

      <QuestionBox
        placeholder="입력하기 (500자 이내)"
        maxLength={500}
        //onChange={}
      ></QuestionBox>
      <ButtonBox>
        <Cancle>취소</Cancle>
        <Save>저장</Save>
      </ButtonBox>
    </>
  );
};

export default Detail;

const MinHead = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto 35px auto;
`;

const MainList = styled.div`
  img {
    margin-left: 88%;
    width: 20px;
  }
  div {
    margin: 0 10%;
  }
`;

const CommentsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px auto 0;
  width: 50%;
`;

const QuestionBox = styled.textarea`
  width: 290px;
  height: 264px;
  display: flex;
  margin: 30px auto 30px auto;
  border: 1px solid #ececec;
  word-wrap: break-word;
  word-break: break-word;
`;

const ButtonBox = styled.div`
  display: flex;
  float: right;
`;

const Cancle = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 30px;
  border-radius: 10px;
  background-color: #777777;
  color: #ffffff;
`;

const Save = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 10px;
  background-color: #111111;
  color: #ffff;
`;
