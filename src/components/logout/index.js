import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Button = styled.div`
  color: #ffffff;
  margin-right: 1.25rem;
  cursor: pointer;
`;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Flex>
      <Button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
    </Flex>
  );
};

export default LogoutButton;
