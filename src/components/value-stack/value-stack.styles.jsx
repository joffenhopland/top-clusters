
import styled from 'styled-components';


export const ValueStackContainer = styled.div`
position: relative;
`;

export const ValueStackContent = styled.section`
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.colors.lightViolet};
`;

export const ValueStackCardContent = styled.div`
display: flex;
justify-content: space-between;
margin: 2rem 0;
`;

export const ValueStackCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 30rem;
`;

export const ValueStackIconContainer = styled.div`
padding: 25px;
`;

export const ValueStackCardTitle = styled.h3`
font-size: ${(props) => props.theme.textStyles.h3.fontSize};
font-weight: ${(props) => props.theme.textStyles.h3.fontWeight};
color: ${(props) => props.theme.colors.primary};
padding-bottom: 2.5rem;
`;