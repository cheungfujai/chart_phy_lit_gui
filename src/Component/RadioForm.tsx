import React, { Component, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { IRadioForm, IRadioFormComponent, IRadioTextComponent } from '../types/RadioForm';

const RadioTextComponent = ( {questionTitle} :IRadioTextComponent ) => {
    return (
        <Typography variant="h5" display="block" gutterBottom>{ questionTitle }</Typography>
    )
}

const RadioFormComponent = ({formLabelList, value, handleRadioState}:IRadioFormComponent)=>{    
        return (
        <RadioGroup style={{marginTop: "-8px"}} value={value} onChange={(e)=> { handleRadioState(e.target.value)} }>
            {
                formLabelList.map((item,index)=>(
                    <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                ))
            }
        </RadioGroup>
    )
}

export default function RadioForm({questionTitle, formLabelList, value, handleRadioState} :IRadioForm) {
    return(
        <> 
            <RadioTextComponent questionTitle={questionTitle} />
            <RadioFormComponent 
                formLabelList={formLabelList} 
                value={value} 
                handleRadioState={handleRadioState} />
        </>
    )
}