import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 0px 40px 0px 40px;
  font-family: ${(props) => props.theme.textStyles.h6.fontFamily};
  font-size: ${(props) => props.theme.textStyles.h6.fontSize};
  font-weight: ${(props) => props.theme.textStyles.h6.fontWeight};

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
  padding: 10px 30px 10px 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};

`;

export const LogOutLink = styled.span`
  padding: 10px 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};

`;