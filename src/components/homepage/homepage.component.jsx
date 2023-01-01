import Header from "../header/header.component"
import ValueStack from "../value-stack/value-stack.component"
import Problem from "../problem/problem.component"
import {HomepageContainer} from "./homepage.styles"

const Homepage = () => {
    return (
        <HomepageContainer>
            <Header/>
            <ValueStack/>
            <Problem/>
            {/* <ValuePropSection/>
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