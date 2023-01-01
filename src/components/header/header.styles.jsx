import styled from 'styled-components';
import {Link} from 'react-router-dom';
import DashboardImg from '../../assets/dashboard-image-temp.svg';


export const HeaderContainer = styled.div`
position: relative;
// height: 74vh;
// overflow: hidden;
`;

export const HeaderBackground = styled.div`
position: relative;
top: 250px;
left: 300px;
width: 624px;
height: 196px;
background: rgb(215,152,225);
// background: radial-gradient(circle at 35% 50%, rgba(215,152,225,0.5) 1%, rgba(255,155,245,0.7) 5%, rgba(174,211,255,0.7) 55%, rgba(201,212,239,0.5) 59%, rgba(202,207,250,0.3) 67%);
background: radial-gradient(circle at -49.5% -250%, rgba(215, 152, 225, 1) 17.55%, rgba(255, 155, 245, 1) 27.56%, rgba(174, 211, 255, 1) 49.89%, rgba(201, 212, 239, 1) 56.53%, rgba(202, 207, 250, 1) 65.69%);
filter: blur(100px);
background-position: left;
// background-repeat: no-repeat;
// background-size: cover;
height: 140vh;
`;

export const HeaderContent = styled.section`
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
color: #000000;
`;

export const HeaderContentText = styled.div`
width: 50%;
padding-top: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-family: ${(props) => props.theme.textStyles.h1.fontFamily};
color: ${(props) => props.theme.colors.primary};
// @media only screen and (max-width:600px) {
//     width: 80%;
// }
// @media only screen and (max-width:375px) {
//     position: absolute;
//     align-items: flex-start;
// }
`;

export const HeaderTitle = styled.h1`
font-size: ${(props) => props.theme.textStyles.h1.fontSize};
font-weight: ${(props) => props.theme.textStyles.h1.fontWeight};

`;

export const HeaderTitleText = styled.span`
display: block;
`;

export const HeaderTitleTextGradient = styled.span`
background: linear-gradient(53.94deg, #A737FF 15.02%, #6B7CFF 82.83%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const HeaderSubTitle = styled.h2`
font-size: ${(props) => props.theme.textStyles.paragraphLarge.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLarge.fontWeight};
padding: 2rem 0rem;
`;

export const HeaderCreditCardText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphSmall.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphSmall.fontWeight};
color: ${(props) => props.theme.colors.black};
`;

export const HeaderDashboardImg = styled.img`
// box-sizing: border-box;

// position: absolute;
// width: 1024px;
// height: 666.57px;
// right: 208px;
// top: 561px;

// background: url(${DashboardImg};
// border: 4px solid #E0E4FC;
`;