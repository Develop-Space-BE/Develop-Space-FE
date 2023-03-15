import React, { useState } from "react";
import styled from "styled-components";
import {
  chart,
  nocomment,
  mypagenobookmark,
  mypagenolike,
  nochart,
  comment,
  mypagebookmark,
  mypagelike,
} from "../../asset/pic";
import Hr from "../common(공통컴포넌트)/Hr";
import Profile from "../common(공통컴포넌트)/Profile";
import MypageBCL from "./MypageBCL";
import MypageChart from "./MypageChart";

const MyView = () => {
  const [chartP, setChartP] = useState<boolean>(true);
  const [bookmarkP, setBookmarkP] = useState<boolean>(false);
  const [commentP, setCommentP] = useState<boolean>(false);
  const [likeP, setLikeP] = useState<boolean>(false);
  const onClickMypage = (
    ct: boolean,
    bm: boolean,
    cm: boolean,
    lk: boolean
  ): void => {
    setChartP(ct);
    setBookmarkP(bm);
    setCommentP(cm);
    setLikeP(lk);
  };
  return (
    <MyViewAll>
      {/* <Hr /> */}
      <MyPicture>
        <Profile />
        <h3>뭘보노</h3>
        <ImgTag>
          <ImgAndDiv
            bookmarkP={bookmarkP}
            chartP={chartP}
            commentP={commentP}
            likeP={likeP}
            onClick={() => onClickMypage(true, false, false, false)}
          >
            <img src={chartP ? chart : nochart} alt="차트" />
            <h6 className="chart">진도율</h6>
          </ImgAndDiv>
          <ImgAndDiv
            bookmarkP={bookmarkP}
            chartP={chartP}
            commentP={commentP}
            likeP={likeP}
            onClick={() => onClickMypage(false, true, false, false)}
          >
            <img
              src={bookmarkP ? mypagebookmark : mypagenobookmark}
              alt="북마크"
            />
            <h6 className="bookmark">북마크</h6>
          </ImgAndDiv>
          <ImgAndDiv
            bookmarkP={bookmarkP}
            chartP={chartP}
            commentP={commentP}
            likeP={likeP}
            onClick={() => onClickMypage(false, false, true, false)}
          >
            <img src={commentP ? comment : nocomment} alt="댓글" />
            <h6 className="comment">내 답변 10</h6>
          </ImgAndDiv>
          <ImgAndDiv
            bookmarkP={bookmarkP}
            chartP={chartP}
            commentP={commentP}
            likeP={likeP}
            onClick={() => onClickMypage(false, false, false, true)}
          >
            <img src={likeP ? mypagelike : mypagenolike} alt="좋아요" />
            <h6 className="like">좋아요</h6>
          </ImgAndDiv>
        </ImgTag>
      </MyPicture>
      <Hr />
      <ViewBox>
        {chartP ? <MypageChart /> : ""}
        {bookmarkP || commentP || likeP ? (
          <MypageBCL bookmarkP={bookmarkP} commentP={commentP} likeP={likeP} />
        ) : (
          ""
        )}
      </ViewBox>
    </MyViewAll>
  );
};

export default MyView;

const MyViewAll = styled.div`
  width: 100%;
  h3 {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;

const MyPicture = styled.div`
  width: 100%;
  padding-top: 10%;
  margin: 0 auto;
  border-bottom: 3px solid ${(props) => props.theme.color.lightGray};
`;

const ViewBox = styled.div`
  height: 50%;
  background-color: ${(props) => props.theme.color.white};
`;

const ImgTag = styled.div`
  width: 80%;
  height: 30%;
  margin: 9.5% auto 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ImgAndDiv = styled.div<{
  chartP: boolean;
  commentP: boolean;
  bookmarkP: boolean;
  likeP: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .chart {
    padding: 5px;
    border-bottom: 4px solid
      ${(props) =>
        props.chartP
          ? props.theme.color.bookmarkPurple
          : props.theme.color.transparent};
  }
  .bookmark {
    padding: 5px;
    border-bottom: 4px solid
      ${(props) =>
        props.bookmarkP
          ? props.theme.color.bookmarkPurple
          : props.theme.color.transparent};
  }
  .comment {
    padding: 5px;
    border-bottom: 4px solid
      ${(props) =>
        props.commentP
          ? props.theme.color.bookmarkPurple
          : props.theme.color.transparent};
  }
  .like {
    padding: 5px;
    border-bottom: 4px solid
      ${(props) =>
        props.likeP
          ? props.theme.color.bookmarkPurple
          : props.theme.color.transparent};
  }
`;
