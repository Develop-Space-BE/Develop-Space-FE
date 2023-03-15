import React, { useCallback, useState } from "react";
import styled from "styled-components";
import {
  attitude,
  backend,
  frontend,
  noattitude,
  nobackend,
  nobookmark,
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
import ListBox from "../common(공통컴포넌트)/ListBox";

const List = () => {
  const [attitudes, setAttitudes] = useState<boolean>(true);
  const [frontEnds, setFrontEnds] = useState<boolean>(false);
  const [backEnds, setBackEnds] = useState<boolean>(false);
  const [reactView, setReactView] = useState<boolean>(true);
  const [vueView, setVueView] = useState<boolean>(false);
  const [springView, setSpringView] = useState<boolean>(true);
  const [nodeView, setNodeView] = useState<boolean>(false);

  const onClickBigList = (at: boolean, fe: boolean, be: boolean): void => {
    setAttitudes(at);
    setFrontEnds(fe);
    setBackEnds(be);
  };

  const onClickFE = (Re: boolean, Ve: boolean): void => {
    setReactView(Re);
    setVueView(Ve);
  };

  const onClickBE = (Sp: boolean, Nd: boolean): void => {
    setSpringView(Sp);
    setNodeView(Nd);
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
              src={reactView ? react : noreact}
              alt="선택"
              onClick={() => onClickFE(true, false)}
            />
            <img
              src={vueView ? vue : novue}
              alt="선택"
              onClick={() => onClickFE(false, true)}
            />
          </>
        ) : (
          ""
        )}
        {backEnds ? (
          <>
            <img
              src={springView ? spring : nospring}
              alt="선택"
              onClick={() => onClickBE(true, false)}
            />
            <img
              src={nodeView ? node : nonode}
              alt="선택"
              onClick={() => onClickBE(false, true)}
            />
          </>
        ) : (
          ""
        )}
      </ListCheck>
      {frontEnds || backEnds ? <Hr /> : ""}
      <ListBox>
        <MainList>
          <img src={nobookmark} alt="북마크" />
          <div>Q. 질문~~~~~~~</div>
        </MainList>
      </ListBox>
      <ListBox>
        <MainList>
          <img src={nobookmark} alt="북마크" />
          <div>Q. 질문~~~~~~~</div>
        </MainList>
      </ListBox>
      <ListBox>
        <MainList>
          <img src={nobookmark} alt="북마크" />
          <div>Q. 질문~~~~~~~</div>
        </MainList>
      </ListBox>
      <ListBox>
        <MainList>
          <img src={nobookmark} alt="북마크" />
          <div>Q. 질문~~~~~~~</div>
        </MainList>
      </ListBox>
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

const MainList = styled.div`
  img {
    margin-left: 88%;
    width: 20px;
  }
  div {
    margin: 0 10%;
  }
`;
