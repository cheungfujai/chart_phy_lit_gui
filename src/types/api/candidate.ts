import { Candidate, Question, Dimension, Profile } from '../store/QuestionStore';


interface IAnswer{
    marks:number
}
interface ITitle {
    question : Question,
    answer : IAnswer
}
interface ICreateCandidateRequest extends Candidate{
    title:ITitle[]
}
export type {
    IAnswer,
    ITitle,
    ICreateCandidateRequest
}
