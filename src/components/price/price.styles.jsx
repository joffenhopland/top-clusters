import styled from 'styled-components';

export const PriceContainer = styled.div`
display: flex;
justify-content: center;
// padding: 56px 0 56px 0;
position: relative;
overflow: hidden;
height: 110vh;
`;

export const PriceBackground = styled.div`
position: relative;
top: 180px;
left: 120px;
width: 1524px;
height: 1500px;
background: radial-gradient(circle, rgba(220,133,234,1) 11%, rgba(239,194,255,0.10127801120448177) 28%, rgba(189,247,255,1) 62%, rgba(201,212,239,0.25253851540616246) 70%, rgba(234,202,250,1) 81%);
filter: blur(200px);
`;

export const PriceContent = styled.div`
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

export const PriceTitle = styled.h2`
width: 60%;
font-size: ${(props) => props.theme.textStyles.h2.fontSize};
font-weight: ${(props) => props.theme.textStyles.h2.fontWeight};
color: ${(props) => props.theme.colors.primary};
padding: 12px 0 38px 0;
`;

export const PriceSubtitle = styled.p`
width: 110%;
font-size: ${(props) => props.theme.textStyles.paragraphLarge.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLarge.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraphLarge.lineHeight};
color: ${(props) => props.theme.colors.primary};
`;

export const PriceItemsContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;

export const PriceItem = styled.div`
width: 300px;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
background: ${(props) => props.theme.colors.background};
border-radius: 24px;
`;

export const PriceItemContent = styled.div`
display: flex;
justify-content: column;
align-items: center;
`;

export const PriceItemTitle = styled.div`

`;