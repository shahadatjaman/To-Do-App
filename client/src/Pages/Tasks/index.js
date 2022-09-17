import { useSelector, useDispatch } from "react-redux";

import { NavLink, useParams } from "react-router-dom";

import { ADD, Down, Plus, TaskName, TopSection, Wrapper } from "./styles";

import { Container, Row, Col } from "../../styles/Gride";

import Sort from "./Sort";

import { singleTask } from "../../feature/task/";

import { AiFillCaretDown } from "react-icons/ai";

import Table from "../Table/Table";

import { useEffect } from "react";

import { filter, getTodos } from "../../feature/todo/";

import SearchTodo from "./Search";

const Task = () => {
  const { id } = useParams();
  const { task } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(singleTask(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getTodos({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(filter("all"));
  });

  return (
    <Wrapper>
      <TopSection>
        <Container>
          <Row>
            <Col w="100">
              <TaskName>
                {task && task.name}
                <Down>
                  <AiFillCaretDown />
                </Down>
              </TaskName>
            </Col>
          </Row>
          <Row>
            <Col w="33">
              <Sort />
            </Col>
            <Col w="33">
              <SearchTodo />
            </Col>
            <Col w="33">
              <ADD>
                <NavLink to={`/createtodo`}>
                  <Plus>+</Plus>
                </NavLink>
              </ADD>
            </Col>
          </Row>
        </Container>
      </TopSection>
      <Table />
    </Wrapper>
  );
};

export default Task;
