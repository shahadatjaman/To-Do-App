import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableWrapper, Tablee, Th, Tr, Td, Form } from "../Table/styles";

import { Empty } from "../Tasks/styles";

import SingleRow from "./Tr";

import { search } from "../../feature/todo/";

import { addTodos, updateTodo } from "../../feature/todo/";

const Table = () => {
  let { todos, serachedText, filteredText, deletedTodoId, updatedToodText } =
    useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  let searchedTodos = [];

  if (serachedText === "all") {
    searchedTodos = todos;
  }

  useEffect(() => {
    dispatch(search("all"));
  }, [dispatch]);

  if (serachedText !== "all") {
    searchedTodos = todos?.filter((todo) =>
      todo.title.toLowerCase().includes(serachedText)
    );
  }

  // Filter all complete todos
  if (filteredText === "complete") {
    searchedTodos = todos?.filter((todo) => todo.isComplete);
  }

  // Filter all incomplete todos
  if (filteredText === "incomplete") {
    searchedTodos = todos?.filter((todo) => !todo.isComplete);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    searchedTodos = todos?.filter((todo) => todo._id !== deletedTodoId);
    dispatch(addTodos(searchedTodos));
  }, [deletedTodoId]);

  if (!todos) {
    return <Empty>Not Found!</Empty>;
  }

  if (searchedTodos.length === 0) {
    return <Empty>No todos found!</Empty>;
  }

  const updateHandler = (e) => {
    e.preventDefault();
    let todo = {
      todoId: updatedToodText._id,
      title: updatedToodText.title,
      date: updatedToodText.date,
    };
    dispatch(updateTodo({ todo, navigate }));
  };

  return (
    <TableWrapper>
      <Form onSubmit={updateHandler}>
        <Tablee>
          <Tr>
            <Th>Name</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th>Action</Th>
          </Tr>

          {searchedTodos?.map((item) => (
            <SingleRow todo={item} />
          ))}
        </Tablee>
        {todos && todos?.length === 0 && <Empty>Not Found!</Empty>}
      </Form>
    </TableWrapper>
  );
};

export default Table;
