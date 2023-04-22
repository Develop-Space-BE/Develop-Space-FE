import React, { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { bookmark, nobookmark } from "../../asset/pic";
import { MList } from "../../models/MainpageType";
import { useAppDispatch } from "../../redux/config/configStore";
import { __postBookMark } from "../../redux/modules/mainList";

const ListIn = ({ data }: { data: MList }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [BMark, setBMark] = useState<boolean>(false);

  const dataID: string | number = data.id;
  const onClickDetailPage = (e: MouseEvent) => {
    e.preventDefault();
    navigate(`/detail/${dataID}`);
  };

  const onClickBookmark = () => {
    setBMark(!BMark);
    dispatch(__postBookMark(dataID));
  };

  return (
    <MainList onClick={onClickDetailPage}>
      <img
        src={BMark ? bookmark : nobookmark}
        alt="북마크"
        onClick={onClickBookmark}
      />
      <div>{data?.content}</div>
    </MainList>
  );
};

export default ListIn;

const MainList = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  img {
    margin-left: 88%;
    width: 20px;
    z-index: 100;
  }
  div {
    margin: 0 10%;
  }
`;
