import styled from 'styled-components';

export const SuccessContainer = styled.div`
`;

export const SuccessContent = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
width: 98%;
margin-top: 2rem;
margin-bottom: 2rem;
background: #fff;
`;

export const SuccessImg = styled.div`
display: flex;
justify-content: center;
`;

export const Img = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
height: 350px;
`;


// export const SuccessContentTextRow = styled.div`
// width: 50%;
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// `;

export const SuccessContentTextColumn = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
padding: 2rem;
`;

export const SuccessContentTitle = styled.h2`
font-size: ${(props) => props.theme.textStyles.h2.fontSize};
font-weight: ${(props) => props.theme.textStyles.h2.fontWeight};
line-height: ${(props) => props.theme.textStyles.h2.lineHeight};
color: ${(props) => props.theme.colors.primary};
margin: 0;
`;

export const SuccessText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraph.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraph.fontWeight};
line-height: ${(props) => props.theme.textStyles.paragraph.lineHeight};
color: ${(props) => props.theme.colors.primary};
margin: 20px 0;
padding-top: 12px; 
`;

export const SuccessCreditCardText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphSmall.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphSmall.fontWeight};
color: ${(props) => props.theme.colors.black};
text-align: center;
`;

export const ButtonContainer = styled.div`
padding-top: 12px; 
`;