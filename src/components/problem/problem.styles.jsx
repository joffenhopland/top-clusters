import styled from 'styled-components';

export const ProblemContainer = styled.div`
// position: relative;
`;

export const ProblemContent = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
margin-top: 2rem;
margin-bottom: 2rem;
background: #fff;
`;

export const ProblemImg = styled.div`
display: flex;
justify-content: center;
`;

export const Img = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
height: 300px;
`;

export const RightArrowContainer = styled.div`
padding: 12px 0;
`;

export const ProblemArrowColumn = styled.div`
display: flex;
flex-direction: column;
padding-top: 42px;
padding-bottom: 10px;

`;

export const ProblemContentTextRow = styled.div`
width: 50%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const ProblemContentTextColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 2rem;
`;

export const ProblemContentTitle = styled.h3`
font-size: ${(props) => props.theme.textStyles.label.fontSize};
font-weight: ${(props) => props.theme.textStyles.label.fontWeight};
background: linear-gradient(53.94deg, #A737FF 15.02%, #6B7CFF 82.83%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const ProblemText = styled.p`
font-size: ${(props) => props.theme.textStyles.paragraphLargeBold.fontSize};
font-weight: ${(props) => props.theme.textStyles.paragraphLargeBold.fontWeight};
color: ${(props) => props.theme.colors.primary};
margin: 20px 0;
`;