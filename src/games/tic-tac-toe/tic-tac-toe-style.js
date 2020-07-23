import styled from "styled-components";

const GameWrapper = styled.div`
  margin: 20px;
`;

const Game = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameBoard = styled.div``;

const GameInfo = styled.div`
  margin-left: 20px;

  > ul,
  > ol {
    margin: 20px;
  }
`;

const Status = styled.div`
  margin-bottom: 10px;
`;

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const StyledSquare = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
    outline: none;
  }
`;

const ListItem = styled.li`
  font-weight: ${(props) => (props.active ? "900" : "100")};
  cursor: pointer;
`;

export {
  GameWrapper,
  Status,
  BoardRow,
  StyledSquare,
  Game,
  GameBoard,
  GameInfo,
  ListItem,
};
