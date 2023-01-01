import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
// background-image: linear-gradient( to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)));
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 74vh;
`;

export const HeaderContent = styled.section`
height: 100%;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
color: #000000;
// @media only screen and (max-width:375px) {
//     text-align: start;
//     height: 80%;
// }
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