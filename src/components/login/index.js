import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Button = styled.div`
  color: #ffffff;
  cursor: pointer;
  margin-right: 1.25rem;
`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Flex>
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    </Flex>
  );
};

export default LoginButton;
