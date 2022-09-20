import styled from "styled-components";

import { NavLink } from "react-router-dom";
export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  width: 80%;
`;

export const SideBar = styled.div`
  background-image: linear-gradient(
    to bottom,
    #051937,
    #0d305f,
    #134a8b,
    #1565b9,
    #00213e
  );
  color: #fff;
  height: 100vh;
  width: 350px;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.5s;
  position: relative;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  position: relative;
`;

export const Logo = styled.div`
  font-size: 30px;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50px;
  color: #000;
  cursor: pointer;
`;

export const Bars = styled.span`
  display: flex;
  font-size: 25px;
  margin-left: 50px;
  color: #051937;
  position: absolute;
  right: -32px;
  font-size: 47px;
  cursor: pointer;
`;

export const Link = styled(NavLink)`
  display: flex;
  color: #fff;
  padding: 10px 15px;
  gap: 15px;
  transition: all 0.5s;
  &:hover {
    background: lightskyblue;
    color: #000;
    transition: all 0.5s;
  }
`;

export const LinkText = styled.div`
  font-size: 20px;
`;

export const Icon = styled.div`
  font-size: 20px;
`;

export const Plus = styled.span`
  display: block;
  text-align: center;
  line-height: 2.5rem;
`;

export const LogoutWrapper = styled.div`
  font-size: 17px;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    color: red;
  }
`;
