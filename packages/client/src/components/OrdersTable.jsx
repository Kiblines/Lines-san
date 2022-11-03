import styled from "styled-components";
import { AccordionRoot } from "./Accordion";
import OrdersTableItem from "./OrdersTableItem";

const Table = styled.div`
  background-color: #fff;
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  box-shadow: 0 0 46px 0 rgba(0, 16, 39, 0.1);
`;

const HeadRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr) 30px;
  background-color: #fafafb;
  justify-items: start;
`;

const TableItem = styled.div`
  text-align: center;
  padding: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: "Nunito Sans", sans-serif;
  color: #052e50;
  font-weight: bold;
  font-size: 16px;
`;

const OrdersTable = ({ orders }) => {
  return (
    <Table>
      <HeadRow>
        <TableItem style={{ gridColumn: "1 / span 2" }}>ID</TableItem>
        <TableItem>User Reference</TableItem>
        <TableItem>Payer name</TableItem>
        <TableItem>Amount</TableItem>
        <TableItem>Status</TableItem>
      </HeadRow>
      <AccordionRoot type="single" collapsible>
        {orders.map((order, index) => {
          return (
            <OrdersTableItem
              order={order}
              key={index}
              value={`item-${index}`}
            />
          );
        })}
      </AccordionRoot>
    </Table>
  );
};

export default OrdersTable;
