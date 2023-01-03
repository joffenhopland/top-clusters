import { FooterContainer, LogoContainer, CopyrightText, PrivacyPolicyText, FooterContent } from './footer.styles';


const Footer = () => {
    return(
            <FooterContainer>
                <FooterContent>
                <LogoContainer>
                    Logo top Clusters
                </LogoContainer>
                <CopyrightText>
                Copyright 2023 Top Clusters. All rights reserved.
                </CopyrightText>
                <PrivacyPolicyText>
                    Privacy Policy
                </PrivacyPolicyText>
                </FooterContent>
            </FooterContainer>
    )
}

export default Footer