
import styled from 'styled-components';


export const ValueStackContainer = styled.div`
position: relative;
overflow: hidden;
`;

export const ValueStackContent = styled.section`
display: flex;
justify-content: center;
// flex-direction: column;
align-items: center;
// margin-top: 3rem;
background-color: ${(props) => props.theme.colors.lightViolet};
`;

export const ValueStackCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 2rem 0;
`;

export const ValueStackCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 30rem;
// height: 30rem;
// background-color: #fff;
// box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
// border-radius: 20px;
`;

export const WorksIconContainer = styled.div`
// height: 100%;
// width: 100%;
padding: 25px;
`;

export const WorksCardTitle = styled.div`
font-size: ${(props) => props.theme.textStyles.h3.fontSize};
font-weight: ${(props) => props.theme.textStyles.h3.fontWeight};
padding-bottom: 2.5rem;
`;