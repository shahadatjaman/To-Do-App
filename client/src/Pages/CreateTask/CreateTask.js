import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Form,
  FormWrapper,
  H3,
  Input,
  TodoWrapper,
} from ".././Tasks/styles";

import { addTask } from "../../feature/task/";

import { createNewTask } from "../../feature/task/";

import { useEffect, useState } from "react";

import { Error, Loading } from "./styles";

import { useNavigate } from "react-router";

const CreateTask = () => {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  let { isLoading, tasks } = useSelector((state) => state.task);

  const navigate = useNavigate();

  const dispactch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!value) {
      setError("Please Enter Task Name");
    } else if (value.trim() === "") {
      setError("Please Enter Task Name");
    } else {
      setError(null);
    }
    if (value) {
      dispactch(createNewTask({ name: value, navigate }));
    }
  };

  return (
    <TodoWrapper>
      <FormWrapper>
        <H3>Create New Task</H3>
        <Form onSubmit={submitHandler}>
          <Input
            onChange={(e) => setValue(e.target.value)}
            placeholder="Task Name"
          />
          {error && <Error>{error}</Error>}

          <Button type="submit">
            {!isLoading && "Create"}
            <Loading
              height="20"
              width="20"
              color="#fff"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={isLoading}
            />
          </Button>
        </Form>
      </FormWrapper>
    </TodoWrapper>
  );
};

export default CreateTask;
