import { Question, Candidate, Profile } from '../../types/store/QuestionStore';
import { SET_INIT_QUESTION, SET_ANSWER, SET_CANDIDATE, SET_PROFILE } from '../../types/store/QuestionAction';


export const setInitQuestion = (question:Question[]) => {
    return {
        type: SET_INIT_QUESTION,
        payload: question
    }
}


export const setAnswer = (answer:number[]) => {
    return {
        type: SET_ANSWER,
        payload:answer
    }
}

export const initQuestionAndAnswer = (question:Question[]) => {
    return  dispatch => {
        const answer:number[] = new Array(question.length).fill(0);
        dispatch(setAnswer(answer));
        dispatch(setInitQuestion(question));
        }
}



export const setCandidate = (candidate:Candidate) => {
    return {
        type: SET_CANDIDATE,
        payload: candidate
    }
}

export const setProfile = (profile:Profile) => {
    return {
        type: SET_PROFILE,
        payload: profile
    }
}

