import styled from "styled-components";

const Table = styled.div`
  display: table;
  background-color: #6e6e6e;
`;

const Row = styled.div`
  display: table-row;
`;

const Column = styled.div`
  display: table-cell;
`;

const StocksResults = ({ stocks }) => (
  <Table>
    {stocks?.map((stock) => (
      <Row key={stock.symbolMonth}>
        <Column>{stock.company}</Column>
        <Column>{stock.symbolMonth}</Column>
        <Column>{stock.adjustedCost}</Column>
        <Column>{stock.cost}</Column>
      </Row>
    ))}
  </Table>
);

export default StocksResults;
