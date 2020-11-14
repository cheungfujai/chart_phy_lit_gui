import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';

import Ipla from '../media/Ipla.jpg';

export default function Page2() {
    
    const history = useHistory();
    const toPage3OnClick = () => {
        history.push('/Page3');
    }

    const [maritalStatus, setMaritalStatus] = useState("null");
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaritalStatus((event.target as HTMLInputElement).value);
        console.log((event.target as HTMLInputElement).value);
    }

    const [education, setEducation] = useState("null");
    const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEducation((event.target as HTMLInputElement).value);
        console.log((event.target as HTMLInputElement).value);
    }

    const [activity, setActivity] = useState("null");
    const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActivity((event.target as HTMLInputElement).value);
        console.log((event.target as HTMLInputElement).value);
    }

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <img src={Ipla} alt="Ipla" style={{ paddingBottom: "50px", height:"80px", margin: "auto", display: "block", alignItems: "center"}} />

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Marital Status</Typography>
            <RadioGroup aria-label="maritalStatus" value={maritalStatus} onChange={handleGenderChange} style={{ padding: "10px" }}>
                <FormControlLabel value="Married" control={<Radio />} label="Married" />
                <FormControlLabel value="Widowed" control={<Radio />} label="Widowed" />
                <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
                <FormControlLabel value="Separated" control={<Radio />} label="Separated" />
                <FormControlLabel value="Never married" control={<Radio />} label="Never married" />
            </RadioGroup>

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Education</Typography>
            <RadioGroup aria-label="education" value={education} onChange={handleEducationChange} style={{ padding: "10px" }}>
                <FormControlLabel value="Primary School" control={<Radio />} label="Primary School" />
                <FormControlLabel value="Secondary 3" control={<Radio />} label="Secondary 3" />
                <FormControlLabel value="HKDSE (Secondary 6)" control={<Radio />} label="HKDSE (Secondary 6)" />
                <FormControlLabel value="Foundation degree" control={<Radio />} label="Foundation degree" />
                <FormControlLabel value="Bachelor's degree" control={<Radio />} label="Bachelor's degree" />
                <FormControlLabel value="Master's degree" control={<Radio />} label="Master's degree" />
                <FormControlLabel value="Doctorate's degree" control={<Radio />} label="Doctorate's degree" />
            </RadioGroup>

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Activity</Typography>
            <RadioGroup aria-label="activity" value={activity} onChange={handleActivityChange} style={{ padding: "10px" }}>
                <FormControlLabel value="Jogging" control={<Radio />} label="Jogging" />
                <FormControlLabel value="Fitness" control={<Radio />} label="Fitness" />
                <FormControlLabel value="Individual sports" control={<Radio />} label="Individual sports" />
                <FormControlLabel value="Racket sports" control={<Radio />} label="Racket sports" />
                <FormControlLabel value="Team sports" control={<Radio />} label="Team sports" />
                <FormControlLabel value="Water sports" control={<Radio />} label="Water sports" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>

            <p style={{padding: "10px"}} />
            <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
                onClick = {toPage3OnClick} > Next </Button>
            <p style={{paddingTop: "20px"}} />
        </Box>
    );
}