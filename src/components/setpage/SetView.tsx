import React, { useState } from "react";
import styled from "styled-components";
import { OnOffModal } from "../../modals/\bOnOffModal";
import Modal from "../../modals/Modal";
import Hr from "../common(공통컴포넌트)/Hr";
import MiniHr from "../common(공통컴포넌트)/MiniHr";
import Profile from "../common(공통컴포넌트)/Profile";

const SetView = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <SetViewAll>
      {modalOpen && (
        <Modal OnModal={() => OnOffModal(modalOpen, setModalOpen)}>
          <div>모달 디자인 들어갈 부분</div>
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
      <Box>
        <div>이름</div>
        <span>뭘보노보노</span>
      </Box>
      <MiniHr />
      <Box>
        <div>이메일</div>
        <span>123@naver.com</span>
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
        <span>이름 자리</span>
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
