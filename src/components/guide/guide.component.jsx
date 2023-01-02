import { GuideContainer, GuideContent, GuideImg, Img, GuideContentTextColumn, GuideContentTextRow, GuideContentTitle, GuideText, GuideCreditCardText, ButtonContainer } from "./guide.styles"
import GuideImage from "../../assets/images/guide-image.png"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"



const Guide = () => {
    return(
        <GuideContainer>
            <GuideContent>
            
            <GuideContentTextColumn>
        
            <GuideContentTitle>
            We get it -
            ranking on google is hard           
            </GuideContentTitle>
            <GuideText>
            Top Clusters helps marketing agencies, SEO experts and content creators succeed in creating content strategies that improves their rankings in search engines.            </GuideText>
            <ButtonContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{  "margin": "0 auto", "text-align": "start"
}}>
                            Get 150 Free Credits
                        </Button>
                        <GuideCreditCardText>
                        No credit card required.
                        </GuideCreditCardText>
            </ButtonContainer>

                        
        </GuideContentTextColumn>
            <GuideImg>
                <Img src={GuideImage} alt="Happy office worker"/>
            </GuideImg>
           
            </GuideContent>
        </GuideContainer>
    )
}

export default Guide