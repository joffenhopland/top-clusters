import styled from 'styled-components';

export const HowContainer = styled.div`
display: flex;
justify-content: center;
// padding: 56px 0 56px 0;
position: relative;
overflow: hidden;
height: 120vh;
`;

export const HowBackground = styled.div`
position: relative;
top: 180px;
left: 120px;
width: 1524px;
height: 1500px;
background: radial-gradient(circle, rgba(215,152,225,1) 8%, rgba(155,156,255,1) 28%, rgba(174,255,185,1) 62%, rgba(201,212,239,1) 80%, rgba(202,207,250,1) 89%);
filter: blur(600px);
`;

export const HowContent = styled.div`
height: 100%;
width: 100%;
position: absolute;
top: 0;
right: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;

export const HowTitle = styled.h2`
width: 60%;
font-size: ${(props) => props.theme.textStyles.h2.fontSize};
font-weight: ${(props) => props.theme.textStyles.h2.fontWeight};
color: ${(props) => props.theme.colors.primary};
padding: 12px 0 38px 0;
`;

export const HowStepsContent = styled.div`
width: 60%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 24px;
grid-row-gap: 0px;
`;

export const HowStepsContainer1 = styled.div`
grid-area: 1 / 1 / 3 / 2;
text-align: center;
`;
export const HowStepsContainer2 = styled.div`
grid-area: 1 / 2 / 2 / 12;
text-align: start;
`;
export const HowStepsContainer3 = styled.div`
grid-area: 2 / 1 / 3 / 2;
// text-align: start;

`;
export const HowStepsContainer4 = styled.div`
grid-area: 2 / 2 / 3 / 12;
text-align: start;

`;
export const HowStepsContainer5 = styled.div`
grid-area: 3 / 1 / 4 / 2;
// text-align: start;

`;
export const HowStepsContainer6 = styled.div`
grid-area: 3 / 2 / 4 / 12;
text-align: start;
`;

export const HowStepsTitle = styled.h3`
font-size: ${(props) => props.theme.textStyles.h3.fontSize};
font-weight: ${(props) => props.theme.textStyles.h3.fontWeight};
line-height: ${(props) => props.theme.textStyles.h3.lineHeight};
color: ${(props) => props.theme.colors.primary};
margin: 12px 0;
`;

export const HowStepsText = styled.p`
width: 110%;
font-size: ${(props) => props.theme.textStyles.paragraphLarge.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLarge.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraphLarge.lineHeight};
color: ${(props) => props.theme.colors.primary};
`;

export const HowIconContainer = styled.div`
`;