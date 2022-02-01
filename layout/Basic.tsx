import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin:2rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

h1 {
    color: black;
}

button{
  background-color: #e69138;
  width:6rem;
  height: 2rem;
  border-radius: 0.4rem;
  border:none;
  color: black;
}
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
  background: #e69138;
  border-radius: 0.2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 2rem;
`;

export const DropDownListContainer = styled.div`
  position: relative;
  margin-right: 1rem;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  width: 6rem;
  background: white;
  border: 2px solid #e69138;
  box-sizing: border-box;
  color: #e69138;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
`;

export const ListItem = styled.h1`
  margin: 0.2rem;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  cursor: pointer;
`;

export const DropDownHeader = styled.button`
  border-radius: 3rem;
  width: 3rem;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  cursor: pointer;
`;

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropDownHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const Quote = styled.button`
  margin: 1rem;
`;

export const UserIcon = styled(BiUser)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const PasswordIcon = styled(RiLockPasswordLine)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ProfileIcon = styled(CgProfile)`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 1rem;
`;

export const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
