import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import moment from "moment";

import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";

import { Tr, Td, Edit, Delete, Complete, InComplete } from "./styles";

import { completeTodo } from "../../feature/todo";

const SingleRow = ({ todo }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (todo.isComplete) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [todo]);

  const dispatch = useDispatch();

  const chageHandler = (id) => {
    if (isComplete) {
      setIsComplete(false);
    } else {
      setIsComplete(true);
    }
    dispatch(completeTodo({ todoId: id }));
  };

  return (
    <Tr style={{ marginTop: "1rem" }}>
      <Td>
        {isComplete ? (
          <Complete
            onClick={() => chageHandler(todo._id)}
            style={{ color: "green", marginRight: "8px" }}
          />
        ) : (
          <InComplete
            onClick={() => chageHandler(todo._id)}
            style={{ color: "green", marginRight: "8px" }}
          />
        )}
        {todo.title}
      </Td>
      <Td>{moment(todo.createdAt).fromNow(true)}</Td>
      <Td>{todo.date}</Td>
      <Td>
        <Edit>
          <BsFillPenFill />
        </Edit>

        <Delete>
          <BsFillTrashFill />
        </Delete>
      </Td>
    </Tr>
  );
};

export default SingleRow;
