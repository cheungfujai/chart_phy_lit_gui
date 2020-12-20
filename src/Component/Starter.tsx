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
import ChartPhyButton from './ChartPhyButton';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCandidate } from '../store/actions/QuestionActions';
import { RootState } from '../store/reducer';
import { routes } from '../App';



export default function Starter() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {candidate} = useSelector((state: RootState) => state.question);

    const [gender, setGender] = useState(candidate.gender);
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
        console.log((event.target as HTMLInputElement).value);
    }

    const [age, setAge] = useState<number>(candidate.age);

    const [height, setHeight] = useState<number>(candidate.height);
    const handleHeightChange = (h: number) => {
        setHeight(h as number);
        console.log("set: ", h);
    }

    const [weight, setWeight] = useState<number>(candidate.weight);
    const handleWeightChange = (w: number) => {
        setWeight(w as number);
        console.log("set: ", w);
    }

    const [nationality, setNationality] = React.useState<string>(candidate.nationality);
    const handleNationalityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setNationality(event.target.value as string);
    };

    const [ethnicity, setEthnicity] = React.useState<string>(candidate.ethnicity);
    const handleEthnicityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setEthnicity(event.target.value as string);
    };


    const nextPage = () => {
        
        const newCandidate = {
            ...candidate,
            gender:gender,
            age:age,
            weight:weight,
            height:height,
            nationality:nationality,
            ethnicity:ethnicity
        }
        console.log(newCandidate);
        dispatch(setCandidate(newCandidate));
        history.push(routes['/Page2']);
    }

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            
            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Gender</Typography>
            <RadioGroup aria-label="gender" value={gender} onChange={handleGenderChange} style={{ padding: "10px" }}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Age</Typography>
            <TextField id="outlined-basic" label="Age" type="number" variant="outlined" defaultValue={age} onChange={(e)=>setAge(+e.target.value)} />

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Height</Typography>
            <TextField id="outlined-basic" label="Height"type="number"  variant="outlined" defaultValue={height} onChange={(e)=>setHeight(+e.target.value)}/>

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Weight</Typography>
            <TextField id="outlined-basic" label="Weight"type="number"  variant="outlined" defaultValue={weight} onChange={(e)=>setWeight(+e.target.value)}/>

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
            
            
            <ChartPhyButton type="next" page={routes['/Starter']} onClick={nextPage} />

        </Box>
    );
}