import styled from 'styled-components';

export const BaseButton = styled.button`
  display: flex;
  // flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
//   gap: 10px;

  min-width: 148px;
  width: auto;
  height: 48px;

  background: #341F6F;
  border-radius: 24px;

  letter-spacing: 0.5px;
  line-height: 50px;
  color: white;
  font-family: ${(props) => props.theme.textStyles.h6.fontFamily};
  font-size: ${(props) => props.theme.textStyles.h6.fontSize};
  font-weight: ${(props) => props.theme.textStyles.h6.fontWeight};
  border: none;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;