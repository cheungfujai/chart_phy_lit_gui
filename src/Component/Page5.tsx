import React, { Children, Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Button,FormControl,RadioGroup,FormControlLabel,FormLabel,Radio } from '@material-ui/core';

/// richard 2020-11-19

const MContext = React.createContext([]as any);


const Provider = ({children}) => {
    const [value, setValue] = React.useState<any []>([null,null,null,null]as any);

    return (
        <MContext.Provider value={{value,setValue}}>
            {children}
        </MContext.Provider>
    )

}
const NextPageButton = ()=>(
    <div>
    <Button variant="contained" color="primary" size="large" 
        style={{ margin: "auto", display: "block", alignItems: "center",marginBottom:'20px',marginTop:'10px' }}
        onClick={()=>{}} > Next </Button>
    </div>
);

export const columnAttributeList:string[] = [
    "Not at all like me",
    "Not really like me",
    "Neutral",
    "Quite like me",
    "Very much like me"
];


const rowQuestionList:string[]=[
    "I know I can have rewarding experiences in physical activities and this enhances my self-esteem.",
    "I am starting to develop my awareness of the movement requirements of varied physical activity environments.",
    "I rarely want to engage in physical activity.",
    "I am aware that I can make progress in some activities and confident that I am capable of making further progress.",
    "I am quite confident that I can make some progress in physical activities.",
    "I am starting to understand that physical activity helps me to keep well so that I can enjoy life.",
    "I work effectively and creatively, individually and with others, in challenging competitive and co-operative physical activity environments.",
    "I usually look forward to taking part in physical activity.",
    "I am starting to engage with a wider variety of physical activities both individually and with others.",
    "I relish engaging in new and challenging physical activity environments and set myself ambitious goals.",
    "I am generally not at ease in different physical activity environments.",
    "I am developing my movement patterns and I am able to link them into sequences associated with a variety of physical activities.",
];

const RadioButtonRow = ({rowQuestion,rowIndex})=>{

    const {value,setValue} = React.useContext(MContext);

    return (
        <tr>

       <td >{rowQuestion}</td>
        
        {columnAttributeList.map((item,colIndex)=>(
                <td key={`row-${rowIndex}-${colIndex}`}>
                <Radio
                    checked={value[rowIndex] === item}
                    onChange={(e)=>{
                        setValue(value.map((it,idx)=>idx===rowIndex?e.target.value:it));
                    }}
                    value={item}
                />
            </td>
            
        )
        )}
            
        </tr>
    )
}
const RadioQuestionnaireTemplate = () =>{

    return (
        <>
        <table>
            <thead>
                <tr>
                <td width="150"></td>
                {columnAttributeList.map((item,colIndex)=>(<td width="200" key={`col-title-${colIndex}`}>{item}</td>))}
                </tr>
            </thead>
            <tbody>
                {
                    rowQuestionList.map((item,rowIndex)=>(
                        <RadioButtonRow key={`row-${rowIndex}`} rowQuestion={item} rowIndex={rowIndex}/>
                    ))
                }
            </tbody>
            

        
        </table>

        </>
    )
};

const APIsender = () => {
    const {value,setValue} = React.useContext(MContext);
    console.log(value);            
    return (
        <>
        </>
    )
}
export default function Page5() {
    const nextPage = () => {
    }

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <Provider>
            
            <RadioQuestionnaireTemplate />
            <NextPageButton  />
            <APIsender />
            </Provider>
        </Box>

        
    );
}