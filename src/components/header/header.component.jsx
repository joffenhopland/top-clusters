import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import DashboardImg from '../../assets/images/dashboard-image-temp.svg';

import {HeaderContainer, HeaderBackground, HeaderContent, HeaderContentText, HeaderTitle, HeaderTitleText, HeaderTitleTextGradient, HeaderSubTitle, HeaderCreditCardText, HeaderDashboardImg} from "./header.styles"

const Header = () => {
    return (
        <HeaderContainer>
        <HeaderBackground>
        </HeaderBackground>
            <HeaderContent>
                <HeaderContentText>
                    <HeaderTitle>
                        <HeaderTitleText>
                        Boost your
                        <span> </span>
                        <HeaderTitleTextGradient>
                        google ranking
                        </HeaderTitleTextGradient>
                        <span> </span>
                        with
                        <span> </span>
                        <HeaderTitleTextGradient>
                        keyword clustering
                        </HeaderTitleTextGradient>
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
                <HeaderDashboardImg src={DashboardImg}/>
            </HeaderContent>
            </HeaderContainer>
    )
}

export default Header