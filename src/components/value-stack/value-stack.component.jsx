import {ValueStackContainer, ValueStackContent, ValueStackCardContent, ValueStackCard, WorksIconContainer, WorksIcon1, WorksCardTitle}from "./value-stack.styles"
import { ReactComponent as TrendingUpIcon } from '../../assets/icons/trending_up_FILL0_wght400_GRAD0_opsz48.svg';

const ValueStack = () => {
    return (
        <ValueStackContainer>
            <ValueStackContent>
                <ValueStackCardContent>
                    <ValueStackCard>
                        <WorksIconContainer>
                            <TrendingUpIcon/>
                        </WorksIconContainer>
                            <WorksCardTitle>
                                Improve your rank
                            </WorksCardTitle>
                    </ValueStackCard>
                    <ValueStackCard>
                        <WorksIconContainer>
                            <TrendingUpIcon/>
                        </WorksIconContainer>
                            <WorksCardTitle>
                                Increase your visibility
                            </WorksCardTitle>
                    </ValueStackCard>
                    <ValueStackCard>
                        <WorksIconContainer>
                            <TrendingUpIcon/>
                        </WorksIconContainer>
                            <WorksCardTitle>
                                Save time
                            </WorksCardTitle>
                    </ValueStackCard>
                </ValueStackCardContent>
            </ValueStackContent>
        </ValueStackContainer>
    )
}

export default ValueStack