import BasicLayout, {
  Content,
  DropDownContainer,
  DropDownHeader,
  DropDownHeaderContainer,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Navigation,
  ProfileIcon,
  Quote,
} from "../layout/Basic";
import { fetchAPI } from "./api/index";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import useUserStore from "../stores/userStore";
import axios from "axios";
import useAuthStore from "../stores/authStore";
import { useRouter } from "next/router";

const Home = ({ delicacy }: { delicacy: any }) => {
  const [openAccount, setOpenAccount] = useState(false);
  const user = useUserStore((state) => state.user);
  const [accountName, setAccountName] = useState("");
  const router = useRouter();
  const authDetails = useAuthStore((state) => state.authDetails);
  useEffect(() => {
    if (!user) return;
    setAccountName(user?.firstName.slice(0, 1) + user?.lastName.slice(0, 1));
  }, [user]);

  const logout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/logout`,
        {
          refresh_token: authDetails?.refresh_token,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: authDetails?.access_token as string,
          },
        }
      );
      router.push("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <BasicLayout>
      <Navigation>
        <Quote>New Quote</Quote>
        <DropDownContainer>
          <DropDownHeaderContainer onClick={() => setOpenAccount(!openAccount)}>
            <ProfileIcon />
            <DropDownHeader>{accountName}</DropDownHeader>
          </DropDownHeaderContainer>
          {openAccount && (
            <DropDownListContainer>
              <DropDownList>
                <Link href="/profile">
                  <a>
                    <ListItem>Profile</ListItem>
                  </a>
                </Link>
                <ListItem onClick={logout}>Sign out</ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Navigation>
      <Content>
        <Image
          src={
            process.env.NEXT_PUBLIC_STRAPI_URL +
            delicacy.data.attributes.Image.data[0].attributes.url
          }
          alt="Tasty Misal pav image"
          width={854}
          height={563}
        />
        <div>
          <h1>{delicacy.data.attributes.Title}</h1>
          <p>{delicacy.data.attributes.Description}</p>
        </div>
      </Content>
    </BasicLayout>
  );
};

export const getServerSideProps = async () => {
  const delicacy = await fetchAPI("/delicacy?populate=*");
  return {
    props: {
      delicacy,
    },
  };
};

export default Home;
