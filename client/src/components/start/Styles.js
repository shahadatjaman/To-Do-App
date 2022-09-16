import styled from "styled-components";

export const Wrrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img``;

export const H1 = styled.h1`
  margin: 1rem;
  color: #363333;
`;

export const Start = styled.div``;

export const Form = styled.form``;

export const Input = styled.input`
  padding: 1rem;
  width: 400px;
  border: none;
  background: #e5dada47;
  margin-top: 1rem;
`;

export const Button = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Submit = styled.button`
  background: #002bff;
  color: #fff;
  cursor: ${(props) => (props.disabled === "true" ? "auto" : "pointer")};
  padding: 1rem;
`;

export const Error = styled.p`
  color: red;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  width: 100%;
  padding: 7px 0;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 4px -9px 78px 11px #ddd;
  padding: 1rem;
`;

export const LoginBtn = styled.button`
  background-image: linear-gradient(
    to bottom,
    #051937,
    #0d305f,
    #134a8b,
    #1565b9,
    #00213e
  );
  margin-top: 1rem;
  color: #fff;
  padding: 8px 28px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
`;
