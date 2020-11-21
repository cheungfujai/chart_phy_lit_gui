export type PRadioQuestionnaireTemplate = {
    rowQuestionList:string[],
    columnAttributeList:string[],
    value:any[],
    setValue:(value:any[])=>void
}

export type PRadioButtonRow = {
    columnAttributeList:string[],
    rowQuestion:string,
    rowIndex:number,
    value:any[],
    setValue:(value:any[])=>void
}