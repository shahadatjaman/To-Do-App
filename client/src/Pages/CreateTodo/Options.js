import { useState } from "react";
import { useSelector } from "react-redux";

import { Option, Select } from "./styles";

const Options = () => {
  const [value, setValue] = useState(null);

  const { tasks } = useSelector((state) => state.task);

  return (
    <Select onChange={(e) => setValue(e.target.value)}>
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
  );
};

export default Options;
