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
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCandidate } from '../store/actions/QuestionActions';
import { RootState } from '../store/reducer';
import { useForm } from 'react-hook-form';
import ChartPhyButton from './ChartPhyButton';


export default function Starter() {
    const { register, handleSubmit,errors ,trigger} = useForm({mode:'onBlur'});
    const history = useHistory();
    const dispatch = useDispatch();
    const {candidate} = useSelector((state: RootState) => state.question);

    const [nationality, setNationality] = React.useState(candidate.nationality);
    const [ethnicity, setEthnicity] = React.useState(candidate.ethnicity);
  

    const [pageObj, setPageObj] = useState(candidate);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        const {name , value } = event.target;
        setPageObj({
            ...pageObj,
            [name]:value
        })
    }
    const handleNationalityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setNationality(event.target.value as string);
    };

    const handleEthnicityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setEthnicity(event.target.value as string);
    };

    const nextPage = () => {        
        const newCandidate = {
            ...candidate,
            gender:pageObj.gender,
            weight:pageObj.weight,
            height:pageObj.height,
            nationality:nationality,
            ethnicity:ethnicity
        }
        dispatch(setCandidate(newCandidate));
        history.push("/Page2");
    }
    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            
            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Gender</Typography>
            <RadioGroup aria-label="gender"name="gender" value={pageObj.gender} onChange={handleChange} style={{ padding: "10px" }}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Age</Typography>
            <TextField 
                id="outlined-basic"    
                name="age" label="Age" 
                type="number" 
                variant="outlined" 
                defaultValue={pageObj.age} 
                inputRef={register({required: true})} 
                onChange={handleChange} 
            />
            {errors.age && <p>this is required</p>}

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Height</Typography>
            <TextField 
                id="outlined-basic" 
                name="height" 
                label="Height"
                type="number"  
                variant="outlined" 
                defaultValue={pageObj.height} 
                inputRef={register({required: true})} 
                onChange={handleChange}
                />
            {errors.height && <p>this is required</p>}

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Weight</Typography>
            <TextField 
                id="outlined-basic" 
                name="weight" 
                label="Weight"
                type="number"  
                variant="outlined" 
                defaultValue={pageObj.weight} 
                inputRef={register({required: true})} 
                onChange={handleChange}/>
            {errors.weight && <p>this is required</p>}

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Nationality</Typography>
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Nationality</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    value={nationality}
                    onChange={handleNationalityChange}
                    name="nationality"
                    label="Nationality"
                    inputRef={register({required: true})}
                >
                    <MenuItem value={10}>Brazil</MenuItem>
                    <MenuItem value={20}>China</MenuItem>
                    <MenuItem value={40}>Hong Kong</MenuItem>
                    <MenuItem value={30}>India</MenuItem>
                    <MenuItem value={50}>Taiwan</MenuItem>
                    <MenuItem value={60}>The United Kingdom</MenuItem>
                    <MenuItem value={70}>The United States of America</MenuItem>
                </Select>
                {errors.nationality && <p>this is required</p>}
            </FormControl>

            <Typography variant="h6" display="block" gutterBottom style={{ padding: "10px" }}>Ethnicity</Typography>
            <FormControl variant="outlined" fullWidth >
                <InputLabel id="demo-simple-select-outlined-label">Ethnicity</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    value={ethnicity}
                    onChange={handleEthnicityChange}
                    label="Ethnicity"
                    inputRef={register({required: true})}
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
            <ChartPhyButton content="next" onClick={handleSubmit(nextPage)}/>
        </Box>
    );
}