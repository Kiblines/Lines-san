import styled from "styled-components";
import OrderStatusBadge from "./OrderStatusBadge";
import { AccordionItem, AccordionHeader, AccordionContent } from "./Accordion";
import { Content } from "@radix-ui/react-accordion";

import chevron from "../icons/chevron.svg";

const Item = styled.label`
  padding: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  color: #052e50;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;
const ItemTitle = styled(Item)`
  font-weight: bold;
  text-overflow: hidden;
  font-size: 12px;
`;
const ItemData = styled(Item)`
  font-size: 12px;
  text-overflow: hidden;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 90px;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;
const PayerContainer = styled.div`
  display: grid;
  border-radius: 4px;
  background-color: #eff4f7;
  justify-items: start;
  font-size: 12px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0px;
`;
const InstructionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 4px;
  background-color: #eff4f7;
  font-size: 12px;
`;

const Icon = styled.img`
  [data-state="open"] & {
    transform: rotate(180deg);
  }
`;

const OrdersTableItem = ({ order, value }) => {
  return (
    <AccordionItem value={`item-${value}`} className={`item-${value}`}>
      <AccordionHeader>
        <ItemContainer>
          <Item>{order.id}</Item>
          <Item>{order.payer.iban}</Item>
          <Item>{order.start_date}</Item>
          <Item>
            {order.instructions && order.instructions[0]
              ? order.instructions[0].amount
              : ""}
          </Item>
          <OrderStatusBadge>{order.order_status}</OrderStatusBadge>
          <Icon src={chevron} />
        </ItemContainer>
      </AccordionHeader>
      <AccordionContent>
        <PayerContainer>
          <ItemTitle> Payer BIC</ItemTitle>
          <ItemTitle>Payer Account </ItemTitle>
          <ItemTitle> Payer Country </ItemTitle>
          <ItemTitle>Payer Email </ItemTitle>
          <ItemData>{order.payer.schema}</ItemData>
          <ItemData>{order.payer.iban}</ItemData>
          <ItemData>{order.payer.country}</ItemData>
          <ItemData>{order.email}</ItemData>
        </PayerContainer>
        <InstructionContainer>
          <ItemTitle>Beneficiary Name </ItemTitle>
          <ItemTitle>Account </ItemTitle>
          <ItemTitle>Country </ItemTitle>
          <ItemTitle>Creation Date</ItemTitle>
          <ItemTitle>Execution Date </ItemTitle>
          <ItemTitle>Instructed Amout </ItemTitle>
          <ItemTitle>Status </ItemTitle>

          <ItemData>
            {order.instructions && order.instructions[0]
              ? order.instructions[0].beneficiary.name
              : ""}
          </ItemData>
          <ItemData>{order.creation_statut}</ItemData>
          <ItemData>{order.creation_date}</ItemData>
          <ItemData>{order.creation_date}</ItemData>
          <ItemData>
            {order.instructions[0].payments[0].execution_date}
          </ItemData>
          <ItemData>
            {order.instructions && order.instructions[0]
              ? order.instructions[0].amount
              : ""}
          </ItemData>
          <ItemData>{order.order_status}</ItemData>
        </InstructionContainer>
      </AccordionContent>
    </AccordionItem>
  );
};

export default OrdersTableItem;
