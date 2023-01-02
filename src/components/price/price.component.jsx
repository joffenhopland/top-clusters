import { PriceContainer, PriceBackground, PriceContent, PriceTitle, PriceItemsContainer, PriceSubtitle, PriceItem, PriceItemContent, PriceItemTitle } from "./price.styles"


const Price = () => {
    return(
        <PriceContainer>
            <PriceBackground>
            </PriceBackground>
            <PriceContent>
                <PriceTitle>Pricing plans that suit you</PriceTitle>
                <PriceSubtitle>We offer simple and transparent “pay as you go” Pricing. No monthly subscriptions necessary. Only pay for what you need, when you need it.</PriceSubtitle>
                <PriceItemsContainer>
                    <PriceItem>
                        <PriceItemContent>
                            <PriceItemTitle>
                            Price
                            </PriceItemTitle>
                            <PriceItemTitle>
                            Price
                            </PriceItemTitle>
                        </PriceItemContent>             
                    </PriceItem>
                    <PriceItem>
                    Price
                    </PriceItem>
                    <PriceItem>
                    Price
                    </PriceItem>
                    <PriceItem>
                    Price
                    </PriceItem>
                </PriceItemsContainer>
            </PriceContent>
        </PriceContainer>
    )
}

export default Price