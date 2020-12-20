import { ITitle } from "../../types/api/candidate";
import { Question } from "../../types/store/QuestionStore"

const mapQuestionAnswerToTitle = (questionList:Question[],answerList:number[]):ITitle[] => {
    const titleList:ITitle[] = [];
    questionList.forEach((question,idx) => {
        const title: ITitle = {
            question:question,
            answer:{
                marks:answerList[idx]
            }
        }
        titleList.push(title);
    });
    return titleList;
}


export {
    mapQuestionAnswerToTitle
} 