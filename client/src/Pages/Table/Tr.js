import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import moment from "moment";

import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";

import {
  Tr,
  Td,
  Edit,
  Delete,
  Complete,
  InComplete,
  Input,
  Save,
  Cancle,
  Submit,
  Disable,
  CompletedText,
} from "./styles";

import { completeTodo } from "../../feature/todo";

import { deleteTodo, deletedTodo, updatedTodo } from "../../feature/todo";
import { useParams } from "react-router-dom";

const SingleRow = ({ todo }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [updatedAble, setUpdatedAble] = useState(false);
  const [todoo, setTodod] = useState(todo);
  // Update inute values
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (todo.isComplete) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [todo]);

  const dispatch = useDispatch();

  // Complete Todo
  const completeTdo = (id) => {
    if (isComplete) {
      setIsComplete(false);
    } else {
      setIsComplete(true);
    }
    dispatch(completeTodo({ todoId: id }));
  };

  // Delete a Todo
  const deleteATodo = (id) => {
    dispatch(deleteTodo(id));
    dispatch(deletedTodo(id));
  };

  // Update Toggler
  const updateHandler = () => {
    setValues({ ...todo });
    if (updatedAble) {
      setUpdatedAble(false);
    } else {
      setUpdatedAble(true);
    }
    dispatch(updatedTodo(values));
  };

  // Update Cancle
  const cancleUpdate = () => {
    setUpdatedAble(false);
  };

  // Task ID
  const id = useParams();

  useEffect(() => {
    setUpdatedAble(false);
    setValues([]);
  }, [id, todo]);

  // Destructured
  const { title } = values;

  useEffect(() => {
    dispatch(updatedTodo(values));
  }, [dispatch, values]);

  useEffect(() => {
    if (values.title) {
      setTodod({
        ...todoo,
        title: values.title,
      });
    }
  }, [values, todoo]);

  return (
    <>
      <Tr style={{ marginTop: "1rem" }}>
        <>
          <Td>
            {/* Colplete Tdoo */}
            {isComplete ? (
              <Complete
                onClick={() => completeTdo(todo._id)}
                style={{ color: "green", marginRight: "8px" }}
              />
            ) : (
              <InComplete
                onClick={() => completeTdo(todo._id)}
                style={{ color: "green", marginRight: "8px" }}
              />
            )}

            {/* Update Tdo Title */}
            {!updatedAble ? (
              <CompletedText
                style={{ textDecoration: isComplete ? "line-through" : "auto" }}
              >
                {todo.title}
              </CompletedText>
            ) : (
              <Input
                type={`text`}
                name="title"
                autoFocus
                onChange={(e) =>
                  setValues({ ...values, title: e.target.value })
                }
                value={title}
              />
            )}
          </Td>

          {/* Todo Created Time */}
          <Td>{moment(todo.createdAt).fromNow(true)}</Td>
          {/* Upate Todo Date */}
          <Td>
            {!updatedAble ? (
              todo.date
            ) : (
              <Input
                type={`date`}
                name="date"
                value={values.date}
                onChange={(e) => setValues({ ...values, date: e.target.value })}
              />
            )}
          </Td>
          <Td>
            {/* Edit And Delete Uparation */}
            {!updatedAble ? (
              <>
                <Edit onClick={updateHandler}>
                  <BsFillPenFill />
                </Edit>
                <Delete onClick={() => deleteATodo(todo._id)}>
                  <BsFillTrashFill />
                </Delete>{" "}
              </>
            ) : (
              <>
                {/* Save or Cancle Todo after/befor Updated */}
                {values.title !== todo.title ? (
                  <Submit type="submit">Save</Submit>
                ) : (
                  <Disable disabled>Save</Disable>
                )}
                <Cancle onClick={cancleUpdate}>Cancle</Cancle>
              </>
            )}
          </Td>
        </>
      </Tr>
    </>
  );
};

export default SingleRow;
