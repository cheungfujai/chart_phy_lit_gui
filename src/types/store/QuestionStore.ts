



export interface QuestionState {
    question:Question[],
    answer:number[],
    questionPerPage:number,
    candidate:Candidate,
    profile:Profile,
}

export type Profile = {
    [key in Dimension]: number;
};

export enum Dimension {
    Motivation="motivation",
    Confidence="confidence",
    Competence="competence",
    Knowledge="knowledge"
}

export interface Question {
    _id :string,
    title: string,
    dimension:Dimension,
    grading:number,
}

export interface Answer {
    questionId:string,
    marks:number,
}

export interface Candidate {
    gender:string,
    age:number|null,
    measureUnit:number|null,
    height:number|null,
    weight:number|null,
    nationality:string,
    ethnicity:string,
    maritalStatus:string,
    education:string,
    activity:boolean[],
    otherActivity:string,
    durationDaysActivity:number[],
    daysActivity:number,
    sportLevel:string,
    employment:string,
    yearlyFamilyIncome:string
}
