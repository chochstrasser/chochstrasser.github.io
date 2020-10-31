import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Button = styled.div`
  color: #ffffff;
  margin-right: 1.25rem;
  cursor: pointer;
`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
