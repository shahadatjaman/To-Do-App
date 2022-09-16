import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaTh, FaThList } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import {
  Container,
  SideBar,
  TopSection,
  Logo,
  Bars,
  Link,
  Icon,
  LinkText,
  Main,
  Plus,
} from "./styles";

import { getTasks } from "../../feature/task";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { tasks } = useSelector((state) => state.task);
  const { user } = useSelector((state) => state.auth);

  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getTasks());
    }
  }, [user, dispatch]);

  return (
    <Container>
      <SideBar style={{ width: isOpen ? "300px" : "50px" }}>
        <TopSection>
          <Link to={"/createtask"}>
            <Logo style={{ display: isOpen ? "block" : "none" }}>
              <Plus>+</Plus>
            </Logo>
          </Link>
          <Bars style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            <AiOutlineCaretRight onClick={toggle} />
          </Bars>
        </TopSection>
        <Link to={`/dashboard`} activeclassName="active">
          <Icon>
            <FaTh />
          </Icon>
          <LinkText style={{ display: isOpen ? "block" : "none" }}>
            Dashboard
          </LinkText>
        </Link>
        {tasks?.map((item, index) => (
          <Link
            to={`/task_name/${item._id}`}
            key={index}
            activeclassName="active"
          >
            <Icon>
              <FaThList />
            </Icon>
            <LinkText style={{ display: isOpen ? "block" : "none" }}>
              {item.name}
            </LinkText>
          </Link>
        ))}
      </SideBar>
      <Main>
        {children}
        <Outlet />
      </Main>
    </Container>
  );
};

export default Sidebar;
