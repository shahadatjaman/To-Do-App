import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { H1, Input, LoginBtn, LoginForm, LoginWrapper, Error } from "./Styles";

import { useState } from "react";

import { signIn } from ".././../feature/auth/register";

const CONTACT_FORM_INIT_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });

  const { error, isLoading } = useSelector((state) => state.auth);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn({ ...values, navigate }));
  };
  const { email, password } = values;

  return (
    <LoginWrapper>
      <LoginForm onSubmit={submitHandler}>
        <H1>Login into Your Account.</H1>
        <Input
          name="email"
          required
          type={`email`}
          value={email}
          onChange={changeHandler}
          placeholder="Email"
        />
        <Input
          name="password"
          required
          type={`password`}
          value={password}
          onChange={changeHandler}
          placeholder="Password"
        />
        <Error>{error && error}</Error>

        {isLoading ? (
          <LoginBtn disabled type="submit">
            Loading...
          </LoginBtn>
        ) : (
          <LoginBtn type="submit">Login</LoginBtn>
        )}
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
