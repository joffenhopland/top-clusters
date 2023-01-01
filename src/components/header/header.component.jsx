import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import {HeaderContainer, HeaderContent, HeaderContentText, HeaderTitle, HeaderTitleText, HeaderSubTitle, HeaderCreditCardText} from "./header.styles"

const Header = () => {
    return (
        <div>
        <HeaderContainer>
            <HeaderContent>
                <HeaderContentText>
                    <HeaderTitle>
                        <HeaderTitleText>
                        Boost your google ranking with keyword clustering
                        </HeaderTitleText>
                        <HeaderSubTitle>
                        We group keywords with similar search intent into topical clusters to help you improve your rank, increase your visibility with more traffic, and save time.
                        </HeaderSubTitle>
                        <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{  "margin": "0 auto"
}}>
                            Get 150 Free Credits
                        </Button>
                        <HeaderCreditCardText>
                        No credit card required.
                        </HeaderCreditCardText>
                    </HeaderTitle>
                </HeaderContentText>
            </HeaderContent>
        </HeaderContainer>
        </div>
    )
}

export default Header