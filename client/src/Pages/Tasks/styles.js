import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const TopSection = styled.div``;

export const Select = styled.select`
  border: 1px solid #ddd;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 6px 8px 66px 0px #dddddd69;
`;

export const Option = styled.option``;

export const TaskName = styled.h2`
  font-size: 26px;
  color: #000000de !important;
  text-align: center;
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const Down = styled.span`
  margin-top: 4px;
`;

export const ADD = styled.div`
  font-size: 30px;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  background-image: linear-gradient(
    to bottom,
    #051937,
    #0d305f,
    #134a8b,
    #1565b9,
    #00213e
  );

  margin-left: auto;
  a {
    display: inline-block;
    width: 100%;
    color: #fff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Plus = styled.span``;

export const TodoWrapper = styled.div``;

export const H3 = styled.h3`
  text-align: center;
  font-size: 2rem;
  color: #000000d9;
  margin-top: 7rem;
`;

export const FormWrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 1rem;
  width: 350px;
  margin: auto;
  background: #fff;
  padding: 1rem;
  box-shadow: 4px -9px 37px 11px #ddd;
`;

export const Input = styled.input`
  width: 100%;
  padding: 11px 18px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 1rem;
  &&:focus {
    border: 1px solid #ddd !important;
    outline: none;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 11px 18px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 1rem;
  &&:focus {
    border: 1px solid #ddd !important;
    outline: none;
  }
`;

export const Time = styled.div``;

export const Button = styled.button`
  background-image: linear-gradient(
    to bottom,
    #051937,
    #0d305f,
    #134a8b,
    #1565b9,
    #00213e
  );
  margin-top: 1rem;
  color: #fff;
  padding: 8px 28px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
`;

export const Empty = styled.div`
  box-shadow: 4px 10px 24px -15px #ddd;
  width: 100%;
  text-align: center;
  padding: 4rem;
`;

export const SerachWrapper = styled.div``;

export const SearchForm = styled.form``;

export const SearchInput = styled.input`
  border: 1px solid #ddd;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  width: 100%;
  box-shadow: 6px 8px 66px 0px #dddddd69;
`;
