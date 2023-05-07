import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  bookmark,
  cancel,
  differntcomment,
  edit,
  leftArrow,
  mycomment,
  nobookmark,
  nodifferntcomment,
  nomycomment,
  rightArrow,
  save,
} from "../../asset/pic";
import { useAppDispatch, useAppSelector } from "../../redux/config/configStore";
import {
  MyAnswer,
  OtherAnswer,
  __getMyAnswer,
  __getOtherAnswer,
  __postMyAnswer,
  __putAnswer,
} from "../../redux/modules/detailAnswer";
import {
  SoList,
  __getMainSubList,
  __postBookMark,
} from "../../redux/modules/mainList";
import Header from "../common(공통컴포넌트)/Header";
import ListBox from "../common(공통컴포넌트)/ListBox";
import DetailOtherView from "./DetailOtherView";

const Detail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { title } = useParams();

  useEffect(() => {
    dispatch(__getMyAnswer(`${id}`));
    dispatch(__getOtherAnswer(`${id}`));
    dispatch(__getMainSubList(`${title}`));
  }, [dispatch, id, title]);

  // 내답변 가져오기
  const MineAnswer = useAppSelector(MyAnswer);
  // 다른 답변 가져오기
  const OthAnswer = useAppSelector(OtherAnswer);
  // 답변 내용 가져오기
  const QuestionTitle = useAppSelector(SoList)[0];

  console.log(MineAnswer);
  const [answer, setAnswer] = useState<string>("");
  const [BookMark, setBookMark] = useState<boolean>(false);
  const [Mycomment, setMyComment] = useState<boolean>(true);
  const [DifferntComment, setDifferntComment] = useState<boolean>(false);
  const [editAns, setEditAns] = useState<boolean>(false);
  if (MineAnswer === undefined) {
    return MineAnswer;
  }
  const AnswerId = MineAnswer.id;
  const onClickBookmark2 = () => {
    dispatch(__postBookMark(id));
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

  const onClickSave = () => {
    dispatch(__postMyAnswer({ id, answer }));
  };

  const onClickEdit = () => {
    setEditAns(true);
  };
  const onClickEditTwo = () => {
    dispatch(__putAnswer({ AnswerId, answer }));
    setEditAns(false);
  };

  return (
    <>
      <Header />
      <MinHead>
        {/* <img src={leftArrow} alt="이전 질문" /> */}
        <h3>Question #{id}</h3>
        {/* <img src={rightArrow} alt="다음 질문" /> */}
      </MinHead>
      <ListBox>
        <MListBox>
          <img
            src={BookMark ? bookmark : nobookmark}
            alt="북마크"
            onClick={() => onClickBookmark2()}
          />
          <div>
            Q. {QuestionTitle === undefined ? "" : QuestionTitle.content}
          </div>
        </MListBox>
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
      {Mycomment === true ? (
        <div>
          {MineAnswer === undefined ? (
            <>
              <QuestionBox
                placeholder="입력하기 (500자 이내)"
                maxLength={500}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <ButtonBox>
                <img src={cancel} alt="취소" />
                <img src={save} alt="저장" onClick={onClickSave} />
              </ButtonBox>
            </>
          ) : editAns === true ? (
            <>
              <QuestionBox
                placeholder="입력하기 (500자 이내)"
                maxLength={500}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <ButtonBox>
                <img src={cancel} alt="취소" />
                <img src={save} alt="저장" onClick={onClickEditTwo} />
              </ButtonBox>
            </>
          ) : (
            <>
              <QuestionView>
                {MineAnswer === undefined ? "" : MineAnswer.answer}
              </QuestionView>
              <ButtonBox>
                <img src={cancel} alt="취소" />
                <img src={edit} alt="수정" onClick={onClickEdit} />
              </ButtonBox>
            </>
          )}
          {}
        </div>
      ) : (
        <>
          {OthAnswer.map((ans, index) => (
            <DetailOtherView data={ans} key={index} />
          ))}
        </>
      )}
    </>
  );
};

export default Detail;

const MinHead = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 35px auto;
`;

const MListBox = styled.div`
  width: 100%;
  height: 100%;
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

const QuestionView = styled.div`
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
