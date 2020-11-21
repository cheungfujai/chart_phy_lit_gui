import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';

import { useHistory } from 'react-router-dom';

import Ipla from '../media/Ipla.jpg';
import RadioForm from './RadioForm';
import ButtonNext from '../../src/Component/ButtonNext';
import { IPage2Form } from '../types/RadioForm';

export default function Page2() {
    
    // const [radioState, setRadioState] = useState<IPage2Form>({
    //     education: "",
    //     maritalStatus:"",
    //     activity:"",
    // });
    
    // const handleRadioState = <P extends keyof IPage2Form>(prop: P,value:IPage2Form[P]) => {
    //     setRadioState({...radioState,[prop]:value})
    // }
    const [education,setEducation] = useState<string>("");
    const handleEducationChange = (value:string) :void=> {
        setActivity(value);
        console.log(value);
    }
    const [maritalStatus,setMaritalStatus] = useState<string>("");
    const handleMaritalStatusChange = (value:string) => {
        setActivity(value);
        console.log(value);
    }

    const [activity,setActivity] = useState<string>("");
    const handleActivityChange = (value:string) => {
        setActivity(value);
        console.log(value);
    }

    const educationFormLabelList = ["Secondary 3" ,"HKDSE (Secondary 6)", "Foundation degree","Bachelor's degree", "Master's degree","Doctorate's degree" ];
    const maritalStatusFormLabelList = ["Married", "Widowed", "Divorced", "Separated", "Separated", "Never married"];
    const activityFormLabelList = ["Jogging", "Fitness", "Individual sports", "Racket sports", "Racket sports", "Team sports", "Water sports","Other"];

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <img src={Ipla} alt="Ipla" style={{ paddingBottom: "50px", height:"80px", margin: "auto", display: "block", alignItems: "center"}} />

            <RadioForm 
                questionTitleString={"Marital Status"} 
                value={maritalStatus} 
                handleRadioState={handleMaritalStatusChange}
                formLabelList={educationFormLabelList} /> 
            <RadioForm questionTitleString={"Education"} value={education} handleRadioState={handleEducationChange} formLabelList={maritalStatusFormLabelList} /> 
            <RadioForm questionTitleString={"Activity"} value={activity} handleRadioState={handleActivityChange} formLabelList={activityFormLabelList} /> 
            <ButtonNext pageNumber={"/Page2"} />
        </Box>
    );
}