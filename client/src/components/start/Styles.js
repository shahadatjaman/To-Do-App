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
`;
