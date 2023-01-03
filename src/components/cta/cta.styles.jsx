import styled from 'styled-components';

export const CtaContainer = styled.div`
position: relative;

`;

export const CtaBackground = styled.div`
position: relative;
top: 200px;
left: 220px;
width: 624px;
height: 100px;
// background: rgb(215,152,225);
// background: radial-gradient(circle at 35% 50%, rgba(215,152,225,0.5) 1%, rgba(255,155,245,0.7) 5%, rgba(174,211,255,0.7) 55%, rgba(201,212,239,0.5) 59%, rgba(202,207,250,0.3) 67%);
background: radial-gradient(circle, rgba(220,133,234,1) 11%, rgba(239,194,255,0.10127801120448177) 28%, rgba(189,247,255,1) 62%, rgba(201,212,239,0.25253851540616246) 70%, rgba(234,202,250,1) 81%);
filter: blur(100px);
// background-position: left;
// background-repeat: no-repeat;
// background-size: cover;
`;

export const CtaContent = styled.section`
height: 100%;
width: 100%;
position: absolute;
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 2rem;
`;

export const CtaContentText = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-family: ${(props) => props.theme.textStyles.h1.fontFamily};
color: ${(props) => props.theme.colors.primary};
`;

export const CtaTitle = styled.h1`
font-size: ${(props) => props.theme.textStyles.h1.fontSize};
font-weight: ${(props) => props.theme.textStyles.h1.fontWeight};
// line-height: ${(props) => props.theme.textStyles.h1.lineHeight};
margin-bottom: 12px;
`;

export const CtaTitleText = styled.span`
display: block;
`;

export const CtaTitleTextGradient = styled.span`
background: linear-gradient(53.94deg, #A737FF 15.02%, #6B7CFF 82.83%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const CtaSubTitle = styled.h2`
font-size: ${(props) => props.theme.textStyles.paragraphLarge.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLarge.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraphLarge.lineHeight};
padding: 1rem 0;
`;

export const CtaCreditCardText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphSmall.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphSmall.fontWeight};
color: ${(props) => props.theme.colors.black};
margin: 12px;
`;