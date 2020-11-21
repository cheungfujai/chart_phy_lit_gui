import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';

import RadioForm from './RadioForm';
import ButtonNext from '../../src/Component/ButtonNext';


export default function Page2() {

    const [education,setEducation] = useState<string>("");
    const handleEducationChange = (value:string) :void=> {
        setEducation(value);
        console.log(value);
    }
    const [maritalStatus,setMaritalStatus] = useState<string>("");
    const handleMaritalStatusChange = (value:string) => {
        setMaritalStatus(value);
        console.log(value);
    }
    const [activity,setActivity] = useState<string>("");
    const handleActivityChange = (value:string) => {
        setActivity(value);
        console.log(value);
    }

    const educationFormLabelList = ["Secondary 3" ,"HKDSE (Secondary 6)", "Foundation degree","Bachelor's degree", "Master's degree","Doctorate's degree" ];
    const maritalStatusFormLabelList = ["Married", "Widowed", "Divorced", "Separated", "Never married"];
    const activityFormLabelList = ["Jogging", "Fitness", "Individual sports", "Racket sports", "Team sports", "Water sports","Other"];

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <RadioForm 
                questionTitle={"Marital Status"} 
                value={maritalStatus} 
                handleRadioState={handleMaritalStatusChange}
                formLabelList={educationFormLabelList} 
                /> 
            <RadioForm questionTitle={"Education"} value={education} handleRadioState={handleEducationChange} formLabelList={maritalStatusFormLabelList} /> 
            <RadioForm questionTitle={"Activity"} value={activity} handleRadioState={handleActivityChange} formLabelList={activityFormLabelList} /> 
            <ButtonNext pageNumber={"/Page3"} />
        </Box>
    );
}