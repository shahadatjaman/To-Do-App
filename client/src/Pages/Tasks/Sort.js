import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

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
    dispatch(filter(e.target.value));
  };

  return (
    <Select onChange={handleChange}>
      <Option selected disabled>
        Sort
      </Option>
      <Option value={value.favourit}>Favourit</Option>
      <Option value={value.complete}>Complete</Option>
      <Option value={value.incomplete}>Incomplete</Option>
    </Select>
  );
};

export default Sort;
