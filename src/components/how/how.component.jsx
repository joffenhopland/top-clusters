import { HowContainer, HowBackground, HowContent, HowTitle, HowStepsContent, HowStepsTitle, HowStepsText, HowIconContainer, HowStepsContainer1, HowStepsContainer2, HowStepsContainer3, HowStepsContainer4, HowStepsContainer5, HowStepsContainer6 } from "./how.styles"
import { ReactComponent as UploadIcon } from '../../assets/icons/upload_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as HubIcon } from '../../assets/icons/hub_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as LabIcon } from '../../assets/icons/lab_profile_FILL0_wght400_GRAD0_opsz48.svg';


const How = () => {
    return(
<HowContainer>
<HowBackground>
</HowBackground>
<HowContent>
    <HowTitle>
        How it works
    </HowTitle>
    <HowStepsContent>
        <HowStepsContainer1>
            <HowIconContainer>
                <UploadIcon/>
            </HowIconContainer>
        </HowStepsContainer1>
        <HowStepsContainer2>
            <HowStepsTitle>
                1. Upload keyword list
            </HowStepsTitle>
            <HowStepsText>
                Upload a CSV file of keywords from your favorite keyword research tool.
                We support Ahrefs and SemRUSH. Alternatively you can upload your own custom keyword file 
            </HowStepsText>
        </HowStepsContainer2>
        <HowStepsContainer3>
        <HowIconContainer>
                <HubIcon/>
            </HowIconContainer>
        </HowStepsContainer3>
        <HowStepsContainer4>
        <HowStepsTitle>
                2. Cluster keywords
            </HowStepsTitle>
            <HowStepsText>
            Top Clusters will run every keyword through Google and retrieve the top 10 ranking websites for every keyword. We then use state-of-the-art clustering algorithms that use associations to different keywords to group topically related keywords.
            </HowStepsText>
        </HowStepsContainer4>
        <HowStepsContainer5>
        <HowIconContainer>
                <LabIcon/>
            </HowIconContainer>
        </HowStepsContainer5>
        <HowStepsContainer6>
        <HowStepsTitle>
                3. Receive report
            </HowStepsTitle>
            <HowStepsText>
            Depending on the size of your keyword list, within a few minutes you’ll receive an email with a link to your completed keyword clustering report. You can also view it in your dashboard. The report will clearly show you what the main keyword each page should target is, whilst also showing you all the other keywords that page can target. 
            </HowStepsText>
        </HowStepsContainer6>
    </HowStepsContent>
</HowContent>
</HowContainer>
    )
}


export default How