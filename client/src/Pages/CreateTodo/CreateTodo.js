import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  Form,
  FormWrapper,
  H3,
  Input,
  TextArea,
  TodoWrapper,
  Select,
  Option,
} from ".././Tasks/styles";

import { Date } from "./styles";

import { useState } from "react";

import { createNewTodo } from "../../feature/todo/";

const init = {
  title: "",
  date: "",
  taskId: "",
  desc: "",
};

const AddTodo = () => {
  const [values, setValue] = useState({ ...init });
  const { tasks } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createNewTodo({ values, navigate }));
  };

  console.log(values);

  const { title, date, desc } = values;
  return (
    <TodoWrapper>
      <FormWrapper>
        <H3>Create New TODO</H3>
        <Form onSubmit={submitHandler}>
          <Input
            onChange={changeHandler}
            name="title"
            placeholder="Todo Name"
            value={title}
            required
          />
          <Date>
            <Input
              style={{ marginRight: "8px" }}
              type="date"
              onChange={changeHandler}
              name="date"
              value={date}
              required
            />
            <Select
              defaultValue=""
              name="taskId"
              required
              onChange={changeHandler}
            >
              <Option disabled selected>
                Select Task
              </Option>
              {tasks?.map((item, index) => {
                return (
                  <Option value={item._id} key={index}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Date>
          <TextArea
            name="desc"
            value={desc}
            onChange={changeHandler}
            placeholder="About Task"
            required
          />
          <Button type="submit">Create</Button>
        </Form>
      </FormWrapper>
    </TodoWrapper>
  );
};

export default AddTodo;
