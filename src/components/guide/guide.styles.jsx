import styled from 'styled-components';

export const GuideContainer = styled.div`
// position: relative;
`;

export const GuideContent = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
width: 98%;
margin-top: 2rem;
margin-bottom: 2rem;
background: #fff;
`;

export const GuideImg = styled.div`
display: flex;
justify-content: center;
`;

export const Img = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
height: 400px;
`;


// export const GuideContentTextRow = styled.div`
// width: 50%;
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// `;

export const GuideContentTextColumn = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
padding: 2rem;
`;

export const GuideContentTitle = styled.h2`
font-size: ${(props) => props.theme.textStyles.h2.fontSize};
font-weight: ${(props) => props.theme.textStyles.h2.fontWeight};
line-height: ${(props) => props.theme.textStyles.h2.lineHeight};
color: ${(props) => props.theme.colors.primary};
margin: 0;
`;

export const GuideText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphLarge.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLarge.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraphLarge.lineHeight};
color: ${(props) => props.theme.colors.primary};
margin: 20px 0;
padding-top: 12px; 

`;



export const GuideCreditCardText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphSmall.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphSmall.fontWeight};
color: ${(props) => props.theme.colors.black};
text-align: center;
`;

export const ButtonContainer = styled.div`
padding-top: 12px; 
`;