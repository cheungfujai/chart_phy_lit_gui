



export interface QuestionState {
    question:Question[],
    answer:number[],
    questionPerPage:number,
    candidate:Candidate,
}

enum Dimension {
    Motivation="motivation",
    Confidence="confidence",
    Competence="competence",
    Knowledge="knowledge"
}

export interface Question {
    _id :string;
    title: string;
}

export interface Answer {
    questionId:string,
    marks:number,
}

export interface Candidate {
    gender:string,
    age:number|null,
    height:number|null,
    weight:number|null,
    nationality:string,
    ethnicity:string,
    maritalStatus:string,
    education:string,
    activity:string,
    daysActivity:number,
    sportLevel:string,
    employment:string,
    yearlyFamilyIncome:string
}
