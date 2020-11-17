import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';

import Ipla from '../media/Ipla.jpg';

export default function Starter() {

    const history = useHistory();
    const toPage2OnClick = () => {
        history.push('/Page2');
    }

    const [motivation, setMotivation] = useState(0);
    const [confidence, setConfidence] = useState(0);
    const [competence, setCompetence] = useState(0);
    const [knowledge, setKnowledge] = useState(0);

    const disPlayDimensionMark = () => {
        console.log("motivation: ", motivation);
        console.log("confidence: ", confidence);
        console.log("competence: ", competence);
        console.log("knowledge: ", knowledge);
    }

    const [gender, setGender] = useState("null");
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
        console.log((event.target as HTMLInputElement).value);
    }

    const [age, setAge] = useState<number>(-1);
    const handleAgeChange = (a: number) => {
        setAge(a as number);
        console.log("set: ", afterEach);
    }

    const [height, setHeight] = useState<number>(-1);
    const handleHeightChange = (h: number) => {
        setHeight(h as number);
        console.log("set: ", h);
    }

    const [weight, setWeight] = useState<number>(-1);
    const handleWeightChange = (w: number) => {
        setWeight(w as number);
        console.log("set: ", w);
    }

    const [nationality, setNationality] = React.useState('');
    const handleNationalityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setNationality(event.target.value as string);
    };

    const [ethnicity, setEthnicity] = React.useState('');
    const handleEthnicityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setEthnicity(event.target.value as string);
    };

    React.useEffect(() => {
        disPlayDimensionMark();
    }, []);

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <img src={Ipla} alt="Ipla" style={{ paddingBottom: "50px", height:"80px", margin: "auto", display: "block", alignItems: "center"}} />
            
            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Gender</Typography>
            <RadioGroup aria-label="gender" value={gender} onChange={handleGenderChange} style={{ padding: "10px" }}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Age</Typography>
            <TextField id="outlined-basic" label="Age" variant="outlined" />

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Height</Typography>
            <TextField id="outlined-basic" label="Height" variant="outlined" />

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Weight</Typography>
            <TextField id="outlined-basic" label="Weight" variant="outlined" />

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Nationality</Typography>
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Nationality</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    value={nationality}
                    onChange={handleNationalityChange}
                    label="Nationality"
                >
                    <MenuItem value={10}>Brazil</MenuItem>
                    <MenuItem value={20}>China</MenuItem>
                    <MenuItem value={40}>Hong Kong</MenuItem>
                    <MenuItem value={30}>India</MenuItem>
                    <MenuItem value={50}>Taiwan</MenuItem>
                    <MenuItem value={60}>The United Kingdom</MenuItem>
                    <MenuItem value={70}>The United States of America</MenuItem>
                </Select>
            </FormControl>

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Ethnicity</Typography>
            <FormControl variant="outlined" fullWidth >
                <InputLabel id="demo-simple-select-outlined-label">Ethnicity</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    value={ethnicity}
                    onChange={handleEthnicityChange}
                    label="Ethnicity"
                >
                    <MenuItem value={10}>American Indian or Alaska Native</MenuItem>
                    <MenuItem value={20}>Asian</MenuItem>
                    <MenuItem value={40}>Black or African American</MenuItem>
                    <MenuItem value={30}>Hispanic or Latino</MenuItem>
                    <MenuItem value={50}>Native Hawaiian or Pacific Island</MenuItem>
                    <MenuItem value={60}>White</MenuItem>
                    <MenuItem value={70}>Other</MenuItem>
                </Select>
            </FormControl>
            
            <p style={{padding: "10px"}} />
            <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
                onClick = {toPage2OnClick} > Next </Button>
            <p style={{paddingTop: "20px"}} />

        </Box>
    );
}