import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';

import RadioForm from './RadioForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { setCandidate } from '../store/actions/QuestionActions';
import { Candidate } from '../types/store/QuestionStore';
import ChartPhyButton from './ChartPhyButton';
import Grid from '@material-ui/core/Grid';
import { route } from '../App';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toChangePageIndex from '../functions/routers/switchPage';




export default function Page2() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {candidate} = useSelector((state: RootState) => state.question);

    const {register , handleSubmit,errors,trigger} = useForm();

    const [education,setEducation] = useState<string>(candidate.education);
    const [maritalStatus,setMaritalStatus] = useState<string>(candidate.maritalStatus);
    const [activity,setActivity] = useState<string>(candidate.activity);

    const educationFormLabelList = ["Secondary 3" ,"HKDSE (Secondary 6)", "Foundation degree","Bachelor's degree", "Master's degree","Doctorate's degree" ];
    const maritalStatusFormLabelList = ["Married", "Widowed", "Divorced", "Separated", "Never married"];
    const activityFormLabelList = ["Jogging",    "Fitness", "Individual sports", "Racket sports", "Team sports", "Water sports","Other"];

    


    const currentPage = 2;

    const triggerError = async () => {
        ///TODO define name to be trigger
        const result = await trigger();
        if(result)return;
    }
    const onNextPage = () => {
        onPageChange();
        const buttonType = "next";
        const pageIndex = toChangePageIndex(buttonType,currentPage);
        history.push(pageIndex);
    }
    
    const onPreviousPage =  () => {
        onPageChange();
        const buttonType = "previous";
        const pageIndex = toChangePageIndex(buttonType,currentPage);
        history.push(pageIndex);
    }
    const onPageChange = () => {
        triggerError();
        const newCandidate:Candidate = {
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
            <div style={{flexGrow: 1,display:"flex"}}>
            <Grid item xs={6}>
                <ChartPhyButton content="previous"onClick={onPreviousPage} />
            </Grid>
            <Grid item xs={6}>
                <ChartPhyButton content="next"  onClick={onNextPage} />
             </Grid>
            </div>
        </Box>
    );
}