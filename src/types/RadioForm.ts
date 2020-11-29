export interface  IRadioTextComponent{
    questionTitle:string,
}
export interface IRadioFormComponent {
    formLabelList: string[], value:string, handleRadioState:(value:string)=>void
}

export interface IRadioForm extends IRadioFormComponent{
    questionTitle:string,
}

