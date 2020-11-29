import { Candidate, Question } from './QuestionStore';

export const SET_CANDIDATE = 'SET_CANDIDATE';
export const SET_INIT_QUESTION = 'SET_QUESTION_DATA';
export const SET_ANSWER = 'SET_ANSWER';


// Actions

interface SetCandidateAction{
    type: typeof SET_CANDIDATE;
    payload: Candidate
}

interface SetInitQuestionAction {
    type: typeof SET_INIT_QUESTION;
    payload: Question[]
}

interface SetAnswerAction {
    type: typeof SET_ANSWER;
    payload:number[]|null[]
}


export type QuestionAction =    SetCandidateAction | SetInitQuestionAction | SetAnswerAction  ;