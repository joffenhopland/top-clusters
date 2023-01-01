import { ProblemContainer, ProblemContent, ProblemImg, Img, ProblemContentTextColumn, ProblemContentTextRow, ProblemContentTitle, ProblemText, ProblemArrowColumn, RightArrowContainer } from "./problem.styles"
import ProblemImage from "../../assets/images/problem-image.png"
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg';


const Problem = () => {
    return(
        <ProblemContainer>
            <ProblemContent>
            <ProblemImg>
                <Img src={ProblemImage} alt="Frustrated office worker"/>
            </ProblemImg>
            <ProblemContentTextRow>
            <ProblemArrowColumn>
                <RightArrowContainer style={{"opacity":"0"}}>
                <RightArrowIcon/>
                </RightArrowContainer>
                <RightArrowContainer>
                <RightArrowIcon/>
                </RightArrowContainer>
                <RightArrowContainer>
                <RightArrowIcon/>
                </RightArrowContainer>
                <RightArrowContainer>
                <RightArrowIcon/>
                </RightArrowContainer>
            </ProblemArrowColumn>
            <ProblemContentTextColumn>
        
            <ProblemContentTitle>
            Manually grouping keywords into topical clusters is 
            complicated and time-consuming:
            </ProblemContentTitle>
            <ProblemText>
            Identifying keywords with similar search intent is very difficult
            </ProblemText>
            <ProblemText>
            Guessing which keywords to group together leads to less relevant content and website traffic
            </ProblemText>
            <ProblemText>
            Inaccurate keyword grouping can lead to keyword cannibalization 
            </ProblemText>
        </ProblemContentTextColumn>
            </ProblemContentTextRow>
           
            </ProblemContent>
        </ProblemContainer>
    )
}

export default Problem