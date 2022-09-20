import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Wraaper = styled(NavLink)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Create = styled.div`
  font-size: 53px;
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 50px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 31px 11px #dddd;
`;

export const H2 = styled.h2`
  margin-bottom: 2rem;
`;
