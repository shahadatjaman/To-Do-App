import styled from "styled-components";

import { BsFillCheckCircleFill, BsCircle } from "react-icons/bs";

export const TableWrapper = styled.div`
  margin-top: 2rem;
`;

export const Tablee = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const Tr = styled.tr``;
export const Th = styled.th`
  border: 1px solid #dddddd54;
  text-align: left;
  padding: 16px;
`;

export const Td = styled.td`
  border: 1px solid #dddddd54;
  text-align: left;
  padding: 16px;
`;

export const Edit = styled.span`
  cursor: pointer;
  margin-left: 1rem;
`;

export const Delete = styled.span`
  cursor: pointer;
  svg {
    color: red;
    margin-left: 2rem;
  }
`;

export const Complete = styled(BsFillCheckCircleFill)`
  color: green;
  margin-right: 8px;
  cursor: pointer;
`;

export const InComplete = styled(BsCircle)`
  color: green;
  margin-right: 8px;
  cursor: pointer;
`;

export const Form = styled.form``;

export const Input = styled.input`
  padding: 11px 18px;
  border: 1px solid #ddd;
  background: #fff;
`;

export const Cancle = styled.span`
  color: red;
  padding: 8px 28px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 1px -1px 8px 7px #dddddd3b;
  margin-left: 1rem;
`;

export const Submit = styled.button`
  color: #000;
  padding: 8px 28px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 1px -1px 8px 7px #dddddd3b;
`;

export const Disable = styled.button`
  color: #7f8d7fad;
  padding: 8px 28px;
  font-size: 14px;
  border-radius: 6px;
  box-shadow: 1px -1px 8px 7px #dddddd3b;
`;

export const CompletedText = styled.div`
  display: inline-block;
`;
