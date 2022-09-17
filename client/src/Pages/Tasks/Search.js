import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { SerachWrapper, SearchInput, SearchForm, Submit } from "./styles";

import { search } from "../../feature/todo";
import { useEffect, useState } from "react";

const SearchTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.value.trim() === "") {
      dispatch(search("all"));
    }
    if (e.target.value.trim() !== "") {
      dispatch(search(e.target.value));
      setValue(e.target.value);
    }
    setValue(e.target.value);
  };

  const id = useParams();
  useEffect(() => {
    setValue("");
    dispatch(search("all"));
  }, [id, dispatch]);

  return (
    <SerachWrapper>
      <SearchForm>
        <SearchInput
          onChange={changeHandler}
          value={value}
          type={"search"}
          placeholder="Find Your Todo"
        />
        <Submit></Submit>
      </SearchForm>
    </SerachWrapper>
  );
};

export default SearchTodo;
