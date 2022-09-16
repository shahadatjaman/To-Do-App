import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  Wrrapper,
  Image,
  Start,
  Input,
  Button,
  Submit,
  H1,
  Error,
} from "./Styles";

import { checkUser, signUp } from "../../feature/auth/register";

import { Toaster } from "react-hot-toast";

const INIT = {
  email: null,
  password: null,
};

const Email = () => {
  const [error, setError] = useState(null);

  const [values, setValues] = useState(INIT);

  let { email, isExist, isLoading, isLogged } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const chageHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (!values.password && values.email) {
      dispatch(checkUser(values));
    }

    if (values.password && values.password.length < 8) {
      setError("Enter a Strong Password!");
    } else {
      setError(null);
    }

    if (values.email && values.password && values.password.length > 8) {
      dispatch(signUp({ ...values, navigate }));
    }
  };

  return (
    <Wrrapper>
      <Toaster
        toastOptions={{
          style: {
            color: "red",
          },
        }}
      />
      <Image
        src="https://res.cloudinary.com/dza2t1htw/image/upload/v1662918816/68747470733a2f2f692e696d6775722e636f6d2f4f764d5a4273392e6a7067_dr8eip.jpg"
        alt=""
      />
      <H1>Your Daily Planner.</H1>
      <Start>
        <form onSubmit={submitHandler}>
          <Input
            name="email"
            type="email"
            required
            placeholder="Enter Email"
            onChange={chageHandler}
          />
          {isExist && <Error>{isExist}</Error>}
          <br />

          {email && (
            <>
              <br />

              <Input
                name="password"
                type="password"
                required
                placeholder="New Password"
                onChange={chageHandler}
              />

              {error && <Error>{error}</Error>}
            </>
          )}

          {isLoading ? (
            <Button>
              <Submit disabled="true" type="submit">
                Get Start
              </Submit>
            </Button>
          ) : (
            <Button>
              <Submit type="submit">Get Start</Submit>
            </Button>
          )}
        </form>
      </Start>
    </Wrrapper>
  );
};

export default Email;
