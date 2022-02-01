import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Fields,
  Input,
  LoginCard,
  MainFrame,
  SubmitButton,
} from "../layout/login";
import useAuthStore from "../stores/authStore";
import useUserStore from "../stores/userStore";
import { PasswordIcon, UserIcon } from "../layout/Basic";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const setAuthDetails = useAuthStore((state) => state.setAuthDetails);
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const auth = useAuthStore((state) => state.authDetails);

  const submitHandler = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/login`,
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const data = response.data;
      setAuthDetails(data.authDetails);
      setUser(data.userDetails);
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MainFrame>
      <h1>Login</h1>
      <p>Enter your credentials to login to your account</p>
      <LoginCard>
        <Fields>
          <UserIcon />
          <label>Username</label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Fields>
        <Fields>
          <PasswordIcon />
          <label>Password</label>

          <Input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Fields>
        <SubmitButton onClick={submitHandler}>Login</SubmitButton>
      </LoginCard>
    </MainFrame>
  );
};

export default Login;
