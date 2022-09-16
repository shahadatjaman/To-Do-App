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

const init = {
  name: "",
  birthday: "",
};

const AddTodo = () => {
  const [values, setValue] = useState();
  const { tasks } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    console.log(e.target.value);
    setValue({ [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.prevenDafault();
  };

  return (
    <TodoWrapper>
      <FormWrapper>
        <H3>Create New TODO</H3>
        <Form onSubmit={submitHandler}>
          <Input name="name" placeholder="Todo Name" />
          <Date>
            <Input
              style={{ marginRight: "8px" }}
              type="date"
              onChange={changeHandler}
              name="birthday"
            />
            <Select onChange={changeHandler}>
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
            name="text"
            onChange={changeHandler}
            placeholder="About Task"
          />
          <Button type="submit">Create</Button>
        </Form>
      </FormWrapper>
    </TodoWrapper>
  );
};

export default AddTodo;
