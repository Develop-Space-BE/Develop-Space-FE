import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ModalType {
  OnModal: () => void;
}

const Modal = ({ OnModal, children }: PropsWithChildren<ModalType>) => {
  return (
    <ModalContainer>
      <ChildrenBox>{children}</ChildrenBox>
      <BackGroundClick
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (OnModal) {
            OnModal();
          }
        }}
      ></BackGroundClick>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
`;

const ChildrenBox = styled.dialog`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 10000;
`;

const BackGroundClick = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
`;
