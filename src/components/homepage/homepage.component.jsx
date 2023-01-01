import Header from "../header/header.component"
import ValueStack from "../value-stack/value-stack.component"
import {HomepageContainer} from "./homepage.styles"

const Homepage = () => {
    return (
        <HomepageContainer>
            <Header/>
            <ValueStack/>
            {/* <ProblemSection/>
            <ValuePropSection/>
            <GuideSection/>
            <PlanSection/>
            <PricingSection/>
            <SuccessSection/>
            <FAQSection/>
            <CTASection/> */}
        </HomepageContainer>
            
            
    )
}

export default Homepage