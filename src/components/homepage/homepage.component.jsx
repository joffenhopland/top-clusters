import HeaderSection from "../header-section/header-section.component"
import ValueStackSection from "../value-stack-section/value-stack-section.component"

const Homepage = () => {
    return (
        <div className="homepage-container">
            <HeaderSection/>
            <ValueStackSection/>
            {/* <ProblemSection/>
            <ValuePropSection/>
            <GuideSection/>
            <PlanSection/>
            <PricingSection/>
            <SuccessSection/>
            <FAQSection/>
            <CTASection/> */}
        </div>
    )
}

export default Homepage