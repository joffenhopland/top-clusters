import { CtaContainer, CtaContent, CtaContentText, CtaTitle, CtaTitleText, CtaTitleTextGradient, CtaSubTitle, CtaCreditCardText, CtaBackground } from "./cta.styles" 
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"

const Cta = () => {
    return(
        <CtaContainer>
        <CtaBackground>
        </CtaBackground>
            <CtaContent>
                <CtaContentText>
                    <CtaTitle>
                        <CtaTitleText>
                        Are you ready to boost your 
                        <span> </span>
                        <CtaTitleTextGradient>
                        google ranking?
                        </CtaTitleTextGradient>
                        </CtaTitleText>
                        <CtaSubTitle>
                    Sign up to Top Clusters and get 150 free credits.
                    </CtaSubTitle>
                        <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{  "margin": "0 auto"
}}>
                            Get 150 Free Credits
                        </Button>
                        <CtaCreditCardText>
                        No credit card required.
                        </CtaCreditCardText>
                    </CtaTitle>
                   
                </CtaContentText>
                
            </CtaContent>
        </CtaContainer>
    )
}

export default Cta