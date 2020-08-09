import styled from "styled-components";

const FixedButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
`;

const FixedButtonBelow = styled(FixedButton)`
  top: 5.7rem;
`;

const NavBlur = styled.nav`
  backdrop-filter: blur(4px);
`;

const LineWrapper = styled.label`
  width: 1rem;
  height: 1rem;
`;

const Line = styled.span`
  display: block;
  width: 1.15rem;
  border-bottom: 1px solid white;
  margin: 0.5rem 0;
  transform-origin: left top;
  transition: all 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);

  :nth-child(1) {
    transform: ${(props) =>
      props.showModal && `translate(0,-0.25rem) rotate(45deg)`};
  }

  :nth-child(2) {
    transform: ${(props) => props.showModal && `rotate(-45deg)`};
  }
`;

const Brand = styled.div``;

const FlexNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:nth-child(2) {
    text-align: center;
    flex: 1 1 0px;
    margin-left: -3.5rem;
    z-index: -1;
  }
`;

const NavBodyContent = styled.div`
  margin-top: 2.5rem;
`;

export {
  NavBlur,
  LineWrapper,
  Line,
  Brand,
  FlexNavBar,
  NavBodyContent,
  FixedButton,
  FixedButtonBelow,
};
