import styled from 'styled-components';

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
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Line = styled.span`
  display: block;
  width: 1.15rem;
  border-bottom: 1px solid white;
  margin: 0.5rem 0;
  transform-origin: center;
  transition: all 0.4806s cubic-bezier(0.04, 0.04, 0.12, 0.96);

  :nth-child(1) {
    transform: ${(props) => props.showModal && `translateY(0.25rem) rotate(315deg)`};
  }

  :nth-child(2) {
    transform: ${(props) => props.showModal && ` translateY(-0.25rem) rotate(-135deg)`};
  }
`;

const FlexNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBodyContent = styled.div`
  margin-top: 2.7rem;
  padding: 0 0 2.7rem 0;
`;

export { NavBlur, LineWrapper, Line, FlexNavBar, NavBodyContent, FixedButton, FixedButtonBelow };
