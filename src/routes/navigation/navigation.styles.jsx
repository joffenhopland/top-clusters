import styled from 'styled-components';
import { Link } from 'react-router-dom';
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-family: ${(props) => props.theme.textStyles.paragraph.fontFamily};
  font-size: ${(props) => props.theme.textStyles.paragraph.fontSize};

`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};

`;

export const Divider = styled(Link)`
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.primary};

`;

export const LogInLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};

`;

export const LogOutLink = styled.span`
  padding: 10px 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};

`;