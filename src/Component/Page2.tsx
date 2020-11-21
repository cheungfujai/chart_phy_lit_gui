import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';

import RadioForm from './RadioForm';
import ButtonNext from '../../src/Component/ButtonNext';


export default function Page2() {

    const [education,setEducation] = useState<string>("");
    const [maritalStatus,setMaritalStatus] = useState<string>("");
    const [activity,setActivity] = useState<string>("");

    const educationFormLabelList = ["Secondary 3" ,"HKDSE (Secondary 6)", "Foundation degree","Bachelor's degree", "Master's degree","Doctorate's degree" ];
    const maritalStatusFormLabelList = ["Married", "Widowed", "Divorced", "Separated", "Never married"];
    const activityFormLabelList = ["Jogging", "Fitness", "Individual sports", "Racket sports", "Team sports", "Water sports","Other"];

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <RadioForm 
                questionTitle={"Marital Status"} 
                value={maritalStatus} 
                handleRadioState={setMaritalStatus}
                formLabelList={educationFormLabelList} 
                /> 
            <RadioForm questionTitle={"Education"} value={education} handleRadioState={setEducation} formLabelList={maritalStatusFormLabelList} /> 
            <RadioForm questionTitle={"Activity"} value={activity} handleRadioState={setActivity} formLabelList={activityFormLabelList} /> 
            <ButtonNext pageNumber={"/Page3"} />
        </Box>
    );
}