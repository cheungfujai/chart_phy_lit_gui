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
    "q1","q2","q3","q4"
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