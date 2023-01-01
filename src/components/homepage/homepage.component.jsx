import Header from "../header/header.component"
import ValueStackSection from "../value-stack-section/value-stack-section.component"
import {HomepageContainer} from "./homepage.styles"

const Homepage = () => {
    return (
        <HomepageContainer>
            <Header/>
            <ValueStackSection/>
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