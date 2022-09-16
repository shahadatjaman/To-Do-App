import { useSelector, useDispatch } from "react-redux";

import { NavLink, useParams } from "react-router-dom";

import { ADD, Down, Plus, TaskName, TopSection, Wrapper } from "./styles";

import { Container, Row, Col } from "../../styles/Gride";

import Sort from "./Sort";

import { singleTask } from "../../feature/task/";

import { AiFillCaretDown } from "react-icons/ai";
import Table from "../Table/Table";
import { useEffect } from "react";

const Task = () => {
  const { id } = useParams();
  const { task } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleTask(id));
  }, [dispatch, id]);
  return (
    <Wrapper>
      <TopSection>
        <Container>
          <Row>
            <Col w="33">
              <Sort />
            </Col>
            <Col w="33">
              <TaskName>
                {task && task.name}
                <Down>
                  <AiFillCaretDown />
                </Down>
              </TaskName>
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
