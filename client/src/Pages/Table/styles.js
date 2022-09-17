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

export const Edit = styled.button`
  cursor: pointer;
`;

export const Delete = styled.button`
  cursor: pointer;
  svg {
    color: red;
    margin-left: 1rem;
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
