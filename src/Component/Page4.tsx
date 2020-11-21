import React, { Component, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { useHistory } from 'react-router-dom';
import Ipla from '../media/Ipla.jpg';

export default function Page4() {

    const history = useHistory();
    const toPage3OnClick = () => {
        history.push('/Page5');
    }

    const [sportParticipation, setSportParticipation] = useState("null");
    const handleSportParticipationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSportParticipation((event.target as HTMLInputElement).value);
        console.log((event.target as HTMLInputElement).value);
    }

    const [Employment, setEmployment] = useState("null");
    const handleEmploymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmployment((event.target as HTMLInputElement).value);
        console.log((event.target as HTMLInputElement).value);
    }

    const [YearlyFamilyIncome, setYearlyFamilyIncome] = useState("null");
    const handleYearlyFamilyIncomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYearlyFamilyIncome((event.target as HTMLInputElement).value);
        console.log((event.target as HTMLInputElement).value);
    }

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <img src={Ipla} alt="Ipla" style={{ paddingBottom: "50px", height:"80px", margin: "auto", display: "block", alignItems: "center"}} />
            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>How much time did you usually spend doing any kinds of physical activities on one of those days (in hours and minutes, e.g. 2 hours and 30 minutes)?</Typography>
            <TextField id="outlined-basic" label="" style={{padding: "20px", paddingBottom: "30px" }} variant="outlined" />
            
            <Typography variant="h6" display="block" gutterBottom >Highest level of sports participation</Typography>

            <RadioGroup aria-label="sportParticipation" value={sportParticipation} onChange={handleSportParticipationChange} style={{ padding: "10px" }}>
                <FormControlLabel value="Active starts" control={<Radio />} label="Active starts" />
                <FormControlLabel value="Fundamentals" control={<Radio />} label="Fundamentals" />
                <FormControlLabel value="Learn to train" control={<Radio />} label="Learn to train" />
                <FormControlLabel value="Train to train" control={<Radio />} label="Train to train" />
                <FormControlLabel value="Train to compete" control={<Radio />} label="Train to compete" />
                <FormControlLabel value="Train to win" control={<Radio />} label="Train to win" />
                <FormControlLabel value="Competitive for life" control={<Radio />} label="Cometitive for life" />
                <FormControlLabel value="Fit for life" control={<Radio />} label="Fit for life" />
                <FormControlLabel value="Active for life" control={<Radio />} label="Active for life" />
            </RadioGroup>

            <Typography variant="h6" display="block" gutterBottom >Employment</Typography>

            <RadioGroup aria-label="Employment" value={Employment} onChange={handleEmploymentChange} style={{ padding: "10px" }}>
                <FormControlLabel value="Employed full time" control={<Radio />} label="Employed full time" />
                <FormControlLabel value="Employed part time" control={<Radio />} label="Employed part time" />
                <FormControlLabel value="Unemployed looking for work" control={<Radio />} label="Unemployed looking for work" />
                <FormControlLabel value="Unemployed not looking for work" control={<Radio />} label="Unemployed not looking for work" />
                <FormControlLabel value="Retired" control={<Radio />} label="Retired" />
                <FormControlLabel value="Student" control={<Radio />} label="Student" />
                <FormControlLabel value="Disabled" control={<Radio />} label="Disabled" />
            </RadioGroup>
            
            <Typography variant="h6" display="block" gutterBottom >Yearly family income (USD)</Typography>

            <RadioGroup aria-label="YearlyFamilyIncome" value={YearlyFamilyIncome} onChange={handleYearlyFamilyIncomeChange} style={{ padding: "10px" }}>
                <FormControlLabel value="Less than $10,000" control={<Radio />} label="Less than $10,000" />
                <FormControlLabel value="$10,000 - $19,999" control={<Radio />} label="$10,000 - $19,999" />
                <FormControlLabel value="$20,000 - $29,999" control={<Radio />} label="$20,000 - $29,999" />
                <FormControlLabel value="$30,000 - $39,999" control={<Radio />} label="$30,000 - $39,999" />
                <FormControlLabel value="$40,000 - $49,999" control={<Radio />} label="$40,000 - $49,999" />
                <FormControlLabel value="$50,000 - $59,999" control={<Radio />} label="$50,000 - $59,999" />
                <FormControlLabel value="$60,000 - $69,999" control={<Radio />} label="$60,000 - $69,999" />
                <FormControlLabel value="$70,000 - $79,999" control={<Radio />} label="$70,000 - $79,999" />
                <FormControlLabel value="$80,000 - $89,999" control={<Radio />} label="$80,000 - $89,999" />
                <FormControlLabel value="$90,000 - $99,999" control={<Radio />} label="$90,000 - $99,999" />
                <FormControlLabel value="$100,000 - $149,999" control={<Radio />} label="$100,000 - $149,999" />
                <FormControlLabel value="More than $150,000" control={<Radio />} label="More than $150,000" />
            </RadioGroup>

            <p style={{padding: "10px"}} />
            <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
                onClick = {toPage3OnClick} > Next </Button>
            <p style={{paddingTop: "20px"}} />
        </Box>
    );
}