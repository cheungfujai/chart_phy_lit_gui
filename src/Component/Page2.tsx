import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';

import RadioForm from './RadioForm';
import ChartPhyButtonGroup from './ChartPhyButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { setCandidate } from '../store/actions/QuestionActions';


export default function Page2() {
    const dispatch = useDispatch();
    const {candidate} = useSelector((state: RootState) => state.question);

    const [education,setEducation] = useState<string>(candidate.education);
    const [maritalStatus,setMaritalStatus] = useState<string>(candidate.martialStatus);
    const [activity,setActivity] = useState<string>(candidate.activity);

    const educationFormLabelList = ["Secondary 3" ,"HKDSE (Secondary 6)", "Foundation degree","Bachelor's degree", "Master's degree","Doctorate's degree" ];
    const maritalStatusFormLabelList = ["Married", "Widowed", "Divorced", "Separated", "Never married"];
    const activityFormLabelList = ["Jogging", "Fitness", "Individual sports", "Racket sports", "Team sports", "Water sports","Other"];


    const onPageChange = () => {
    
        const newCandidate = {
            ...candidate,
            education: education,
            maritalStatus: maritalStatus,
            activity: activity
        }
        console.log(newCandidate);
        dispatch(setCandidate(newCandidate));

    }
    
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
            <ChartPhyButtonGroup  page={2} onClick={onPageChange} />
        </Box>
    );
}