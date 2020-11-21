export interface IPage2Form  {
    education: string,
    maritalStatus: string,
    activity: string
}
// handleRadioState:<P extends keyof IPage2Form>(prop: P,value:IPage2Form[P])
export interface IRadioFormComponent {
    formLabelList: string[], value:string, handleRadioState:(value:string)=>void
}

export interface IRadioForm extends IRadioFormComponent{
    questionTitleString:string,
}