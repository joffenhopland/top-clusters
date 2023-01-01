import {ValueStackContainer, ValueStackContent, ValueStackCardContent, ValueStackCard, ValueStackIconContainer, ValueStackCardTitle}from "./value-stack.styles"
import { ReactComponent as TrendingUpIcon } from '../../assets/icons/trending_up_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/icons/visibility_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as ScheduleIcon } from '../../assets/icons/schedule_FILL0_wght400_GRAD0_opsz48.svg';

const ValueStack = () => {
    return (
        <ValueStackContainer>
            <ValueStackContent>
                <ValueStackCardContent>
                    <ValueStackCard>
                        <ValueStackIconContainer>
                            <TrendingUpIcon/>
                        </ValueStackIconContainer>
                            <ValueStackCardTitle>
                                Improve your rank
                            </ValueStackCardTitle>
                    </ValueStackCard>
                    <ValueStackCard>
                        <ValueStackIconContainer>
                            <VisibilityIcon/>
                        </ValueStackIconContainer>
                            <ValueStackCardTitle>
                                Increase your visibility
                            </ValueStackCardTitle>
                    </ValueStackCard>
                    <ValueStackCard>
                        <ValueStackIconContainer>
                            <ScheduleIcon/>
                        </ValueStackIconContainer>
                            <ValueStackCardTitle>
                                Save time
                            </ValueStackCardTitle>
                    </ValueStackCard>
                </ValueStackCardContent>
            </ValueStackContent>
        </ValueStackContainer>
    )
}

export default ValueStack