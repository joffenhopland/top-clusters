import { SuccessContainer, SuccessContent, SuccessImg, Img, SuccessContentTextColumn, SuccessContentTextRow, SuccessContentTitle, SuccessText, SuccessCreditCardText, ButtonContainer } from "./success.styles"
import SuccessImage from "../../assets/images/success-image.png"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"



const Success = () => {
    return(
        <SuccessContainer>
            <SuccessContent>
            <SuccessImg>
                <Img src={SuccessImage} alt="Office workers celebrating success"/>
            </SuccessImg>
            <SuccessContentTextColumn>
            <SuccessContentTitle>
            It’s time to take your SEO game to the next level         
            </SuccessContentTitle>
            <SuccessText>
            At Top Clusters we understand what it’s like to spend hours on keyword research, creating content that doesn’t get the rank and visibility it deserves, while trying to keep up with constantly changing search engine algorithms. That’s why we developed a simple, but highly efficient keyword clustering tool, so that you can streamline your SEO content strategy, be more productive and become an SEO super hero.            </SuccessText>
            <ButtonContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{  "margin": "0 auto", "text-align": "start"
}}>
                            Get 150 Free Credits
                        </Button>
                        <SuccessCreditCardText>
                        No credit card required.
                        </SuccessCreditCardText>
            </ButtonContainer>                        
        </SuccessContentTextColumn>
            </SuccessContent>
        </SuccessContainer>
    )
}

export default Success