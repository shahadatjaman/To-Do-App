import { useState } from "react";

import { useDispatch } from "react-redux";

import { Option, Select } from "./styles";

import { filter } from "../../feature/todo";

const init = {
  complete: "complete",
  favourit: "favourite",
  incomplete: "incomplete",
};

const Sort = () => {
  const [value, setValue] = useState(init);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(filter(e.target.value));
  };

  return (
    <Select onChange={handleChange}>
      <Option selected disabled>
        Sort
      </Option>
      <Option value={value.complete}>Complete</Option>
      <Option value={value.incomplete}>Incomplete</Option>
    </Select>
  );
};

export default Sort;
