import Header from "../header/header.component"
import ValueStack from "../value-stack/value-stack.component"
import Problem from "../problem/problem.component"
import ValueProp from "../value-prop/value-prop.component"
import Guide from "../guide/guide.component"
import {HomepageContainer} from "./homepage.styles"

const Homepage = () => {
    return (
        <HomepageContainer>
            <Header/>
            <ValueStack/>
            <Problem/>
            <ValueProp/>
            <Guide/>
            {/* <PlanSection/>
            <PricingSection/>
            <SuccessSection/>
            <FAQSection/>
            <CTASection/> */}
        </HomepageContainer>
            
            
    )
}

export default Homepage