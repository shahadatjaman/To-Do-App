import { useDispatch } from "react-redux";

import { SerachWrapper, SearchInput } from "./styles";

import { search } from "../../feature/todo";

const SearchTodo = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.value.trim() === "") {
      dispatch(search("all"));
    }
    if (e.target.value.trim() !== "") {
      dispatch(search(e.target.value));
    }
  };

  return (
    <SerachWrapper>
      <SearchInput
        // value={value}
        onChange={changeHandler}
        type={"search"}
        placeholder="Find Your Todo"
      />
    </SerachWrapper>
  );
};

export default SearchTodo;
