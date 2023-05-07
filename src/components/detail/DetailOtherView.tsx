import React, { useEffect, useState } from "react";
import { detaillike, detailnolike } from "../../asset/pic";
import { DetailData } from "../../models/Detail";
import { useAppDispatch, useAppSelector } from "../../redux/config/configStore";
import {
  OtherAnswer,
  __postAnswerLike,
} from "../../redux/modules/detailAnswer";
import ListBox from "../common(공통컴포넌트)/ListBox";
import { CommentLike, MainList, RowDiv, RowDiv2 } from "../mypage/MypageBCL";

const DetailOtherView = ({ data }: { data: DetailData }) => {
  console.log(data);
  const dispatch = useAppDispatch();
  const [likeCheck, setLikeCheck] = useState<boolean>(data.liked);
  const [likeCount, setLikeCount] = useState<number>(data.likeCount);
  const onClickLike = () => {
    setLikeCheck(!likeCheck);
    dispatch(__postAnswerLike(data.id));
    if (likeCheck === true) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <ListBox>
      <MainList>
        <CommentLike>
          <RowDiv>
            <h4>{data.nickname}</h4>
            <img
              src={likeCheck ? detaillike : detailnolike}
              alt="별"
              onClick={onClickLike}
            />
          </RowDiv>
          <RowDiv>
            <h6>{data.answer}</h6>
            <p>좋아요 {likeCount}</p>
          </RowDiv>
        </CommentLike>
      </MainList>
    </ListBox>
  );
};

export default DetailOtherView;
