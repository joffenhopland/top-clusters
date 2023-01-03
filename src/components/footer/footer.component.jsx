import { FooterContainer, LogoContainer, CopyrightText, PrivacyPolicyLink, FooterContent } from './footer.styles';
import { Fragment } from 'react';


const Footer = () => {
    return(
        <Fragment>
            <FooterContainer>
                <FooterContent>
                <LogoContainer>
                    Logo top Clusters
                </LogoContainer>
                <CopyrightText>
                Copyright 2023 Top Clusters. All rights reserved.
                </CopyrightText>
                <PrivacyPolicyLink to='/privacy-policy'>
                    Privacy Policy
                </PrivacyPolicyLink>
                </FooterContent>
            </FooterContainer>
        </Fragment>    
    )
}

export default Footer