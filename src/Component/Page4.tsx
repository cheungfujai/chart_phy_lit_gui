import React, { Component, useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import RadioForm from './RadioForm';
import ChartPhyButtonGroup from './ChartPhyButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { setCandidate } from '../store/actions/QuestionActions';

export default function Page4() {
    const dispatch = useDispatch();
    const {candidate} = useSelector((state: RootState) => state.question);

    const [sportParticipation, setSportParticipation] = useState(candidate.sportLevel);
    const handleSportParticipationChange = (value:string) => {
        setSportParticipation(value);
    }

    const [employment, setEmployment] = useState(candidate.employment);
    const handleEmploymentChange = (value:string) => {
        setEmployment(value);
    }

    const [yearlyFamilyIncome, setYearlyFamilyIncome] = useState(candidate.yearlyFamilyIncome);
    const handleYearlyFamilyIncomeChange = (value:string) => {
        setYearlyFamilyIncome(value);
    }

    const sortParticipationFormLabelList = [
        "Active starts","Fundamentals","Learn to train","Train to train","Train to compete",
        "Train to win","Competitive for life","Fit for life","Active for life"]
    
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
            sportLevel:sportParticipation,
            employment:employment,
            yearlyFamilyIncome:yearlyFamilyIncome
        }
        dispatch(setCandidate(newCandidate));
    }
    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>How much time did you usually spend doing any kinds of physical activities on one of those days (in hours and minutes, e.g. 2 hours and 30 minutes)?</Typography>
            <TextField id="outlined-basic" label="" style={{padding: "20px", paddingBottom: "30px" }} variant="outlined" />
        
            <RadioForm 
                questionTitle={"Highest level of sports participation"} 
                value={sportParticipation} 
                handleRadioState={handleSportParticipationChange}
                formLabelList={sortParticipationFormLabelList} 
                /> 

            <RadioForm 
                questionTitle={"Employment"} 
                value={employment} 
                handleRadioState={handleEmploymentChange}
                formLabelList={employmentFormLabelList} 
                /> 

            <RadioForm 
                questionTitle={"YearlyFamilyIncome"} 
                value={yearlyFamilyIncome} 
                handleRadioState={handleYearlyFamilyIncomeChange}
                formLabelList={yearlyFamilyIncomeFormLabelList} 
                /> 

            <ChartPhyButtonGroup  page={4} onClick={onPageChange} />
        </Box>
    );
}