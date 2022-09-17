import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TableWrapper, Tablee, Th, Tr, Td } from "../Table/styles";

import { Empty } from "../Tasks/styles";

import SingleRow from "./Tr";

import { search } from "../../feature/todo/";

import { filter } from "../../feature/todo/";

const Table = () => {
  let { todos, serachedText, filteredText } = useSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();

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

  return (
    <TableWrapper>
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
      {/* {serachedText && searchedTodos.length === 0 && <Empty>Not Found!</Empty>} */}
    </TableWrapper>
  );
};

export default Table;
