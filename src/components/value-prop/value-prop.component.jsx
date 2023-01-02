import {ValuePropContainer, ValuePropBackground, ValuePropContent, ValuePropTitle, ValuePropBenefitsContent, ValuePropBenefit1, ValuePropBenefit2, ValuePropBenefit3, ValuePropBenefit4, ValuePropBenefit5, ValuePropBenefit6, ValuePropBenefitTitle, ValuePropBenefitText, ValuePropIconContainer} from "./value-prop.styles"
import { ReactComponent as TrendingUpIcon } from '../../assets/icons/trending_up_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as HubIcon } from '../../assets/icons/hub_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as OrganicTrafficIcon } from '../../assets/icons/organic_traffic_icon.svg';
import { ReactComponent as AuthorityIcon } from '../../assets/icons/authority_icon.svg';
import { ReactComponent as ContentIcon } from '../../assets/icons/content_icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search_icon.svg';


const ValueProp = () => {
    return(
        <ValuePropContainer>
            <ValuePropBackground>
            </ValuePropBackground>
            <ValuePropContent>
                <ValuePropTitle>
                    Our keyword clustering software is built to make your life easier
                </ValuePropTitle>
                <ValuePropBenefitsContent>
                    <ValuePropBenefit1>
                    <ValuePropIconContainer><TrendingUpIcon/></ValuePropIconContainer>
                    <ValuePropBenefitTitle>Cluster thousands of keywords</ValuePropBenefitTitle>
                    <ValuePropBenefitText>Automate the keyword research process and save hours of time by
              allowing Top Clusters to group your keywords into topical clusters
              based on user search intent.</ValuePropBenefitText>
                    </ValuePropBenefit1>
                    <ValuePropBenefit2>
                    <ValuePropIconContainer><HubIcon/></ValuePropIconContainer>
                    <ValuePropBenefitTitle>Improve your ranking in the SERPs</ValuePropBenefitTitle>
                    <ValuePropBenefitText>We use real-time Google SERP data to quickly identify topically
              related keywords by identifying URLs that are ranking for similar
              keywords.</ValuePropBenefitText>
                    </ValuePropBenefit2>
                    <ValuePropBenefit3>
                    <ValuePropIconContainer><OrganicTrafficIcon/></ValuePropIconContainer>
                    <ValuePropBenefitTitle>Increase your organic traffic</ValuePropBenefitTitle>
                    <ValuePropBenefitText>Our keyword clustering tool helps you optimize your content marketing for search intention, which can result in more organic traffic.</ValuePropBenefitText>
                    </ValuePropBenefit3>
                    <ValuePropBenefit4>
                    <ValuePropIconContainer><AuthorityIcon/></ValuePropIconContainer>
                    <ValuePropBenefitTitle>Build authority in your industry niche</ValuePropBenefitTitle>
                    <ValuePropBenefitText>Accurate keyword grouping helps your website and content look more authoritative to search engine algorithms and visitors.</ValuePropBenefitText>
                    
                    </ValuePropBenefit4>
                    <ValuePropBenefit5>
                    <ValuePropIconContainer><ContentIcon/></ValuePropIconContainer>
                    <ValuePropBenefitTitle>Enhance the context and relevance of your content</ValuePropBenefitTitle>
                    <ValuePropBenefitText>Identify topically related keywords that you can target on a single page to offer more context to the readers and improve the relevance of your content.</ValuePropBenefitText>
                    
                    </ValuePropBenefit5>
                    <ValuePropBenefit6>
                    <ValuePropIconContainer><SearchIcon/></ValuePropIconContainer>
                    <ValuePropBenefitTitle>Improve rankings for short and long-tailed keywords</ValuePropBenefitTitle>
                    <ValuePropBenefitText>Using topic cluster increases your chances of ranking for long and short-tailed keywords that can be difficult to rank for alone.</ValuePropBenefitText>
                    
                    </ValuePropBenefit6>
                </ValuePropBenefitsContent>
            </ValuePropContent>

        </ValuePropContainer>
    )
}

export default ValueProp