import React, { useState } from "react";
import { detaillike, detailnolike } from "../../asset/pic";
import { DetailData } from "../../models/Detail";
import { useAppDispatch } from "../../redux/config/configStore";
import ListBox from "../common(공통컴포넌트)/ListBox";
import { CommentLike, MainList, RowDiv, RowDiv2 } from "../mypage/MypageBCL";

const DetailOtherView = ({ data }: { data: DetailData }) => {
  console.log(data);
  const dispatch = useAppDispatch();
  const [likeCheck, setLikeCheck] = useState<boolean>(data.liked);

  const onClickLike = () => {
    setLikeCheck(!likeCheck);
    // dispatch();
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
          <RowDiv2>
            <h6>{data.answer}</h6>
            <p>좋아요 {data.likeCount}</p>
          </RowDiv2>
        </CommentLike>
      </MainList>
    </ListBox>
  );
};

export default DetailOtherView;
