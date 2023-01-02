import { PriceContainer, PriceBackground, PriceContent, PriceTitle, PriceSubtitle } from "./price.styles"
import PricingPlans from "../pricing-plans/pricing-plans.component"


const Price = () => {
    return(
        <PriceContainer>
            <PriceBackground>
            </PriceBackground>
            <PriceContent>
                <PriceTitle>Pricing plans that suit you</PriceTitle>
                <PriceSubtitle>We offer simple and transparent “pay as you go” Pricing. No monthly subscriptions necessary. Only pay for what you need, when you need it.</PriceSubtitle>
                <PricingPlans/>
            </PriceContent>
        </PriceContainer>
    )
}

export default Price