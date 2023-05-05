import React, { useEffect, useState } from "react";
import { detaillike, detailnolike } from "../../asset/pic";
import { DetailData } from "../../models/Detail";
import { useAppDispatch } from "../../redux/config/configStore";
import { __postAnswerLike } from "../../redux/modules/detailAnswer";
import { RowDiv } from "./MypageBCL";

const MypageLike = ({ data }: { data: DetailData }) => {
  console.log(data);
  const dispatch = useAppDispatch();
  const [likeCheck, setLikeCheck] = useState<boolean>(data.liked);
  const [likeCount, setLikeCount] = useState<number>(data.likeCount);
  return (
    <>
      <RowDiv>
        <h4>{data.nickname}</h4>
        <img
          src={likeCheck ? detaillike : detailnolike}
          alt="별"
          onClick={() => {
            setLikeCheck(!likeCheck);
            dispatch(__postAnswerLike(data.id));
            if (likeCheck === true) {
              setLikeCount(likeCount - 1);
            } else {
              setLikeCount(likeCount + 1);
            }
          }}
        />
      </RowDiv>
      <RowDiv>
        <h6>{data.answer}</h6>
        <p>좋아요 {likeCount}</p>
      </RowDiv>
    </>
  );
};

export default MypageLike;
