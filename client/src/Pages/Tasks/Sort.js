import { Option, Select } from "./styles";

const Sort = () => {
  return (
    <Select>
      <Option selected>Sort</Option>
      <Option value={"favourit"}>Favourit</Option>
      <Option value={"complete"}>Complete</Option>
      <Option value={"incomplete"}>Incomplete</Option>
    </Select>
  );
};

export default Sort;
