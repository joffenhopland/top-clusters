import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
//   position: relative;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};;
`;

export const FooterContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 24px 0;
font-family: ${(props) => props.theme.textStyles.h6.fontFamily};
font-size: ${(props) => props.theme.textStyles.h6.fontSize};
font-weight: ${(props) => props.theme.textStyles.h6.fontWeight};
`;

export const LogoContainer = styled(Link)`
//   height: 100%;
//   width: 100%;
  padding: 12px;
  color: ${(props) => props.theme.colors.background};
  `;

export const CopyrightText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphSmall.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphSmall.fontWeight};
color: ${(props) => props.theme.colors.background};
`;

export const PrivacyPolicyLink = styled(Link)`
font-size: ${(props) => props.theme.textStyles.paragraphSmall.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphSmall.fontWeight};
color: ${(props) => props.theme.colors.background};
cursor: pointer;
padding: 6px;
`;