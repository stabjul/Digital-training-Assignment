import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const MainCard = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e69138;
  margin-top: 2rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

export const KeyValue = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Back = styled(BiArrowBack)`
  margin-top: 0.5rem;
  margin-right: 1rem;
`;
