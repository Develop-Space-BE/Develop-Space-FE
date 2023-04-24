import { string } from "prop-types";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  bookmark,
  cancel,
  differntcomment,
  leftArrow,
  mycomment,
  nobookmark,
  nodifferntcomment,
  nomycomment,
  rightArrow,
  save,
} from "../../asset/pic";
import { useAppDispatch, useAppSelector } from "../../redux/config/configStore";
import { MyAnswer, __getMyAnswer } from "../../redux/modules/detailAnswer";
import { SoList, __getMainSubList } from "../../redux/modules/mainList";
import Header from "../common(공통컴포넌트)/Header";
import ListBox from "../common(공통컴포넌트)/ListBox";

const Detail = () => {
  const dispatch = useAppDispatch();
  const [textData, setTextData] = useState<string>("");
  const [BookMark, setBookMark] = useState<boolean>(false);
  const [Mycomment, setMyComment] = useState<boolean>(true);
  const [DifferntComment, setDifferntComment] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(__getMyAnswer(`${id}`));
  }, [dispatch]);

  const MineAnswer = useAppSelector(MyAnswer);
  console.log(MineAnswer);

  const a = useAppSelector((state) => state.mainList.mainList);
  console.log(a);
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

  const onChangeDetailData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextData(e.target.value);
    console.log(textData);
  };
  return (
    <>
      <Header />
      <MinHead>
        <img src={leftArrow} alt="이전 질문" />
        <h3>Question #{id}</h3>
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
      <div>
        <QuestionBox
          placeholder="입력하기 (500자 이내)"
          maxLength={500}
          onChange={onChangeDetailData}
        />
        <ButtonBox>
          <img src={cancel} alt="취소" />
          <img src={save} alt="저장" />
        </ButtonBox>
      </div>
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
  width: 90%;
  height: 40vh;
  display: flex;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ececec;
  border-radius: 10px;
  word-wrap: break-word;
  word-break: break-word;
`;

const ButtonBox = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  justify-content: end;
  img {
    margin-left: 5%;
  }
`;
