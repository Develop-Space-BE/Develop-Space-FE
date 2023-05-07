import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../redux/config/configStore";
import { User } from "../../redux/modules/myPageSet";

const Profile = () => {
  const user = useAppSelector(User);
  console.log(user);
  return (
    <div>
      <ProfileView>
        <img src={user.profileImg} alt="프로필사진" />
      </ProfileView>
    </div>
  );
};

export default Profile;

const ProfileView = styled.div`
  width: 100%;
  img {
    display: flex;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.theme.color.black};
    border-radius: 10px;
  }
`;
