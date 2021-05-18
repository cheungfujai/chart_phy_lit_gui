import React, { Component, useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import RadioForm from './RadioForm';
import ChartPhyButtonGroup from './ChartPhyButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { setCandidate } from '../store/actions/QuestionActions';
import { routes } from '../App';
import ProgressBar from './ProgressBar';

export default function Page4() {
    const dispatch = useDispatch();
    const {candidate} = useSelector((state: RootState) => state.question);

    const [durationDaysActivity, setDurationDaysActivity] = useState<number[]>(candidate.durationDaysActivity);
    const handleDurationDaysActivity = (value, which) => {
        const buffer = [...durationDaysActivity];
        buffer[which] = value;
        setDurationDaysActivity(buffer);
    }


    const [sportParticipation, setSportParticipation] = useState<string>(candidate.sportLevel);
    const handleSportParticipationChange = (value:string) => {
        setSportParticipation(value);
    }

    const [employment, setEmployment] = useState<string>(candidate.employment);
    const handleEmploymentChange = (value:string) => {
        setEmployment(value);
    }

    const [yearlyFamilyIncome, setYearlyFamilyIncome] = useState<string>(candidate.yearlyFamilyIncome);
    const handleYearlyFamilyIncomeChange = (value:string) => {
        setYearlyFamilyIncome(value);
    }

    const sortParticipationFormLabelList = [
        "National Representative", "National (Junior) Representative", "University/ College Representative", "Secondary School/ High School Representative", "Recreation and Leisure", "No experience"
    ]
    
    const employmentFormLabelList = [
        "Employed full time","Employed part time","Unemployed looking for work",
        "Unemployed not looking for work","Retired","Student","Disabled"]

    const yearlyFamilyIncomeFormLabelList = [
        "Less than $10,000","$10,000 - $19,999","$20,000 - $29,999","$30,000 - $39,999","$40,000 - $49,999",
        "$50,000 - $59,999","$60,000 - $69,999","$70,000 - $79,999","$80,000 - $89,999","$90,000 - $99,999",
        "$100,000 - $149,999","More than $150,000"
    ]

    const onPageChange = () => {
        const newCandidate = {
            ...candidate,
            durationDaysActivity:durationDaysActivity,
            sportLevel:sportParticipation,
            employment:employment,
            yearlyFamilyIncome:yearlyFamilyIncome
        }
        dispatch(setCandidate(newCandidate));
    }
    return (
        <Container maxWidth="md">
            <ProgressBar value="40"/>

            <Box display={candidate.daysActivity > 0 ? "block" : "none"}>
            <Typography variant="h6" display="block" gutterBottom >
                On an average day, how much time do you spend doing physical activities?
            </Typography>
            <TextField 
                id="outlined-basic" 
                defaultValue={durationDaysActivity[0]}
                onChange={(e)=>handleDurationDaysActivity(e.target.value, 0)}
                variant="outlined" 
                placeholder="Hours"
            />
            <TextField 
                id="outlined-basic" 
                defaultValue={durationDaysActivity[1]}
                onChange={(e)=>handleDurationDaysActivity(e.target.value, 1)}
                variant="outlined" 
                placeholder="Minutes"
                style={{marginLeft: "16px"}}
            />
            <Box m={2}/>
            </Box>


            <RadioForm 
                questionTitle={"Highest level of sports participation"} 
                value={sportParticipation} 
                handleRadioState={handleSportParticipationChange}
                formLabelList={sortParticipationFormLabelList} 
                /> 

            <Box m={2}/>

            <RadioForm 
                questionTitle={"Employment"} 
                value={employment} 
                handleRadioState={handleEmploymentChange}
                formLabelList={employmentFormLabelList} 
                /> 

            <Box m={2}/>

            <RadioForm 
                questionTitle={"Yearly Family Income (in USD)"} 
                value={yearlyFamilyIncome} 
                handleRadioState={handleYearlyFamilyIncomeChange}
                formLabelList={yearlyFamilyIncomeFormLabelList} 
                /> 

            <Box m={2}/>

            <ChartPhyButtonGroup  page={routes['/Page4']} onClick={onPageChange} />
        </Container>
    );
}