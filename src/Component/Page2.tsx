import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';

import ProgressBar from "./ProgressBar"
import RadioForm from './RadioForm';
import ChartPhyButtonGroup from './ChartPhyButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { setCandidate } from '../store/actions/QuestionActions';
import { Candidate } from '../types/store/QuestionStore';
import { routes } from '../App';
import { Container, Typography, TextField, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

export default function Page2() {
    const dispatch = useDispatch();
    const {candidate} = useSelector((state: RootState) => state.question);

    const [education,setEducation] = useState<string>(candidate.education);
    const [maritalStatus,setMaritalStatus] = useState<string>(candidate.maritalStatus);
    const [activity,setActivity] = useState<boolean[]>(candidate.activity);
    const handleActivity = (event: React.ChangeEvent<{ checked: boolean }>, index:number) => {
        const clone = [...activity];
        clone[index] = event.target.checked;
        setActivity(clone);
    };

    const [otherActivity,setOtherActivity] = useState<string>(candidate.otherActivity);
    const handleOtherActivityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOtherActivity(event.target.value as string);
    };

    const educationFormLabelList = ["Illiterate", "Primary school", "Secondary school", "Vocational degree", "Foundation degree", "Bachelor's degree", "Master's degree", "Doctorate"];
    const maritalStatusFormLabelList = ["Married", "Widowed", "Divorced", "Separated", "Single"];
    const activityFormLabelList = ["Jogging", "Fitness", "Individual sports", "Racket sports", "Team sports", "Water sports","Other"];

    const onPageChange = () => {
        const newCandidate:Candidate = {
            ...candidate,
            education: education,
            maritalStatus: maritalStatus,
            activity: activity,
            otherActivity: otherActivity
        }
        console.log(newCandidate);
        dispatch(setCandidate(newCandidate));

    }
    
    return (
        <Container maxWidth="sm">
            <ProgressBar value="10"/>

            <RadioForm 
                questionTitle={"Marital Status"} 
                value={maritalStatus} 
                handleRadioState={setMaritalStatus}
                formLabelList={maritalStatusFormLabelList} 
                /> 
            <Box m={4} />
            <RadioForm questionTitle={"Highest Level of Schooling"} value={education} handleRadioState={setEducation} formLabelList={educationFormLabelList} /> 
            <Box m={4} />
            {/* <RadioForm questionTitle={"Preferred type of physical activity"} value={activity} handleRadioState={setActivity} formLabelList={activityFormLabelList} />  */}
            <Typography variant="h5" display="block" gutterBottom >Preferred type of physical activity</Typography>
            <FormControl component="fieldset" style={{marginTop: "-8px"}}>
                <FormGroup>
                    {
                        activityFormLabelList.map((activityName, index) => {
                            return (
                                <FormControlLabel
                                    control={<Checkbox checked={activity[index]} onChange={(e) => handleActivity(e, index)} name={activityName} color="primary" />}
                                    label={activityName}
                                />
                            )
                        })
                    }
                </FormGroup>
            </FormControl>


            <Box display={activity[6] ? "block" : "none"}>
            <Box m={1} />
            <Typography variant="h5" display="block" gutterBottom >If others, please specify</Typography>
            <TextField id="outlined-basic" type="text"  variant="outlined" defaultValue={otherActivity} onChange={handleOtherActivityChange} />
            <Box m={4} />
            </Box >
            
            <ChartPhyButtonGroup  page={routes['/Page2']} onClick={onPageChange} />
        </Container>
    );
}