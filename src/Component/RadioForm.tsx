import React, { Component, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { IRadioForm, IRadioFormComponent } from '../types/RadioForm';

const RadioTextComponent = ( questionTitle: string ) => {
    return (
        <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>{ questionTitle }</Typography>
    )
}

const RadioFormComponent = ({formLabelList, value, handleRadioState}:IRadioFormComponent)=>{    
        return (
        <RadioGroup value={value} onChange={(e)=> { handleRadioState(e.target.value)} } style={{ padding: "10px" }}>
            {
                formLabelList.map((item,index)=>{
                    <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                })
            }
        </RadioGroup>
    )
}

export default function RadioForm({questionTitleString, formLabelList, value, handleRadioState}:IRadioForm) {
    return(
        <>
            <RadioTextComponent {... questionTitleString} />
            <RadioFormComponent 
                formLabelList={formLabelList} 
                value={value} 
                handleRadioState={handleRadioState} />
        </>
    )
}