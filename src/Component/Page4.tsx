import React, { Component, useState } from 'react';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import Ipla from '../media/Ipla.jpg';

export default function Page4() {

    const [sportParticipation, setSportParticipation] = useState("null");
    const handleSportParticipationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSportParticipation((event.target as HTMLInputElement).value);
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
            
        </Box>
    );
}