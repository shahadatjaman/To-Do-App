import { useSelector, useDispatch } from "react-redux";

import { TableWrapper, Tablee, Th, Tr, Td } from "../Table/styles";
import { Empty } from "../Tasks/styles";

const Table = () => {
  const { task } = useSelector((state) => state.task);

  return (
    <>
      <TableWrapper>
        <Tablee>
          <Tr>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Status</Th>
          </Tr>
          {/* {task &&
            task.todos?.map((item) => {
              return (
                <Tr style={{ marginTop: "1rem" }}>
                  <Td>Abu Huraira</Td>
                  <Td>01/24/2022</Td>
                  <Td>Complete</Td>
                </Tr>
              );
            })} */}
        </Tablee>
        {/* {task && task.todos.length === 0 && <Empty>Your Task is Empty!</Empty>} */}
      </TableWrapper>
    </>
  );
};

export default Table;
