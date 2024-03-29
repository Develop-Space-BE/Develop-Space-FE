import React, { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  all,
  attitude,
  backend,
  frontend,
  noAll,
  noattitude,
  nobackend,
  node,
  nofrontend,
  nonode,
  noreact,
  nospring,
  novue,
  react,
  spring,
  vue,
} from "../../asset/pic";
import { useAppDispatch, useAppSelector } from "../../redux/config/configStore";
import {
  MoList,
  SoList,
  __getMainList,
  __getMainSubList,
} from "../../redux/modules/mainList";
import ListBox from "../common(공통컴포넌트)/ListBox";
import ListIn from "./ListIn";

const List = () => {
  const dispatch = useAppDispatch();
  const [attitudes, setAttitudes] = useState<boolean>(true);
  const [frontEnds, setFrontEnds] = useState<boolean>(false);
  const [backEnds, setBackEnds] = useState<boolean>(false);
  const [reactView, setReactView] = useState<boolean>(false);
  const [vueView, setVueView] = useState<boolean>(false);
  const [springView, setSpringView] = useState<boolean>(false);
  const [nodeView, setNodeView] = useState<boolean>(false);
  const [frontAll, setFrontAll] = useState<boolean>(true);
  const [backAll, setBackAll] = useState<boolean>(true);

  const Main = useAppSelector(MoList);
  const SubMain = useAppSelector(SoList);

  useEffect(() => {
    dispatch(__getMainList("ATTITUDE"));
  }, [dispatch]);

  // 대 분류 클릭시 공통, 프론트, 백엔드
  const onClickBigList = (at: boolean, fe: boolean, be: boolean): void => {
    setAttitudes(at);
    setFrontEnds(fe);
    setBackEnds(be);
    if (at === true) {
      dispatch(__getMainList("ATTITUDE"));
    } else if (fe === true) {
      dispatch(__getMainList("FRONTEND"));
    } else {
      dispatch(__getMainList("BACKEND"));
    }
  };
  // 프론트엔드 부분에서 리액트와 뷰 부분
  const onClickFE = (Al: boolean, Re: boolean, Ve: boolean): void => {
    setFrontAll(Al);
    setReactView(Re);
    setVueView(Ve);
    if (Al === true) {
      dispatch(__getMainList("FRONTEND"));
    } else if (Re === true) {
      dispatch(__getMainSubList("REACT"));
    } else {
      dispatch(__getMainSubList("VUE"));
    }
  };
  // 백엔드 부분에서 스프링과 노드 부분
  const onClickBE = (Al: boolean, Sp: boolean, Nd: boolean): void => {
    setBackAll(Al);
    setSpringView(Sp);
    setNodeView(Nd);
    if (Al === true) {
      dispatch(__getMainList("BACKEND"));
    } else if (Sp === true) {
      dispatch(__getMainSubList("SPRING"));
    } else {
      dispatch(__getMainSubList("NODE"));
    }
  };

  return (
    <div>
      <ListChoose>
        <img
          src={attitudes ? attitude : noattitude}
          alt="공통"
          onClick={() => onClickBigList(true, false, false)}
        />
        <img
          src={frontEnds ? frontend : nofrontend}
          alt="프론트엔드"
          onClick={() => onClickBigList(false, true, false)}
        />
        <img
          src={backEnds ? backend : nobackend}
          alt="백엔드"
          onClick={() => onClickBigList(false, false, true)}
        />
      </ListChoose>
      <ListCheck>
        {frontEnds ? (
          <>
            <img
              src={frontAll ? all : noAll}
              alt="전체"
              onClick={() => onClickFE(true, false, false)}
            />
            <img
              src={reactView ? react : noreact}
              alt="리액트"
              onClick={() => onClickFE(false, true, false)}
            />
            <img
              src={vueView ? vue : novue}
              alt="뷰"
              onClick={() => onClickFE(false, false, true)}
            />
          </>
        ) : (
          ""
        )}
        {backEnds ? (
          <>
            <img
              src={backAll ? all : noAll}
              alt="전체"
              onClick={() => onClickBE(true, false, false)}
            />
            <img
              src={springView ? spring : nospring}
              alt="스프링"
              onClick={() => onClickBE(false, true, false)}
            />
            <img
              src={nodeView ? node : nonode}
              alt="선택"
              onClick={() => onClickBE(false, false, true)}
            />
          </>
        ) : (
          ""
        )}
      </ListCheck>
      {frontEnds || backEnds ? <Hr /> : ""}
      <>
        {/* 처음은 큰분류로 나누고 그이후는 소분류로 데이터 받아오게 만듬 */}
        {attitudes || frontEnds || backEnds === true
          ? (frontEnds && reactView) ||
            (frontEnds && vueView) ||
            (backEnds && springView) ||
            (backEnds && nodeView) === true
            ? SubMain.map((data, index) => (
                <ListBox key={index}>
                  <ListIn data={data} />
                </ListBox>
              ))
            : Main.map((data, index) => (
                <ListBox key={index}>
                  <ListIn data={data} />
                </ListBox>
              ))
          : ""}
      </>
    </div>
  );
};

export default List;

const ListChoose = styled.div`
  margin: 0 auto 5%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  img {
    width: 100px;
    height: 30px;
  }
`;

const ListCheck = styled.div`
  margin: 0 auto;
  width: 75%;
  display: flex;
  justify-content: space-around;
`;

const Hr = styled.hr`
  color: ${(props) => props.theme.color.lightGray};
`;
