export interface IRadioQuestionnaireTemplate  {
    rowQuestionList: string[],
    columnAttributeList: string[],
    value: any[],
    setValue: (value: any[]) => void
}

export interface IRadioButtonRow  {
    columnAttributeList: string[],
    rowQuestion: string,
    rowIndex: number,
    value: any[],
    setValue: (value: any[]) => void
}