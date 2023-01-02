import { PricingPlansItemsContainer, PricingPlansItem, PricingPlansItemContent, PricingPlansItemTitle, PricingPlansItemPricingPlans, PricingPlansItemDivider, PricingPlansDetailsContainer, PricingPlansDetails, PricingPlansIconContainer, PricingPlansDetailsText, PricingPlansCreditCardText } from "./pricing-plans.styles"
import { ReactComponent as CheckmarkIcon } from '../../assets/icons/checkmark-icon.svg';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"


const PricingPlans = () => {
    return(
        <PricingPlansItemsContainer>
                    <PricingPlansItem>
                        <PricingPlansItemContent>
                            <PricingPlansItemTitle>
                            Basic
                            </PricingPlansItemTitle>
                            <PricingPlansItemPricingPlans>
                            $8.99
                            </PricingPlansItemPricingPlans>
                            <PricingPlansItemDivider/>
                            <PricingPlansDetailsContainer>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>1,000 Keywords</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>$8.99 / 1000 Keywords</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>Downloadable Report</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>Credits Never Expire</PricingPlansDetailsText>
                                </PricingPlansDetails>
                            </PricingPlansDetailsContainer>
                            <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{  "margin": "0 auto", "text-align": "start"
}}>
                            Get 150 Free Credits
                        </Button>
                        <PricingPlansCreditCardText>
                        No credit card required.
                        </PricingPlansCreditCardText>
                        </PricingPlansItemContent>             
                    </PricingPlansItem>
                    <PricingPlansItem>
                        <PricingPlansItemContent>
                            <PricingPlansItemTitle>
                            Standard
                            </PricingPlansItemTitle>
                            <PricingPlansItemPricingPlans>
                            $18.99
                            </PricingPlansItemPricingPlans>
                            <PricingPlansItemDivider/>
                            <PricingPlansDetailsContainer>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>2,500 Keywords</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>$7.60 / 1000 Keywords</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>Downloadable Report</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>Credits Never Expire</PricingPlansDetailsText>
                                </PricingPlansDetails>
                            </PricingPlansDetailsContainer>
                            <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{  "margin": "0 auto", "text-align": "start"
}}>
                            Get 150 Free Credits
                        </Button>
                        <PricingPlansCreditCardText>
                        No credit card required.
                        </PricingPlansCreditCardText>
                        </PricingPlansItemContent>             
                    </PricingPlansItem>
                    <PricingPlansItem>
                        <PricingPlansItemContent>
                            <PricingPlansItemTitle>
                            Pro
                            </PricingPlansItemTitle>
                            <PricingPlansItemPricingPlans>
                            $32.99
                            </PricingPlansItemPricingPlans>
                            <PricingPlansItemDivider/>
                            <PricingPlansDetailsContainer>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>5,000 Keywords</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>$6.60 / 1000 Keywords</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>Downloadable Report</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>Credits Never Expire</PricingPlansDetailsText>
                                </PricingPlansDetails>
                            </PricingPlansDetailsContainer>
                            <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{  "margin": "0 auto", "text-align": "start"
}}>
                            Get 150 Free Credits
                        </Button>
                        <PricingPlansCreditCardText>
                        No credit card required.
                        </PricingPlansCreditCardText>
                        </PricingPlansItemContent>             
                    </PricingPlansItem>
                    <PricingPlansItem>
                        <PricingPlansItemContent>
                            <PricingPlansItemTitle>
                            Premium
                            </PricingPlansItemTitle>
                            <PricingPlansItemPricingPlans>
                            $69.99
                            </PricingPlansItemPricingPlans>
                            <PricingPlansItemDivider/>
                            <PricingPlansDetailsContainer>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>12,000 Keywords</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>$5.83 / 1000 Keywords</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>Downloadable Report</PricingPlansDetailsText>
                                </PricingPlansDetails>
                                <PricingPlansDetails>
                                    <PricingPlansIconContainer><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansIconContainer style={{"opacity": "0"}}><CheckmarkIcon/></PricingPlansIconContainer>
                                    <PricingPlansDetailsText>Credits Never Expire</PricingPlansDetailsText>
                                </PricingPlansDetails>
                            </PricingPlansDetailsContainer>
                            <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{  "margin": "0 auto", "text-align": "start"
}}>
                            Get 150 Free Credits
                        </Button>
                        <PricingPlansCreditCardText>
                        No credit card required.
                        </PricingPlansCreditCardText>
                        </PricingPlansItemContent>             
                    </PricingPlansItem>
                </PricingPlansItemsContainer>
    )
}

export default PricingPlans