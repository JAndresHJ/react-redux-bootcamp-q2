import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Bar = styled.div`
  padding: 0px 16px;
  background-color: #601a35;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Links = styled(Link)`
  color: white;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;

export const MenuLink = styled(Link)`
  color: black;
  display: block;
  text-decoration: none;
  padding: 10px 0;
  font-size: 17px;
`;

export const Text = styled.p`
  color: white;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;

export const FlexContainer = styled.div`
  display: flex;

  a {
    align-self: center;
  }
`;
