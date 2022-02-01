import React from "react";
import useUserStore from "../stores/userStore";
import Image from "next/image";
import userImage from "../assets/user-image-two.jpg";
import {
  Back,
  Content,
  Header,
  KeyValue,
  MainCard,
  UserInfo,
} from "../layout/profile";
import Link from "next/link";

const Profile = () => {
  const user = useUserStore((state) => state.user);
  if (!user) return null;

  return (
    <MainCard>
      <Header>
        <h1>Profile</h1>
        <Link href="/">
          <a>
            <Back />
            Back
          </a>
        </Link>
      </Header>
      <Content>
        <Image
          src={userImage}
          alt="temporary image placeholder"
          height={200}
          width={300}
        />
        <UserInfo>
          <KeyValue>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
          </KeyValue>
          <h2>{user.username}</h2>
          <KeyValue>
            <p>Email:</p>
            <p>{user.email}</p>
          </KeyValue>
        </UserInfo>
      </Content>
    </MainCard>
  );
};

export default Profile;
