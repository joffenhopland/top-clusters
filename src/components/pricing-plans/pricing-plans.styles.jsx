import styled from 'styled-components';

export const PricingPlansItemsContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;

export const PricingPlansItem = styled.div`
width: 300px;
height: auto;
// display: flex;
// justify-content: center;
// align-items: center;
background: ${(props) => props.theme.colors.background};
border-radius: 24px;
`;

export const PricingPlansItemContent = styled.div`
padding-bottom: 24px;

`;

export const PricingPlansItemTitle = styled.h4`
font-size: ${(props) => props.theme.textStyles.h4.fontSize};
font-weight: ${(props) => props.theme.textStyles.h4.fontWeight};
line-height: ${(props) => props.theme.textStyles.h4.lineHeight};
background: linear-gradient(53.94deg, #A737FF 15.02%, #6B7CFF 82.83%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin: 12px 0;
`;

export const PricingPlansItemPricingPlans = styled.h3`
font-size: ${(props) => props.theme.textStyles.h3.fontSize};
font-weight: ${(props) => props.theme.textStyles.h3.fontWeight};
line-height: ${(props) => props.theme.textStyles.h3.lineHeight};
color: ${(props) => props.theme.colors.primary};
margin: 12px 0;
`;

export const PricingPlansItemDivider = styled.div`
// width: 100%;
border-top: 3px solid #bbb;
`;

export const PricingPlansDetailsContainer = styled.div`
text-align: start;
padding: 24px 32px;
`;

export const PricingPlansDetails = styled.div`
padding: 12px 0;
`;


export const PricingPlansDetailsText = styled.span`
font-size: ${(props) => props.theme.textStyles.paragraph.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLargeBold.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraphLargeBold.lineHeight};
color: ${(props) => props.theme.colors.primary};
vertical-align: middle;
`;

export const PricingPlansIconContainer = styled.div`
display: inline-block;
vertical-align: middle;
margin-top: 6px;
`;

export const PricingPlansCreditCardText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphSmall.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphSmall.fontWeight};
color: ${(props) => props.theme.colors.black};

`;