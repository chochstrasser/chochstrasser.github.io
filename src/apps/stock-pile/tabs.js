import styled from 'styled-components';

const Table = styled.div`
  display: table;
  background-color: #6e6e6e;
  width: 100%;
`;

const Row = styled.div`
  display: table-row;
`;

const Column = styled.div`
  display: table-cell;
`;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => props.active && '#cccccc'};
  padding: 8px 16px;

  :hover {
    background-color: '#f1f1f1';
  }
`;

const items = ['Push', 'pull'];

const Tabs = ({ setTab, currentTab }) => {
  return (
    <Table>
      <Row>
        {items.map((item) => (
          <Column>
            <Button onClick={() => setTab(item.toLowerCase())} active={currentTab === item.toLowerCase()}>
              {item}
            </Button>
          </Column>
        ))}
      </Row>
    </Table>
  );
};

export default Tabs;
