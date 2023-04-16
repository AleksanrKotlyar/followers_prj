import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <ErrorTitle>Error 404</ErrorTitle>
      <ErrorText>Woops... Looks like this page doesn't exist!</ErrorText>
      <NavLink
        to="/"
        style={{ display: 'block', marginTop: '15px', textAlign: 'center' }}
        title="Return to Home"
        aria-label="Return to Home page"
      >
        Return to Home
      </NavLink>
    </>
  );
};

const ErrorTitle = styled.h3`
  margin-top: 35px;
  text-align: center;
  font-size: 36px;
`;
const ErrorText = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

export default NotFoundPage;
