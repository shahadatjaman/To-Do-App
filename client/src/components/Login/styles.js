import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Buttons = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

export const Title = styled.h1``;

export const Button = styled.button`
  border: none;
  background: #fff;
  padding: 1rem;
  width: 100%;
  border: 1px solid green;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const Img = styled.img`
  width: 30px;
  margin-right: 1rem;
`;
