import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


import ButtonNext from './ButtonNext';

export default function Page3() {

    const [activityDay, setActivityDay] = useState<number>(-1);
    const handleActivityDay = (event: any, days: number | number[]) => {
        setActivityDay(days as number);
        console.log("set: ", days);
    }

    const valuetext = (days: number) => {
        return `${days}`;
    }

    const marks = [
        { value: 0, label: '0', },
        { value: 1, label: '1', },
        { value: 2, label: '2', },
        { value: 3, label: '3', },
        { value: 4, label: '4', },
        { value: 5, label: '5', },
        { value: 6, label: '6', },
        { value: 7, label: '7', },
    ];

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>

            <Typography id="discrete-slider" gutterBottom> During the last 7 days, on how many days did you do any kinds of physical activities? </Typography>
            <Slider 
                style={{width: "200", paddingTop: "30px"}}
                defaultValue={3}
                getAriaValueText={valuetext}
                onChange={handleActivityDay}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={7}
            />

            <ButtonNext pageNumber={"/Page4"} />
            
        </Box>
    );
}