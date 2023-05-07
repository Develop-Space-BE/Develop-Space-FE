import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { OnOffModal } from "../../modals/\bOnOffModal";
import Modal from "../../modals/Modal";
import { useAppDispatch } from "../../redux/config/configStore";
import {
  User,
  __getUser,
  __putChangeNickname,
} from "../../redux/modules/myPageSet";
import Hr from "../common(공통컴포넌트)/Hr";
import MiniHr from "../common(공통컴포넌트)/MiniHr";
import Profile from "../common(공통컴포넌트)/Profile";

const SetView = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(User);
  console.log(user);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");

  useEffect(() => {
    dispatch(__getUser());
  }, [dispatch]);

  const changeNickname = () => {
    dispatch(__putChangeNickname(nickname));
    OnOffModal(modalOpen, setModalOpen);
  };
  return (
    <SetViewAll>
      {modalOpen && (
        <Modal OnModal={() => OnOffModal(modalOpen, setModalOpen)}>
          <ModalDiv>
            <h2>닉네임 변경</h2>
            <input onChange={(e) => setNickname(e.target.value)} />
            <div onClick={changeNickname}>변경</div>
          </ModalDiv>
        </Modal>
      )}
      <MyPicture>
        <Profile />
      </MyPicture>
      <Hr />
      <Box>
        <h2>정보</h2>
      </Box>
      <MiniHr />
      {/* <Box>
        <div>이름</div>
        <span>{user.nickname}</span>
      </Box> */}
      <MiniHr />
      <Box>
        <div>이메일</div>
        <span>{user.email}</span>
      </Box>
      <MiniHr />
      <Box>
        <div>
          <div>닉네임</div>
          <button
            onClick={() => OnOffModal(modalOpen, setModalOpen)}
            style={{ margin: "5px 0 0 5px" }}
          >
            변경하기
          </button>
        </div>
        <span>{user.nickname}</span>
      </Box>
      <Hr />
      <Box>
        <div>문의하기</div>
      </Box>
      <MiniHr />
      <Box>
        <div>우주미아</div>
        <button>탈퇴하기</button>
      </Box>
      <MiniHr />
    </SetViewAll>
  );
};

export default SetView;

const SetViewAll = styled.div`
  width: 100%;
`;

const MyPicture = styled.div`
  width: 100%;
  margin: 10% auto;
`;

const Box = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  h2,
  div {
    display: flex;
    align-items: center;
    height: 50px;
  }
  h2 {
    font-size: 20px;
  }
  button,
  span {
    display: flex;
    align-items: center;
    border: ${(props) => props.theme.color.transparent};
    background-color: ${(props) => props.theme.color.transparent};
    color: ${(props) => props.theme.color.fontColor};
  }
`;

const ModalDiv = styled.div`
  width: 90%;
  height: 90%;
  padding: 10%;
  margin: auto;
  h2 {
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.color.Gray};
    font-size: 15px;
  }
  div {
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.black};
    color: ${(props) => props.theme.color.white};
  }
`;
