import styled from "styled-components";

export const MainFrame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginCard = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  height: 20rem;
  justify-content: center;
  border: 0.2rem solid #e69138;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  background-color: #e69138;
  width: 6rem;
  height: 2rem;
  border-radius: 0.4rem;
  border: none;
  color: black;
  margin: 2rem;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 2rem;
`;

export const Input = styled.input`
  height: 2rem;
  border: #e69138 solid 0.1rem;
  border-radius: 0%.5rem;
`;
