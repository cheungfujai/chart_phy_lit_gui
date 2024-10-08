import React, { Component, useState } from 'react';

import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ChartPhyButtonGroup from './ChartPhyButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { setCandidate } from '../store/actions/QuestionActions';
import { routes } from '../App';
import ProgressBar from './ProgressBar';

export default function Page3() {
    const dispatch = useDispatch();
    const {candidate} = useSelector((state: RootState) => state.question);

    const [daysActivity, setdaysActivity] = useState<number>(candidate.daysActivity);
    const handleActivityDay = (event: any, days: number | number[]) => {
        setdaysActivity(days as number);
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

    const onPageChange = () => {
        const newCandidate = {
            ...candidate,
            daysActivity: daysActivity,
        }
        dispatch(setCandidate(newCandidate));
    }
    return (
        <Container maxWidth="sm">
            <ProgressBar value="30"/>

            <Typography id="discrete-slider" gutterBottom> During the last 7 days, on how many days did you do any kind of physical activities? </Typography>
            <Slider 
                style={{width: "200", paddingTop: "30px"}}
                defaultValue={daysActivity}
                getAriaValueText={valuetext}
                onChange={handleActivityDay}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={0}
                max={7}
            />

            <ChartPhyButtonGroup  page={routes['/Page3']} onClick={onPageChange} />
            
        </Container>
    );
}