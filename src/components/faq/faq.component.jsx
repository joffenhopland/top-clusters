import FaqAccordion from "../faq-accordion/faq-accordion.component"
import { FaqContainer, FaqContent, FaqTitle, FaqSubtitle, FaqItemsContainer } from "./faq.styles"

const Faq = () => {
    return(
        <FaqContainer>
            <FaqContent>
                <FaqTitle>Frequently Asked Questions</FaqTitle>
                <FaqSubtitle>We have put together some commonly asked questions.</FaqSubtitle>
                <FaqItemsContainer>
                    <FaqAccordion/>
                </FaqItemsContainer>
            </FaqContent>
        </FaqContainer>
    )
}

export default Faq