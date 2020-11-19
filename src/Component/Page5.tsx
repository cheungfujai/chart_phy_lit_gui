import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Button,FormControl,RadioGroup,FormControlLabel,FormLabel,Radio } from '@material-ui/core';

/// richard 2020-11-19

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
    "q1","q2","q3","q4","q5","q6","q7","q8"
];

const RadioButtonRow = ({rowQuestion,rowIndex})=>{
    const [selectedValue, setSelectedValue] = React.useState<string|null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value);
      };
    return (
        <tr>
        <td>{rowQuestion}</td>
        {columnAttributeList.map((item,index)=>(
        <td key={`row-${rowIndex}-${index}`}>
            <Radio
                checked={selectedValue === item}
                onChange={handleChange}
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
                {columnAttributeList.map((item,index)=>(<td width="200" key={`col-title-${index}`}>{item}</td>))}
                </tr>
            </thead>
            <tbody>
                {
                    rowQuestionList.map((item,index)=>(
                        <RadioButtonRow key={`row-${index}`} rowQuestion={item} rowIndex={index}/>
                    ))
                }
            </tbody>
            

        
        </table>

        </>
    )
};

export default function Page5() {
    const nextPage = () => {
    }
    
    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <RadioQuestionnaireTemplate />
            <NextPageButton  />
        </Box>

        
    );
}