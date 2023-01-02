import styled from 'styled-components';

export const FaqContainer = styled.div`
display: flex;
justify-content: center;
padding: 56px 56px 56px 56px;
`;

export const FaqContent = styled.div`
// height: auto;
width: 95%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background: ${(props) => props.theme.colors.lightViolet};
border-radius: 24px;
`;

export const FaqTitle = styled.h2`
width: 60%;
font-size: ${(props) => props.theme.textStyles.h2.fontSize};
font-weight: ${(props) => props.theme.textStyles.h2.fontWeight};
color: ${(props) => props.theme.colors.primary};
padding: 12px 0 0 0;
`;

export const FaqSubtitle = styled.p`
width: 50%;
font-size: ${(props) => props.theme.textStyles.paragraphLarge.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLarge.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraphLarge.lineHeight};
color: ${(props) => props.theme.colors.primary};
padding: 0 0 56px 0;
`;

export const FaqItemsContainer = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
`;