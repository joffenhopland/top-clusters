import styled from 'styled-components';

export const PriceContainer = styled.div`
display: flex;
justify-content: center;
// padding: 56px 0 56px 0;
position: relative;
overflow: hidden;
height: 120vh;
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
padding-bottom: 56px;

`;

export const PriceTitle = styled.h2`
width: 60%;
font-size: ${(props) => props.theme.textStyles.h2.fontSize};
font-weight: ${(props) => props.theme.textStyles.h2.fontWeight};
color: ${(props) => props.theme.colors.primary};
padding: 12px 0 0 0;
`;

export const PriceSubtitle = styled.p`
width: 50%;
font-size: ${(props) => props.theme.textStyles.paragraphLarge.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLarge.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraphLarge.lineHeight};
color: ${(props) => props.theme.colors.primary};
padding: 0 0 56px 0;
`;

export const PriceItemsContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;

export const PriceItem = styled.div`
width: 300px;
height: auto;
// display: flex;
// justify-content: center;
// align-items: center;
background: ${(props) => props.theme.colors.background};
border-radius: 24px;
`;

export const PriceItemContent = styled.div`
padding-bottom: 24px;

`;

export const PriceItemTitle = styled.h4`
font-size: ${(props) => props.theme.textStyles.h4.fontSize};
font-weight: ${(props) => props.theme.textStyles.h4.fontWeight};
line-height: ${(props) => props.theme.textStyles.h4.lineHeight};
background: linear-gradient(53.94deg, #A737FF 15.02%, #6B7CFF 82.83%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin: 12px 0;
`;

export const PriceItemPrice = styled.h3`
font-size: ${(props) => props.theme.textStyles.h3.fontSize};
font-weight: ${(props) => props.theme.textStyles.h3.fontWeight};
line-height: ${(props) => props.theme.textStyles.h3.lineHeight};
color: ${(props) => props.theme.colors.primary};
margin: 12px 0;
`;

export const PriceItemDivider = styled.div`
// width: 100%;
border-top: 3px solid #bbb;
`;

export const PriceDetailsContainer = styled.div`
text-align: start;
padding: 24px 32px;
`;

export const PriceDetails = styled.div`
padding: 12px 0;
`;


export const PriceDetailsText = styled.span`
font-size: ${(props) => props.theme.textStyles.paragraph.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLargeBold.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraphLargeBold.lineHeight};
color: ${(props) => props.theme.colors.primary};
vertical-align: middle;
`;

export const PriceIconContainer = styled.div`
display: inline-block;
vertical-align: middle;
margin-top: 6px;
`;

export const PriceCreditCardText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphSmall.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphSmall.fontWeight};
color: ${(props) => props.theme.colors.black};

`;