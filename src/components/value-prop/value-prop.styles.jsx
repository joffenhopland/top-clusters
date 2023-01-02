import styled from 'styled-components';

export const ValuePropContainer = styled.div`
display: flex;
justify-content: center;
// padding: 56px 0 56px 0;
position: relative;
overflow: hidden;
height: 120vh;
`;

export const ValuePropBackground = styled.div`
position: relative;
top: 180px;
left: 120px;
width: 1524px;
height: 1500px;
background: radial-gradient(circle, rgba(215,152,225,1) 8%, rgba(155,255,165,1) 28%, rgba(174,211,255,1) 62%, rgba(201,212,239,1) 80%, rgba(202,207,250,1) 89%);
// background: radial-gradient(483.9% 2719.65% at -49.5% -250%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)
filter: blur(400px);
// background-position: left;
// background-repeat: no-repeat;
// background-size: cover;
`;

export const ValuePropContent = styled.div`
height: 100%;
// width: 100%;
position: absolute;
top: 0;
right: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 48px 0 0 0;

`;

export const ValuePropTitle = styled.h2`
width: 60%;
font-size: ${(props) => props.theme.textStyles.h2.fontSize};
font-weight: ${(props) => props.theme.textStyles.h2.fontWeight};
color: ${(props) => props.theme.colors.primary};
padding: 12px 0 38px 0;
`;

export const ValuePropBenefitsContent = styled.div`
width: 80%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 56px;
grid-row-gap: 36px;
`;

export const ValuePropBenefit1 = styled.div`
grid-area: 1 / 1 / 2 / 2;
text-align: start;
`;
export const ValuePropBenefit2 = styled.div`
grid-area: 1 / 2 / 2 / 3;
text-align: start;

`;
export const ValuePropBenefit3 = styled.div`
grid-area: 1 / 3 / 2 / 4;
text-align: start;

`;
export const ValuePropBenefit4 = styled.div`
grid-area: 2 / 1 / 3 / 2;
text-align: start;

`;
export const ValuePropBenefit5 = styled.div`
grid-area: 2 / 2 / 3 / 3;
text-align: start;

`;
export const ValuePropBenefit6 = styled.div`
grid-area: 2 / 3 / 3 / 4;
text-align: start;

`;

export const ValuePropBenefitTitle = styled.h4`
font-size: ${(props) => props.theme.textStyles.h4.fontSize};
font-weight: ${(props) => props.theme.textStyles.h4.fontWeight};
line-height: ${(props) => props.theme.textStyles.h4.lineHeight};
color: ${(props) => props.theme.colors.primary};
margin: 12px 0;
`;

export const ValuePropBenefitText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphLarge.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLarge.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraphLarge.lineHeight};
color: ${(props) => props.theme.colors.primary};
`;

export const ValuePropIconContainer = styled.div`
`;

export const ValuePropCreditCardText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphSmall.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphSmall.fontWeight};
color: ${(props) => props.theme.colors.black};
`;