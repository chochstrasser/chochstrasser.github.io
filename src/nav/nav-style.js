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

export { NavBlur, FixedButton, FixedButtonBelow };
