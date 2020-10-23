import React from "react";
import styled from "styled-components";

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
  width: 100%;
  cursor: pointer;
`;

const Tabs = ({ setTab, currentTab }) => {
  return (
    <Table>
      <Row>
        <Column>
          <Button onClick={() => setTab("push")}>
            <div
              className="tablink código-bottombar código-hover-light-grey código-padding"
              active={currentTab === "push"}
            >
              Push
            </div>
          </Button>
        </Column>
        <Column>
          <Button onClick={() => setTab("pull")}>
            <div
              className="tablink código-bottombar código-hover-light-grey código-padding"
              active={currentTab === "pull"}
            >
              Pull
            </div>
          </Button>
        </Column>
      </Row>
    </Table>
  );
};

export default Tabs;
